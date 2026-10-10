import React from "react";

import type {Metadata} from "next";
import {Manrope, Sora, Space_Grotesk} from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Govpay from "@/components/common/govpay";
import ChatbotWidget from "@/app/ChatbotWidget";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
});

const sora = Sora({
    variable: "--font-sora",
    subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "WEBXPAY",
    description: "WEBXPAY is a fintech company that provides secure, scalable, and customizable digital payments solutions for businesses of all sizes.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <Script
                id="gtag-manager"
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-8P3J80X72E"/>
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                   gtag('config', 'G-8P3J80X72E');
                `}
            </Script>
        </head>
        <body
            className={`${manrope.variable} ${sora.variable} ${spaceGrotesk.variable} antialiased`}
            suppressHydrationWarning
        >
        <Govpay/>
        <ChatbotWidget/>
        {children}
        </body>
        </html>
    );
}
