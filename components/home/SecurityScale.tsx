import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const SecurityScale = () => {
    return (
        <div className={`flex flex-col-reverse md:flex-row justify-between max-w-7xl mx-auto px-5 h-max py-20 md:py-28`}>
            <div className={`items-center my-auto space-y-8 md:space-y-10 md:w-1/2 pt-10 md:pt-0`}>
                <h1 className={`font-bold text-4xl`}>Security That Scales With You</h1>
                <p>Every payment flow is backed by ISO 27001 and PCI DSS compliance (via partner banks and global
                    platforms like MPGS, CyberSource). This means enterprise-grade data protection, strict adherence to
                    Central Bank of Sri Lanka regulations, and total confidence for you and your customers.</p>
                <Link
                    href={'/contact-us'}
                    className={`bg-black text-white rounded-full md:rounded-md px-5 py-2 text-sm font-semibold`}>Contact Sales →</Link>
            </div>
            <div className={`md:w-1/2 h-max md:flex mx-auto md:justify-end`}>
                <div>
                    <Image src={'/home/security/laptop.webp'} alt="Banner background" width={500} height={1000}
                           className={`h-full object-contain md:h-[600px] relative right-3.5 md:left-0`}/>
                </div>
            </div>
        </div>
    );
};

export default SecurityScale;