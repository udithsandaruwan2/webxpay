import React from 'react';
import Image from 'next/image';
import bgImage from '@/public/home/productSuite/bg.png';

const Trust = () => {
    return (
        <div className="relative w-full min-h-max">
            <Image
                src={bgImage}
                alt="Product Suite Background"
                fill
                className="object-cover object-top z-0 hidden md:block"
            />
            <div className="absolute inset-0 bg-black/90 md:bg-black/35 z-10"/>
            <div className="relative z-20 pt-4 pb-16 md:pb-20 max-w-7xl mx-auto md:px-5">
                <div className={`text-center pt-12 md:pb-2 px-5 md:px-0 pb-10`}>
                    <h1 className={`text-webxpay-yellow text-3xl font-bold`}>Security and Trust</h1>
                    <p className={`text-white max-w-4xl mx-auto pt-5`}>Mix and match our range of products to match your
                        customer needs. No forced bundles—just plug-in and power-up with WEBXPAY.</p>
                </div>
            </div>
        </div>
    );
};

export default Trust;