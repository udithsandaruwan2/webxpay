import React from 'react';
import Image from "next/image";
import Header from "@/components/common/header";
import Footer from "@/components/common/footerAutoYear";
import bgImage from '@/public/home/productSuite/bg.png';
import ContactUsForm from "@/components/contact-us/ContactUsForm";


const Page = () => {
    return (
        <>
            <Header/>
            <div className={`h-20 md:h-48`}>

            </div>
            <div
                className={`max-w-7xl mx-auto px-5 flex flex-col lg:grid lg:grid-cols-2 gap-y-4 lg:gap-x-4 pt-5 lg:pt-0 lg:py-5`}>
                <div className={`flex flex-col gap-y-8`}>
                    <div className={`flex flex-col gap-y-5`}>
                        <h1 className={`font-bold text-[31px] lg:text-[39px]`}>Contact Us</h1>
                        <p className={`font-semibold text-[14px] lg:font-medium lg:text-[16px]`}>No matter the size of your business or the industry you&apos;re in, WEBXPAY solutions can
                            help you do more with conversations</p>
                        <p className={`font-semibold text-[14px] lg:font-medium lg:text-[16px]`}>Tell us about your business to learn how to get started today.</p>
                    </div>
                    <div>
                        <div className={`flex flex-row items-center gap-x-4`}>
                            <div className={`relative h-16 w-16 grid place-items-center scale-90`}>
                                <Image
                                    className={`absolute`}
                                    src="/home/oneplatform/hexagon.svg" alt="Feature icon" width={1000} height={1000}/>
                                <Image
                                    className={`z-10`}
                                    src={'/contact-us/phone.svg'} alt="Feature icon" width={25} height={25}/>
                            </div>
                            <h2 className={`font-bold`}>+94 117 441 900</h2>
                        </div>
                        <div className={`flex flex-row items-center gap-x-4`}>
                            <div className={`relative h-16 w-16 grid place-items-center scale-90`}>
                                <Image
                                    className={`absolute`}
                                    src="/home/oneplatform/hexagon.svg" alt="Feature icon" width={1000} height={1000}/>
                                <Image
                                    className={`z-10`}
                                    src={'/contact-us/mail.svg'} alt="Feature icon" width={25} height={25}/>
                            </div>
                            <h2 className={`font-bold`}>info@webxpay.com</h2>
                        </div>
                        <div className={`flex flex-row items-center gap-x-4 `}>
                            <div className={`relative h-16 w-16 grid place-items-center scale-90`}>
                                <Image
                                    className={`absolute`}
                                    src="/home/oneplatform/hexagon.svg" alt="Feature icon" width={1000} height={1000}/>
                                <Image
                                    className={`z-10`}
                                    src={'/contact-us/map.svg'} alt="Feature icon" width={25} height={25}/>
                            </div>
                            <h2 className={`font-bold max-w-xs hidden lg:block`}>46/45, 5th floor, Green lanka towers,
                                Nawam Mawatha,
                                Colombo 02</h2>

                            <h2 className={`font-bold max-w-xs lg:hidden`}>46/45, 5th floor,
                                <br/>
                                Green lanka towers,
                                <br/>
                                Nawam Mawatha,
                                Colombo 02</h2>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <div className="h-full relative lg:rounded-xl mb-[65px] lg:mb-0">
                    <div>
                        <Image
                            src={bgImage}
                            alt="Product Suite Background"
                            className="object-cover z-0 block scale-125 lg:scale-100 lg:rounded-xl"
                            priority
                            fill
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/35  scale-125 lg:scale-100 lg:rounded-xl"/>
                    <ContactUsForm/>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Page;
