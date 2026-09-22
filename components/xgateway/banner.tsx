'use client'

import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (
        <section
            className={`min-h-fit relative -top-2 md:top-0 lg:top-0 max-w-screen mx-auto bg-white z-0`}>
            <>
                {/*  Desktop Banner*/}
                <div className={'hidden lg:block relative mx-auto'}>
                    <div
                        className={`w-full h-screen top-0 absolute z-20 bg-linear-[65deg,black,transparent_89%,transparent]`}>
                        .
                    </div>
                    <div className={'w-full h-screen top-0 absolute z-10'}>
                        <>
                            <Image
                                src={'/xgateway/banner.jpg'}
                                alt={'Home Header Image'}
                                fill
                                className={'object-cover object-right w-auto h-full z-10 relative'}
                                priority={true}
                                quality={85}
                            />
                        </>
                    </div>
                    <div
                        className={`relative h-screen w-full max-w-7xl mx-auto px-5 z-50 text-left flex flex-col gap-y-4 justify-end bottom-14`}>
                        <div className={`w-screen max-w-5xl flex flex-col gap-y-8`}>
                            <h1
                                className={
                                    'max-w-3xl text-white font-poppins font-bold text-[56px]'
                                }
                                style={{
                                    lineHeight: '75px',
                                }}
                            >
                                XGATEWAY
                            </h1>
                            <div
                                className={
                                    'max-w-lg xl:max-w-[630px] text-white font-semibold text-[18px]'
                                }
                                style={{
                                    lineHeight: '27px',
                                }}
                            >
                                XGATEWAY is WEBXPAY’s all-encompassing online payment platform, designed for those
                                looking to accept credit/debit cards, mobile wallets, and direct bank transfers with
                                minimal effort.
                            </div>

                        </div>
                    </div>

                </div>


                {/*  Mobile Banner*/}
                <div className={'block lg:hidden min-h-max'}>
                    <div
                        className={
                            'relative min-h-fit flex flex-col'
                        }
                    >
                        <div
                            className={'relative left-0 w-auto h-[490px] sm:h-[560px]'}>
                            <Image src={'/xgateway/banner.jpg'}
                                   alt={'Home Page Banner image'}
                                   fill
                                   className={'object-cover object-[25%_center]'}
                                   priority={true}
                                   quality={85}
                            />
                        </div>

                        <div className={'relative top-1.5 flex flex-col gap-y-3 text-left mt-6 px-5 pb-8 bg-white'}>
                            <Image src={'/xgateway/icon.png'} alt="Banner background"
                                   className={``}
                                   width={300} height={300}/>
                            <div
                                className={
                                    'text-left'
                                }
                            >
                                XGATEWAY is WEBXPAY’s all-encompassing online payment platform, designed for those
                                looking to accept credit/debit cards, mobile wallets, and direct bank transfers with
                                minimal effort.
                            </div>

                        </div>
                    </div>
                </div>
            </>
        </section>
    );
};

export default Banner;