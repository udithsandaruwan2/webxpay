import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const Empower = () => {
    return (
        <div className={`w-full bg-[#FCFCFC] overflow-hidden`}>
            <div className={'flex flex-col md:flex-row justify-between max-w-7xl mx-auto px-5 pt-12 md:pt-6'}>
                <div className={`items-center my-auto space-y-6 md:space-y-8 md:w-1/2 lg:w-2/5`}>
                    <h1 className={`font-bold text-4xl text-center md:text-left`}>Empower Your Business with
                        WEBXPAY</h1>
                    <p className={'text-center md:text-left'}>In a world where commerce moves quickly, join a partner
                        that moves with you. With WEBXPAY, you get
                        the robust security, scalable solutions, and tailored extensions to thrive—online or in-store,
                        local
                        or global. We simplify transactions, so you can focus on building a future where every sale
                        counts.</p>
                    <div className={'w-full inline-flex justify-center mb-16 md:w-fit'}>
                        <Link
                            href={'/contact-us'}
                            className={`bg-webxpay-yellow rounded-md px-5 py-2 text-[14px] font-semibold text-black`}>
                            Get Started →
                        </Link>
                    </div>
                </div>
                <Image src={'/home/empower/screen.webp'}
                       className={`w-full md:w-1/2 lg:w-3/5 relative left-5 lg:left-32 obcontent-center`}
                       alt="Banner background" width={500} height={300}/>
            </div>
        </div>
    );
};

export default Empower;