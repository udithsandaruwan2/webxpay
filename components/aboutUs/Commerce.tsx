import React from 'react';
import Image from 'next/image';

const Commerce = () => {
    return (
        <div className={`max-w-7xl mx-auto px-5 py-20 lg:py-28`}>
            <div className={`text-center w-full`}>
                <h1 className={`font-extrabold text-[31px] md:text-[39px]`}>Driving the Future of Commerce</h1>
                <p className={`font-normal text-[14px] md:text-[18px] pt-6 lg:pt-4`}>Across B2B, B2C, C2C, and C2G
                    interactions,
                    WEBXPAY’s solutions embody</p>
            </div>
            <div className={`w-full flex flex-col`}>
                <div className="mt-12 lg:mt-20 flex flex-col-reverse md:grid grid-cols-2 gap-x-10 h-full md:h-[400px]">
                    <div className={`flex items-center md:w-11/12`}>
                        <div className={'text-center w-full pt-7 lg:pt-0 space-y-5 md:text-left md:pr-5'}>
                            <h1 className={'font-bold text-[25px] lg:text-[39px]'}>Purpose-Driven Innovation</h1>
                            <p className={`font-normal text-[14px] lg:text-[18px]`}>We merge advanced AI and compliance
                                frameworks with local expertise for universal financial inclusion.</p>
                        </div>
                    </div>
                    <div
                        className={`shadow-[6px_6px_0_var(--color-webxpay-yellow)] rounded-sm h-[230px] md:h-[400px] w-full relative`}>
                        <Image
                            className={`rounded-sm`}
                            fill
                            style={{objectFit: 'cover', objectPosition: 'center'}}
                            alt={'purpose'}
                            src={'/about-us/commerce/purpose.jpg'}
                        />
                    </div>
                </div>

                <div className="mt-12 lg:mt-36 flex flex-col md:grid grid-cols-2 gap-x-10 h-full md:h-[400px]">
                    <div
                        className={`shadow-[-6px_6px_0_var(--color-webxpay-yellow)] rounded-sm h-[230px] md:h-[400px] w-full relative`}>
                        <Image
                            className={`rounded-sm`}
                            fill
                            style={{objectFit: 'cover', objectPosition: 'center'}}
                            alt={'human'}
                            src={'/about-us/commerce/human.jpg'}
                        />
                    </div>
                    <div className={`flex items-center md:w-11/12 md:justify-end`}>
                        <div className={'text-center w-full md:w-11/12 pt-7 lg:pt-0 space-y-5 md:text-left md:pr-5'}>
                            <h1 className={'font-bold text-[25px] lg:text-[39px]'}>Human-Centered Technology</h1>
                            <p className={`font-normal text-[14px] lg:text-[18px]`}>Whether a rural consumer paying
                                utility bills via phone or an agency collecting taxes, we
                                tailor experiences for real-world convenience.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 lg:mt-36 flex flex-col-reverse md:grid grid-cols-2 gap-x-10 h-full md:h-[400px]">
                    <div className={`flex items-center md:w-11/12`}>
                        <div className={'text-center w-full pt-7 lg:pt-0 space-y-5 md:text-left md:pr-5'}>
                            <h1 className={'font-bold text-[25px] lg:text-[39px]'}>Fast Settlements & Reliability</h1>
                            <p className={`font-normal text-[14px] lg:text-[18px]`}>Next-day funds for merchants,
                                real-time payments for consumers, and streamlined processes
                                for
                                government offices—everyone benefits from speed and transparency.</p>
                        </div>
                    </div>
                    <div
                        className={`shadow-[6px_6px_0_var(--color-webxpay-yellow)] rounded-sm h-[230px] md:h-[400px] w-full relative`}>
                        <Image
                            className={`rounded-sm`}
                            fill
                            style={{objectFit: 'cover', objectPosition: 'center'}}
                            alt={'fast'}
                            src={'/about-us/commerce/fast.jpg'}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Commerce;