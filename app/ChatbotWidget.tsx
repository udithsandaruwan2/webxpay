"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const CHAT_URL =
    "https://asia-south1-chatbotweb-478005.cloudfunctions.net/geminiRaw";
type SearchState = "idle" | "greeting" | "searching" | "found" | "notFound";

function isNotFoundResponse(text: string) {
    return /(not\s+found|could(?:n't| not)\s+find|can(?:'t|not)\s+find|don't\s+have|do\s+not\s+have|no\s+(?:relevant|specific)\s+information|i\s+(?:don't|do\s+not)\s+know|unable\s+to\s+find|couldn't\s+locate|i\s*(?:am|'m)?\s*sorry.*(?:don't|do\s+not)\s*(?:quite\s*)?understand|do(?:n't| not)\s+quite\s+understand|not\s+sure\s+(?:what\s+you\s+mean|i\s+understand)|please\s+rephrase|could\s+you\s+rephrase|can\s+you\s+rephrase|did(?:n't| not)\s+catch\s+that|could(?:n't| not)\s+understand)/i.test(text);
}

type ChatbotWidgetProps = {
    initialOpen?: boolean;
};

export default function ChatbotWidget({initialOpen = false}: ChatbotWidgetProps) {
    const [open, setOpen] = useState(initialOpen);
    const [messages, setMessages] = useState<
        { sender: "user" | "bot"; text: string }[]
    >([]);
    const [isTyping, setIsTyping] = useState(false);
    const [searchState, setSearchState] = useState<SearchState>("idle");
    const chatRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const searchStateTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages, isTyping, searchState]);

    useEffect(() => {
        if (!open) {
            if (searchStateTimeoutRef.current) {
                clearTimeout(searchStateTimeoutRef.current);
                searchStateTimeoutRef.current = null;
            }
            setSearchState("idle");
            return;
        }

        if (messages.length === 0) {
            if (searchStateTimeoutRef.current) {
                clearTimeout(searchStateTimeoutRef.current);
            }
            setSearchState("greeting");
            searchStateTimeoutRef.current = setTimeout(() => {
                setSearchState("idle");
            }, 2200);
        }
    }, [open, messages.length]);

    useEffect(() => {
        return () => {
            if (searchStateTimeoutRef.current) {
                clearTimeout(searchStateTimeoutRef.current);
            }
        };
    }, []);

    function renderMarkdown(md: string) {
        if (!md) return "";

        // Escape raw HTML first to prevent XSS injection
        let safe = md
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

        safe = safe.replace(/\bwebxpaycom\b/gi, "webxpay.com");
        safe = safe.replace(/https:\/\/webxpaycom\b/gi, "https://webxpay.com");

        return safe
            .replace(
                /(https?:\/\/[^\s\)\]\}\,!?"]+)/g,
                (match) =>
                    `<a class="chat-link" href="${match}" target="_blank" rel="noopener noreferrer">${match}</a>`
            )
            .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
            .replace(/\*(.*?)\*/g, "<i>$1</i>")
            .replace(/`(.*?)`/g, "<code>$1</code>")
            .replace(/\n/g, "<br>");
    }

    async function sendMessage() {
        const userMessage = inputRef.current?.value.trim() ?? "";
        if (!userMessage) return;

        if (searchStateTimeoutRef.current) {
            clearTimeout(searchStateTimeoutRef.current);
            searchStateTimeoutRef.current = null;
        }

        setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
        if (inputRef.current) {
            inputRef.current.value = "";
        }
        setSearchState("searching");
        setIsTyping(true);

        try {
            const res = await fetch(
                `${CHAT_URL}?prompt=${encodeURIComponent(userMessage)}`
            );
            const data = await res.json();
            const rawAnswer =
                typeof data?.answer === "string" && data.answer.trim()
                    ? data.answer.trim()
                    : "I couldn't find anything clear for that yet. Try asking in a different way.";
            const botAnswer = rawAnswer;
            const nextState: SearchState = isNotFoundResponse(rawAnswer) ? "notFound" : "found";
            setIsTyping(false);
            setSearchState(nextState);
            searchStateTimeoutRef.current = setTimeout(() => {
                setSearchState("idle");
            }, 1400);
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: botAnswer },
            ]);
        } catch {
            setIsTyping(false);
            setSearchState("notFound");
            searchStateTimeoutRef.current = setTimeout(() => {
                setSearchState("idle");
            }, 1400);
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "I couldn't find anything right now. Please try again in a moment." },
            ]);
        }
    }

    return (
        <>
            <button className="cw-launcher" onClick={() => setOpen(true)} aria-label="Open chat">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            </button>

            {open && (
                <div className="cw-panel">
                    <header className="cw-header">
                        <div className="cw-header-logo">
                            <Image src="/chatwidget-logo/WEBXPAY%20XHELP%20grey.png" alt="WEBXPAY XHelp" width={180} height={48} className="h-12 w-auto object-contain" />
                        </div>
                        <div className="cw-close" onClick={() => setOpen(false)} role="button" aria-label="Close chat">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </header>

                    <div className="cw-chat-box" ref={chatRef}>
                        {messages.length === 0 && !isTyping && searchState === "idle" && (
                            <div className="cw-welcome">
                                <div className="cw-welcome-icon cw-welcome-x">
                                    <div className="cw-x-character cw-x-character-welcome" aria-hidden="true">
                                        <span className="cw-x-logo">X</span>
                                        <span className="cw-x-eye cw-x-eye-left"></span>
                                        <span className="cw-x-eye cw-x-eye-right"></span>
                                        <span className="cw-x-mouth"></span>
                                    </div>
                                </div>
                                <div className="cw-welcome-title">Welcome to WEBXPAY</div>
                                <div className="cw-welcome-subtitle">Hi there! How can we help you today? Ask us anything about our services.</div>
                            </div>
                        )}
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`cw-message ${msg.sender === "user" ? "cw-user" : "cw-bot"}`}
                                dangerouslySetInnerHTML={{
                                    __html: msg.sender === "bot" ? renderMarkdown(msg.text) : msg.text,
                                }}
                            />
                        ))}
                        {searchState !== "idle" && (
                            <div className={`cw-search-state cw-search-state-${searchState}`}>
                                <div className="cw-x-character" aria-hidden="true">
                                    <span className="cw-x-logo">X</span>
                                    <span className="cw-x-eye cw-x-eye-left"></span>
                                    <span className="cw-x-eye cw-x-eye-right"></span>
                                    <span className="cw-x-mouth"></span>
                                    {searchState === "searching" && <span className="cw-x-glass"></span>}
                                    {searchState === "found" && <span className="cw-x-status-mark">+</span>}
                                    {searchState === "notFound" && <span className="cw-x-status-mark">?</span>}
                                    {searchState === "greeting" && <span className="cw-x-sleep-z">z</span>}
                                </div>
                                <p>
                                    {searchState === "greeting" && "Hi! I am your assistant, waking up to help you."}
                                    {searchState === "searching" && "Analyzing your question..."}
                                    {searchState === "found" && "Great news! I found the best answer for you."}
                                    {searchState === "notFound" && "I couldn't find anything relevant for that yet."}
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="cw-controls">
                        <input
                            className="cw-input"
                            type="text"
                            placeholder="Type your message..."
                            autoComplete="off"
                            ref={inputRef}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    sendMessage();
                                }
                            }}
                        />
                        <button className="cw-send" onClick={sendMessage} aria-label="Send message">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </div>

                    <div className="cw-footer">
                        Powered by <a href="https://webxpay.com" target="_blank" rel="noopener noreferrer">WEBXPAY</a>
                    </div>
                </div>
            )}

            <style jsx global>{`
                :root {
                    --cw-launcher-bottom: 28px;
                }

                .cw-launcher {
                    position: fixed;
                    bottom: var(--cw-launcher-bottom);
                    right: calc(10vw - 36px);
                    background: #0f0f0f;
                    width: 72px;
                    height: 72px;
                    border-radius: 50%;
                    border: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    z-index: 99999;
                    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1), 0 0 0 0 rgba(15,15,15,0.4);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    animation: cwPulse 2s infinite;
                }

                @keyframes cwPulse {
                    0%, 100% { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1), 0 0 0 0 rgba(15,15,15,0.4); }
                    50% { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1), 0 0 0 8px rgba(15,15,15,0); }
                }

                .cw-launcher:hover {
                    transform: scale(1.08);
                    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1);
                    animation: none;
                }

                .cw-launcher svg {
                    width: 30px;
                    height: 30px;
                    transition: transform 0.3s ease;
                }

                .cw-launcher:hover svg {
                    transform: scale(1.1);
                }

                .cw-panel {
                    position: fixed;
                    bottom: var(--cw-launcher-bottom);
                    right: calc(10vw + 35px);
                    width: 380px;
                    height: 540px;
                    background: #ffffff;
                    border-radius: 20px;
                    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.03);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    z-index: 99998;
                    font-family: var(--font-manrope), -apple-system, BlinkMacSystemFont, sans-serif;
                    animation: cwSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                @keyframes cwSlideUp {
                    from { opacity: 0; transform: translateY(20px) scale(0.96); }
                    to   { opacity: 1; transform: translateY(0) scale(1); }
                }

                /* Header */
                .cw-header {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding: 18px 20px;
                    background: #F1FF5C;
                    position: relative;
                    border-bottom: 1px solid rgba(0,0,0,0.08);
                }

                .cw-header-logo {
                    flex: 1;
                    display: flex;
                    align-items: center;
                }

                .cw-header-logo img {
                    height: 48px;
                    width: auto;
                    object-fit: contain;
                }


                .cw-close {
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    color: #4b5563;
                    background: rgba(0,0,0,0.06);
                    border-radius: 10px;
                    transition: all 0.2s ease;
                    flex-shrink: 0;
                }

                .cw-close:hover {
                    color: #111827;
                    background: rgba(0,0,0,0.12);
                }

                .cw-close svg {
                    width: 16px;
                    height: 16px;
                }

                /* Chat area */
                .cw-chat-box {
                    flex: 1;
                    padding: 20px;
                    overflow-y: auto;
                    background: #f1f5f9;
                }

                .cw-chat-box::-webkit-scrollbar { width: 6px; }
                .cw-chat-box::-webkit-scrollbar-track { background: transparent; }
                .cw-chat-box::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.12); border-radius: 3px; }
                .cw-chat-box::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.2); }

                /* Welcomesssm newssss */
                .cw-welcome {
                    text-align: center;
                    padding: 30px 20px;
                }

                .cw-welcome-icon {
                    width: 56px;
                    height: 56px;
                    background: #F1FF5C;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 16px;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);
                    
                }

                .cw-welcome-x {
                    background: linear-gradient(135deg, #f1ff5c 0%, #e2ff25 100%);
                }

                .cw-welcome-title {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #111827;
                    margin-bottom: 8px;
                }

                .cw-welcome-subtitle {
                    font-size: 0.875rem;
                    color: #4b5563;
                    line-height: 1.5;
                }

                /* Messages left */
                .cw-message {
                    margin: 14px 0;
                    padding: 14px 18px;
                    border-radius: 16px;
                    max-width: 85%;
                    overflow-wrap: anywhere;
                    word-break: break-word;
                    font-size: 0.9rem;
                    line-height: 1.6;
                    animation: cwMsgIn 0.3s ease;
                }

                @keyframes cwMsgIn {
                    from { opacity: 0; transform: translateY(8px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                .cw-user {
                    background: #0f0f0f;
                    color: #ffffff;
                    margin-left: auto;
                    border-bottom-right-radius: 6px;
                }

                .cw-bot {
                    background: #ffffff;
                    color: #111827;
                    margin-right: auto;
                    border-bottom-left-radius: 6px;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
                    border: 1px solid #e2e8f0;
                }

                .cw-message .chat-link {
                    color: #2563eb;
                    text-decoration: none;
                    font-weight: 500;
                    border-bottom: 1px solid transparent;
                    transition: border-color 0.2s;
                }

                .cw-message .chat-link:hover {
                    border-bottom-color: #2563eb;
                }

                .cw-message code {
                    background: rgba(0,0,0,0.06);
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-family: 'SF Mono', Monaco, monospace;
                    font-size: 0.85em;
                }

                /* Tiny X state indicator */
                .cw-search-state {
                    margin: 12px 0;
                    padding: 10px 12px;
                    border-radius: 14px;
                    border-bottom-left-radius: 6px;
                    max-width: 85%;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
                    margin-right: auto;
                    animation: cwMsgIn 0.25s ease;
                }

                .cw-search-state p {
                    margin: 0;
                    font-size: 0.78rem;
                    line-height: 1.3;
                    color: #334155;
                    font-weight: 600;
                }

                .cw-x-character {
                    width: 30px;
                    height: 30px;
                    border-radius: 10px;
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    flex-shrink: 0;
                    overflow: visible;
                }

                .cw-x-character-welcome {
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    background: #ffffff;
                    border-color: #d1d5db;
                    animation: cwXWake 0.9s ease-out both;
                }

                .cw-x-logo {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 16px;
                    line-height: 1;
                    font-weight: 900;
                    color: #111827;
                    animation: cwXIdleBob 1.1s ease-in-out infinite;
                    transform-origin: center;
                    z-index: 1;
                    opacity: 0.32;
                }

                .cw-x-character-welcome .cw-x-logo {
                    font-size: 24px;
                    color: #111827;
                    opacity: 0.35;
                }

                .cw-x-eye {
                    position: absolute;
                    top: 8px;
                    width: 4px;
                    height: 4px;
                    border-radius: 999px;
                    background: #0f172a;
                    z-index: 3;
                }

                .cw-x-eye-left {
                    left: 7px;
                }

                .cw-x-eye-right {
                    right: 7px;
                }

                .cw-x-character-welcome .cw-x-eye {
                    top: 12px;
                    width: 4px;
                    height: 5px;
                }

                .cw-x-character-welcome .cw-x-eye-left {
                    left: 10px;
                }

                .cw-x-character-welcome .cw-x-eye-right {
                    right: 10px;
                }

                .cw-x-mouth {
                    position: absolute;
                    bottom: 6px;
                    left: 50%;
                    width: 10px;
                    height: 4px;
                    margin-left: -5px;
                    border-bottom: 2px solid #0f172a;
                    border-radius: 0 0 12px 12px;
                    z-index: 3;
                }

                .cw-x-character-welcome .cw-x-mouth {
                    bottom: 9px;
                    width: 12px;
                    height: 6px;
                    margin-left: -6px;
                }

                .cw-x-glass {
                    position: absolute;
                    width: 9px;
                    height: 9px;
                    border: 2px solid #111827;
                    border-radius: 50%;
                    right: -5px;
                    top: -3px;
                    animation: cwGlassSweep 1.1s ease-in-out infinite;
                    z-index: 4;
                }

                .cw-x-glass::after {
                    content: "";
                    width: 2px;
                    height: 6px;
                    background: #111827;
                    border-radius: 2px;
                    position: absolute;
                    right: -3px;
                    bottom: -4px;
                    transform: rotate(-35deg);
                }

                .cw-x-status-mark {
                    position: absolute;
                    right: -4px;
                    top: -4px;
                    width: 12px;
                    height: 12px;
                    border-radius: 999px;
                    font-size: 9px;
                    line-height: 1;
                    font-weight: 800;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #111827;
                    color: #ffffff;
                }

                .cw-x-sleep-z {
                    position: absolute;
                    right: -4px;
                    top: -7px;
                    font-size: 10px;
                    line-height: 1;
                    font-weight: 900;
                    color: #64748b;
                    animation: cwXSleepFloat 1.2s ease-in-out infinite;
                }

                .cw-search-state-greeting {
                    background: #f8fafc;
                    border-color: #dbeafe;
                }

                .cw-search-state-greeting .cw-x-character {
                    background: #eff6ff;
                    border-color: #bfdbfe;
                    animation: cwXWake 1s ease-out both;
                }

                .cw-search-state-greeting .cw-x-eye {
                    animation: cwXWakeBlink 1.4s linear infinite;
                }

                .cw-search-state-searching .cw-x-eye {
                    animation: cwXLookAround 0.9s ease-in-out infinite;
                }

                .cw-search-state-searching .cw-x-mouth {
                    width: 7px;
                    height: 0;
                    margin-left: -3.5px;
                    border-bottom: 2px solid #0f172a;
                    border-radius: 999px;
                }

                .cw-search-state-found {
                    background: #f0fdf4;
                    border-color: #bbf7d0;
                }

                .cw-search-state-found .cw-x-character {
                    border-color: #bbf7d0;
                    background: #dcfce7;
                }

                .cw-search-state-found .cw-x-logo {
                    color: #166534;
                    animation: none;
                }

                .cw-search-state-found .cw-x-status-mark {
                    background: #16a34a;
                }

                .cw-search-state-found .cw-x-character {
                    animation: cwXCelebrate 0.7s ease-in-out infinite;
                }

                .cw-search-state-found .cw-x-mouth {
                    width: 9px;
                    height: 5px;
                    margin-left: -4.5px;
                    border-bottom: 2px solid #166534;
                }

                .cw-search-state-notFound {
                    background: #fef2f2;
                    border-color: #fecaca;
                }

                .cw-search-state-notFound .cw-x-character {
                    border-color: #fecaca;
                    background: #fee2e2;
                }

                .cw-search-state-notFound .cw-x-logo {
                    color: #991b1b;
                    animation: none;
                }

                .cw-search-state-notFound .cw-x-status-mark {
                    background: #dc2626;
                }

                .cw-search-state-notFound .cw-x-mouth {
                    width: 8px;
                    height: 0;
                    margin-left: -4px;
                    border-bottom: 2px solid #991b1b;
                    border-radius: 999px;
                    transform: translateY(-1px);
                }

                .cw-search-state-notFound .cw-x-character {
                    animation: cwXShake 0.7s ease-in-out infinite;
                }

                @keyframes cwXIdleBob {
                    0%, 100% { transform: translate(-50%, -50%) translateY(0); }
                    50%      { transform: translate(-50%, -50%) translateY(-2px); }
                }

                @keyframes cwGlassSweep {
                    0%, 100% { transform: rotate(-18deg); }
                    50%      { transform: rotate(20deg); }
                }

                @keyframes cwXCelebrate {
                    0%, 100% { transform: scale(1); }
                    50%      { transform: scale(1.12); }
                }

                @keyframes cwXLookAround {
                    0%, 100% { transform: translateX(0); }
                    35%      { transform: translateX(1px); }
                    70%      { transform: translateX(-1px); }
                }

                @keyframes cwXWake {
                    0%   { transform: translateY(4px) scale(0.92); opacity: 0.4; }
                    60%  { transform: translateY(-1px) scale(1.03); opacity: 1; }
                    100% { transform: translateY(0) scale(1); opacity: 1; }
                }

                @keyframes cwXWakeBlink {
                    0%, 45%, 100% { transform: scaleY(1); }
                    50%           { transform: scaleY(0.25); }
                }

                @keyframes cwXSleepFloat {
                    0%, 100% { transform: translateY(0); opacity: 0.5; }
                    50%      { transform: translateY(-2px); opacity: 1; }
                }

                @keyframes cwXShake {
                    0%, 100% { transform: translateX(0); }
                    25%      { transform: translateX(-1px); }
                    75%      { transform: translateX(1px); }
                }

                /* Input area */
                .cw-controls {
                    display: flex;
                    align-items: center;
                    padding: 16px 20px;
                    gap: 12px;
                    background: #F1FF5C;
                    border-top: 1px solid rgba(0,0,0,0.08);
                }

                .cw-input {
                    flex: 1;
                    background: #ffffff;
                    border: none;
                    border-radius: 28px;
                    padding: 14px 20px;
                    color: #111827;
                    outline: none;
                    font-size: 0.9rem;
                    font-family: inherit;
                    transition: all 0.2s ease;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(0,0,0,0.04);
                }

                .cw-input:focus {
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(0,0,0,0.08);
                }

                .cw-input::placeholder {
                    color: #9ca3af;
                }

                .cw-send {
                    background: #0f0f0f;
                    border: none;
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s ease;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);
                    flex-shrink: 0;
                }

                .cw-send:hover {
                    background: #000000;
                    transform: scale(1.05);
                    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);
                }

                .cw-send:active {
                    transform: scale(0.98);
                }

                .cw-send svg {
                    width: 20px;
                    height: 20px;
                    color: white;
                    margin-left: 2px;
                }

                /* Footer */
                .cw-footer {
                    text-align: center;
                    padding: 8px;
                    background: #f8fafc;
                    font-size: 0.7rem;
                    color: #9ca3af;
                    font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
                }

                .cw-footer a {
                    color: #4b5563;
                    text-decoration: none;
                    font-weight: 500;
                }

                @media (max-width: 767px) {
                    :root {
                        --cw-launcher-bottom: 20px;
                    }

                    .cw-launcher {
                        right: 16px;
                        width: 60px;
                        height: 60px;
                        transform: none;
                    }

                    .cw-launcher:hover {
                        transform: scale(1.05);
                    }

                    .cw-launcher svg {
                        width: 26px;
                        height: 26px;
                    }

                    .cw-panel {
                        left: 20px;
                        right: 20px;
                        width: auto;
                        height: min(66vh, 560px);
                        max-height: calc(100dvh - 118px);
                        bottom: calc(var(--cw-launcher-bottom) + 68px);
                        border-radius: 16px;
                    }

                    .cw-header {
                        gap: 10px;
                        padding: 14px 14px;
                    }

                    .cw-header-logo img {
                        height: 38px;
                    }

                    .cw-chat-box {
                        padding: 14px;
                    }

                    .cw-welcome {
                        padding: 18px 10px;
                    }

                    .cw-message {
                        max-width: 92%;
                        font-size: 0.86rem;
                        padding: 12px 14px;
                    }

                    .cw-controls {
                        padding: 12px 14px;
                        gap: 8px;
                    }

                    .cw-input {
                        padding: 12px 14px;
                        font-size: 0.86rem;
                    }

                    .cw-send {
                        width: 42px;
                        height: 42px;
                    }

                    .cw-send svg {
                        width: 18px;
                        height: 18px;
                    }

                    .cw-footer {
                        padding: 6px;
                        font-size: 0.65rem;
                    }
                }

                @media (min-width: 768px) {
                    .cw-launcher {
                        right: calc(5vw - 36px);
                    }
                    .cw-panel {
                        right: calc(5vw + 35px);
                    }
                }
            `}</style>
        </>
    );
}
