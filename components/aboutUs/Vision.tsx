import React from 'react';
import Parallelogram from "@/components/aboutUs/Parallelogram";
import Image from "next/image";

const Vision = () => {
    return (
        <div className={`max-w-7xl mx-auto px-5 flex flex-col lg:grid lg:grid-cols-2 gap-x-10 xl:gap-x-14 pb-10 lg:pb-14`}>
            <div className={`my-auto mx-auto md:w-[600px] lg:w-[400px] xl:w-full relative top-7`}>
                <Image
                    className={'relative z-0 md:px-2 rounded-xl'} alt={'vision'} src={`/about-us/vision.jpg`}
                    width={1000}
                    height={1000}/>
                <div className={`relative z-10 bottom-14 scale-110 md:scale-105`}>
                    <Parallelogram containerClassName={'container-to-right'} contentClassName={'content-to-right'}>
                        <p className={`text-[14px] md:text-[18px] font-medium md:font-bold`}>
                            “Become the driving force that transforms digital finance, making wealth creation effortless
                            and
                            accessible to everyone.”
                        </p>
                    </Parallelogram>
                </div>
            </div>
            <div className={`my-auto flex flex-col gap-y-4`}>
                <p className={'md:hidden font-bold text-[18px] text-[#7B7D80]'}>Our Vision</p>
                <h1 className={'hidden md:block text-[20px] text-[#7B7D80] font-bold'}>Our Vision</h1>
                <h1 className={`font-bold text-[31px] md:text-[39px] leading-[37.5px] lg:leading-[47.5px]`}>What We Aspire To Create</h1>
                <p className={`text-[14px] md:text-[18px] font-normal mt-2`}>We aim to unify local and global transactions
                    into a single, user-friendly experience for businesses
                    of all sizes, everyday citizens, and public institutions. Our dream is a future where frictionless
                    commerce helps every participant thrive, whether paying a utility bill, collecting taxes, or
                    operating across borders.</p>
            </div>
        </div>
    );
};

export default Vision;