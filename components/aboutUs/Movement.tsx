import React from 'react';
import Image from "next/image";

const Movement = () => {
    return (
        <div className={'bg-[#FCFCFC] lg:mt-24'}>
            <div className="max-w-7xl mx-auto px-5 py-12 md:py-24 flex flex-col items-center">
                <h1 className="font-bold text-[31px] md:text-[39px] mb-6 text-center">Join the WEBXPAY Movement</h1>
                <p className="font-normal text-[14px] md:text-[18px] mb-4 text-center">Ready to experience frictionless
                    digital finance?
                    Discover how XGATEWAY and XPOS unite your online and
                    offline channels—backed by flexible add-ons like XSPLIT for instalment payments, XQR for universal
                    QR
                    coverage, and XSUPPLIER for supply chain finance.</p>
                <p className="font-normal text-[14px] md:text-[18px] mb-8 text-center"><span
                    className="font-bold">Connect with us today</span> to see how WEBXPAY can equip your business with
                    unstoppable momentum
                    in the digital economy.</p>
                <div className="flex flex-col md:flex-row gap-4 items-center font-semibold">
                    <a href="mailto:info@webxpay.com"
                       className="bg-webxpay-yellow flex flex-row items-center rounded-lg px-10 py-2 hover:opacity-90 transition-opacity space-x-2 w-full justify-center">
                        <Image alt={'mail icon'} src={'/about-us/movement/mail.svg'} width={20} height={20}/>
                        <p>info@webxpay.com</p>
                    </a>
                    <a href="tel:+94117441900"
                       className="bg-webxpay-yellow flex flex-row items-center rounded-lg px-10 py-2 hover:opacity-90 transition-opacity space-x-2 w-full justify-center">
                        <Image alt={'mail icon'} src={'/about-us/movement/call.svg'} width={20} height={20}/>
                        <p>0117 441 900</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Movement;