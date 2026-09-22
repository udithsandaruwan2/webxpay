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
                        className={`w-full h-screen top-0 absolute z-20 bg-linear-[65deg,black,transparent_39%,transparent]`}>
                        .
                    </div>
                    <div className={'w-full h-screen top-0 absolute z-10'}>
                        <>
                            <Image
                                src={'/solutions/banner.jpg'}
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
                                Solutions
                            </h1>
                        </div>
                    </div>
                    <div className={'relative top-1.5 flex flex-col gap-y-3 my-6 py-12 px-5 pb-8 mx-auto max-w-4xl text-center'}>
                        <h1
                            className={
                                'w-full text-midnight-dreams font-poppins font-bold text-[39px] leading-[40.7px]'
                            }
                        >
                            Core Solutions
                        </h1>
                        <div
                            className={'text-[16px] font-normal'}
                        >
                            WEBXPAY’s two flagship offerings, <span className={`font-bold`}>XGATEWAY (Online Solutions)</span> and <span className={`font-bold`}> XPOS (In-store
                            Solutions)</span>, constitute the foundation upon which businesses, government bodies, and
                            private individuals can rely for safe and efficient transactions.
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
                            <Image src={'/solutions/banner.jpg'}
                                   alt={'Home Page Banner image'}
                                   fill
                                   className={'object-cover object-[75%_center]'}
                                   priority={true}
                                   quality={85}
                            />
                        </div>

                        <div className={'relative top-1.5 flex flex-col gap-y-3 text-left mt-6 px-5 pb-8 bg-white'}>
                            <h1
                                className={
                                    'text-left w-full text-midnight-dreams font-poppins font-bold text-[31px] leading-[40.7px]'
                                }
                            >
                                Core Solutions
                            </h1>
                            <div
                                className={
                                    'text-left'
                                }
                            >
                                WEBXPAY’s two flagship offerings, XGATEWAY (Online Solutions) and XPOS (In-store
                                Solutions), constitute the foundation upon which businesses, government bodies, and
                                private individuals can rely for safe and efficient transactions.
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </section>
    );
};

export default Banner;