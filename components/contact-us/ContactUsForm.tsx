"use client";

import React, { useState } from 'react';

const ContactUsForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleSubmit = async () => {
        if (!name || !email || !phone || !company) {
            setStatusMessage({ type: 'error', text: 'Please fill in all required fields.' });
            return;
        }

        setIsSubmitting(true);
        setStatusMessage(null);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    company,
                    message
                })
            });

            if (response.ok) {
                setStatusMessage({ type: 'success', text: `Thank you for contacting us, ${name}! We will get back to you soon.` });
                setName('');
                setEmail('');
                setPhone('');
                setCompany('');
                setMessage('');
            } else {
                setStatusMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
            }
        } catch {
            setStatusMessage({ type: 'error', text: 'An error occurred. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}
            className={`relative flex flex-col gap-y-1 lg:p-5`}>
            {statusMessage && (
                <div
                    className={`p-3 rounded-md mb-2 text-sm font-medium ${
                        statusMessage.type === 'success'
                            ? 'bg-green-900/40 text-green-300 border border-green-700'
                            : 'bg-red-900/40 text-red-300 border border-red-700'
                    }`}
                >
                    {statusMessage.text}
                </div>
            )}
            <div className={`flex flex-col gap-y-2`}>
                <label className={`text-white relative text-left text-lg text-[14px] pl-3`}>
                    Name *
                </label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={'Sham'}
                    type="text"
                    required
                    className={`w-full p-2 pl-3 rounded-md placeholder:text-webxpay-border-grey placeholder:text-[14px] text-webxpay-border-grey bg-webxpay-values border border-webxpay-border-grey`}/>
            </div>
            <div className={`flex flex-col gap-y-2`}>
                <label className={`text-white relative text-left text-lg text-[14px] mt-4 pl-3`}>
                    Email *
                </label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={'Sham@gmail.com'}
                    type="email"
                    required
                    className={`w-full p-2 pl-3 rounded-md placeholder:text-webxpay-border-grey placeholder:text-[14px] text-webxpay-border-grey bg-webxpay-values border border-webxpay-border-grey`}/>
            </div>
            <div className={`flex flex-col gap-y-2`}>
                <label className={`text-white relative text-left text-lg text-[14px] mt-4 pl-3`}>
                    Phone Number *
                </label>
                <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={'077 123 4567'}
                    type="tel"
                    required
                    className={`w-full p-2 pl-3 rounded-md placeholder:text-webxpay-border-grey placeholder:text-[14px] text-webxpay-border-grey bg-webxpay-values border border-webxpay-border-grey`}/>
            </div>
            <div className={`flex flex-col gap-y-2`}>
                <label className={`text-white relative text-left text-lg text-[14px] mt-4 pl-3`}>
                    Company name *
                </label>
                <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={'Limelight Design Studio'}
                    type="text"
                    required
                    className={`w-full p-2 pl-3 rounded-md placeholder:text-webxpay-border-grey placeholder:text-[14px] text-webxpay-border-grey bg-webxpay-values border border-webxpay-border-grey`}/>
            </div>
            <div className={`flex flex-col gap-y-2`}>
                <label className={`text-white relative text-left text-lg text-[14px] mt-4 pl-3`}>
                    Message
                </label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder={'Sample Message'}
                    className={`w-full p-2 pl-3 rounded-md placeholder:text-webxpay-border-grey placeholder:text-[14px] text-webxpay-border-grey bg-webxpay-values border border-webxpay-border-grey`}/>
            </div>
            <div className={`flex justify-items-end items-end justify-end pt-4`}>
                <button
                    type={'submit'}
                    disabled={isSubmitting}
                    className={`bg-webxpay-yellow text-black rounded-md px-6 py-2 cursor-pointer font-bold text-[14px] disabled:opacity-50 disabled:cursor-not-allowed`}>
                    {isSubmitting ? 'Sending...' : 'Contact Us'}
                </button>
            </div>
        </form>
    );
};

export default ContactUsForm;