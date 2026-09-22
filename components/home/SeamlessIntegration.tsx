import React from 'react';
import Image from 'next/image';

const SeamlessIntegration = () => {
    return (
        <div className={`max-w-7xl relative px-5 mx-auto items-center justify-center flex flex-col md:grid lg:grid-cols-2 gap-x-2`}>
            <div className={`flex justify-center items-center`}>
                <Image
                    src={'/home/seamless/img.png'} alt="Banner background" width={500} height={200}/>
            </div>
            <div className={`text-center lg:text-left max-w-xl`}>
                <h1 className={'text-[31px] leading-[42.7px] font-bold mb-5'}>Seamless Integrations with Your Leading Platforms</h1>
                <p className={`text-[14px]`}> Connect WEBXPAY to top e-commerce frameworks, billing software, and developer environments—no
                    friction, no bottlenecks.</p>
                <br/>
                <p className={`text-[14px]`}>
                    Our developer kit offers robust, step-by-step docs to help you integrate in days, not weeks.
                    Maintain a unified checkout experience for both local and global customers without specialised
                    coding overhead.
                </p>
            </div>
        </div>
    );
};

export default SeamlessIntegration;