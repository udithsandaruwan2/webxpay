import React from 'react';
import Image from 'next/image';

const Note = () => {
    return (
        <div className={'lg:py-[41px] lg:bg-[#FCFCFC] my-20 lg:my-28'}>
            <div className={`lg:grid lg:grid-cols-2 gap-x-10 max-w-7xl mx-auto px-5`}>
                <div className={' flex items-center text-center w-full md:text-left'}>
                    <div className={` w-full py-5`}>
                        <h1 className={`text-[#7B7D80] font-bold text-[18px] md:text-[20px]`}>Note</h1>
                        <h1 className={`font-bold text-[31px] md:text-[39px]`}>Thilak Piyadigama</h1>
                        <h1 className={'font-normal text-[16px] md:text-[16px]'}>Executive Chairman</h1>
                        <p className={'hidden md:block md:text-[18px] mt-6'}>With extensive expertise in banking and
                            technology,
                            Thilak guides WEBXPAY to evolve beyond standard
                            payment gateways by embracing cross-border solutions and cutting-edge AI-driven experiences.
                            This
                            approach transforms how citizens, businesses, and government agencies transact in Sri Lanka
                            and
                            beyond.</p>
                    </div>
                </div>
                <div className={`w-full`}>
                    <div className="relative w-full flex flex-col rounded-2xl overflow-hidden">
                        {/* Main image */}
                        <Image
                            src="/about-us/note/chairman.jpg"
                            alt="Main image"
                            width={1000}
                            height={600}
                            className="w-full h-auto object-contain scale-110"
                        />

                        {/* Text at bottom */}
                        <div className="relative bottom-0 left-0 w-full bg-[#22272D] bg-opacity-50 text-white p-10">
                            <div className="absolute z-20 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div
                                    className={`relative h-16 w-16 grid place-items-center md:scale-90`}>
                                    <Image
                                        className={`absolute`}
                                        src="/home/oneplatform/hexagon.svg" alt="Feature icon bg" width={1000}
                                        height={1000}/>
                                    <Image
                                        className={`z-10 scale-150`}
                                        src={`/about-us/note/quote.svg`} alt="Feature icon"
                                        width={25} height={25}/>
                                </div>
                            </div>

                            <p className={'text-center md:text-left font-normal text-[14px] md:text-[18px]'}>“At
                                WEBXPAY, we
                                believe digital transactions should be as natural and effortless as
                                breathing.
                                Our goal is to transcend traditional boundaries—reaching across B2B, B2C, C2C and even
                                C2G
                                markets—so that anyone, anywhere, can experience wealth creation unhampered by legacy
                                constraints. By leveraging fintech innovations, partnering with leading banks, and
                                focusing
                                on
                                wealth creation for all, we’re building a future where commerce is truly
                                frictionless.”</p>
                        </div>
                    </div>
                </div>
                <p className={'md:hidden text-center py-5 font-normal text-[14px] '}>With extensive expertise in banking
                    and
                    technology, Thilak guides WEBXPAY to evolve beyond standard
                    payment gateways by embracing cross-border solutions and cutting-edge AI-driven experiences. This
                    approach transforms how citizens, businesses, and government agencies transact in Sri Lanka and
                    beyond.</p>
            </div>
        </div>
    );
};

export default Note;