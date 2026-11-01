import React from 'react';
import Image from "next/image";

const Story = () => {
    return (
        <div className={`max-w-7xl mx-auto px-5 lg:grid lg:grid-cols-2 gap-x-10 py-20 lg:py-28`}>
            <div className={`h-full relative  overflow-hidden`}>
                <Image
                    className={'object-cover rounded-3xl h-[559px]'}
                    alt={'story'} src={'/about-us/story.jpg'} width={1000} height={1000}/>
            </div>
            <div className={`pt-5 lg:pt-0 flex flex-col text-center lg:text-left lg:justify-center`}>
                <h1 className={`font-bold text-[39px] pt-5 md:pt-0`}>Our story</h1>
                <br/>

                <p className={`font-normal text-[18px]`}>Founded in 2015, WEBXPAY set out to revolutionize digital
                    transactions in Sri Lanka as a proudly
                    “Made in Sri Lanka” fintech brand. We started by helping small and medium enterprises (SMEs) embrace
                    online payments, but quickly realized that everyone—from local consumers (B2C) and business networks
                    (B2B), to citizen-to-citizen (C2C) and even citizen-to-government (C2G)—could benefit from seamless,
                    user-friendly financial solutions.
                </p>
                <br/>
                <p className={`font-normal text-[18px]`}>
                    Over time, we built a holistic ecosystem that brings online, offline, mobile, and AI-powered
                    processes together. Today, our platform handles everything from e-commerce checkouts to in-store
                    payments, bridging everyday transactions with next-level digital services. By uniting local
                    expertise and a global mindset, WEBXPAY continues to unlock wealth for merchants, consumers, and
                    beyond.
                </p>
            </div>
        </div>
    );
};

export default Story;