"use client";

import dynamic from "next/dynamic";
import {useState} from "react";
import styles from "./chatbot-launcher.module.css";

const ChatbotWidget = dynamic(() => import("@/app/ChatbotWidget"), {
    ssr: false,
    loading: () => <Launcher disabled/>,
});

function Launcher({disabled = false, onClick}: {disabled?: boolean; onClick?: () => void}) {
    return (
        <button
            type="button"
            className={styles.launcher}
            onClick={onClick}
            disabled={disabled}
            aria-label={disabled ? "Loading chat" : "Open chat"}
        >
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
        </button>
    );
}

export default function ChatbotLoader() {
    const [loadChat, setLoadChat] = useState(false);

    if (loadChat) {
        return <ChatbotWidget initialOpen/>;
    }

    return <Launcher onClick={() => setLoadChat(true)}/>;
}
