"use client";

import React, { useState } from 'react';

const StartNowField = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleSubmit = async (inputEmail: string) => {
        if (!inputEmail) {
            setStatusMessage({ type: 'error', text: 'Please enter your email address.' });
            return;
        }

        setIsSubmitting(true);
        setStatusMessage(null);

        try {
            const response = await fetch('/api/start-now', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: inputEmail,
                })
            });

            if (response.ok) {
                setStatusMessage({ type: 'success', text: 'Thank you for your interest! We will get back to you soon.' });
                setEmail('');
            } else {
                setStatusMessage({ type: 'error', text: 'Failed to submit. Please try again.' });
            }
        } catch {
            setStatusMessage({ type: 'error', text: 'An error occurred. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(email);
        }} className="w-full md:max-w-sm md:min-w-[450px]">
            <div className="relative">
                <input type="email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       required
                       aria-label="Email address for interest submission"
                       className="text-[14px] font-normal w-full bg-webxpay-banner-textbox lg:bg-white placeholder:text-black focus:placeholder:text-gray-500 text-black border border-slate-200/60 rounded-full pl-6 pr-28 py-3.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 md:shadow-sm md:focus:shadow"
                       placeholder="sample@email.com"/>
                <button
                    disabled={isSubmitting}
                    className="cursor-pointer absolute right-1 top-1 rounded-full bg-webxpay-yellow py-2.5 px-4 border border-transparent text-center font-semibold text-[14px] text-black transition-all md:shadow-sm focus:bg-webxpay-yellow focus:shadow-none active:bg-webxpay-yellow hover:bg-webxpay-yellow active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="submit"
                >
                    {isSubmitting ? 'Sending...' : 'Start Now'}
                </button>
            </div>
            {statusMessage && (
                <p className={`mt-2 text-xs pl-4 font-medium ${statusMessage.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                    {statusMessage.text}
                </p>
            )}
        </form>
    );
};

export default StartNowField;