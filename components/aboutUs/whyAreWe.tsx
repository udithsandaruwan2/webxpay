import React from 'react';
import Image from "next/image";
import bgImage from "@/public/home/productSuite/bg.png";

const WhyAreWe = () => {
    return (
        <div className="relative w-full min-h-max">
            <Image
                src={bgImage}
                alt="Product Suite Background"
                fill
                className="object-cover z-0 hidden md:block"
            />
            <div className="absolute inset-0 bg-black/90 md:bg-black/35 z-10"/>
            <div className={`relative z-20 py-12 md:py-20 max-w-6xl px-5 mx-auto text-center space-y-8`}>
                <h1 className={`font-bold text-[31px] md:text-[39px] text-webxpay-yellow`}>Why We Exist</h1>
                <p className={`font-medium text-[18px] md:text-[22px] text-webxpay-font-maybe`}>Unlock wealth for all by
                    empowering people,
                    organisations, and government through innovative digital-finance solutions.</p>
                <p className={`font-normal text-[14px] md:text-[16px] text-webxpay-font-maybe`}>We strive to remove
                    financial barriers so anyone—be it a solo entrepreneur, consumer paying everyday bills, or
                    government agency—can benefit from secure, accessible, and fair payment options. By simplifying how
                    money moves, we expand opportunities for growth across every corner of the economy.</p>
            </div>
        </div>
    );
};

export default WhyAreWe;