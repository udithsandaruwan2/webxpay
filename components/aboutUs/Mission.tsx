import React from 'react';
import Parallelogram from "@/components/aboutUs/Parallelogram";
import Image from "next/image";

const Mission = () => {
    return (
        <div className={`max-w-7xl mx-auto px-5 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-x-10 xl:gap-x-14 pb-24 pt-10 lg:pt-14 lg:pb-8`}>
            <div className={`my-auto flex flex-col gap-y-4`}>
                <p className={'md:hidden font-bold text-[18px] text-[#7B7D80]'}>Our Mission</p>
                <h1 className={'hidden md:block text-[20px] text-[#7B7D80] font-bold'}>Our Mission</h1>
                <h1 className={`font-bold text-[31px] md:text-[39px] leading-[37.5px] lg:leading-[47.5px]`}>How We Deliver on That Vision</h1>
                <p className={`text-[14px] md:text-[18px] font-normal mt-2`}>By merging local expertise, robust compliance,
                    and artificial intelligence, we deliver real-time
                    solutions that adapt to different needs—online shops, physical stores, everyday consumer payments,
                    and even government service fees—ensuring everyone can transact smoothly and securely.</p>
            </div>
            <div className={`my-auto mx-auto md:w-[600px] lg:w-[400px] xl:w-full relative top-7`}>
                <Image
                    className={'relative z-0 md:px-2 rounded-xl'} alt={'mission'} src={`/about-us/mission.jpg`}
                    width={1000}
                    height={1000}/>
                <div className={`relative z-10 bottom-14 scale-105`}>
                    <Parallelogram containerClassName={'mission-container'} contentClassName={'mission-content'}>
                        <p className={`text-[14px] md:text-[18px] font-medium md:font-bold`}>
                            “We simplify transactions, remove barriers, and equip businesses, individuals, and
                            communities with an evolving suite of payment technologies—infused with AI-powered
                            onboarding and support—to achieve lasting success.”
                        </p>
                    </Parallelogram>
                </div>
            </div>
        </div>
    );
};

export default Mission;