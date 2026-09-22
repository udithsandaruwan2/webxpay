import React from 'react';
import Image from "next/image";
import Header from "@/components/common/header";
import Footer from "@/components/common/footerAutoYear";
import JobBoard from "@/components/careers/JobBoard";

const Page = () => {
    return (
        <>
            <Header/>
            <div className={`h-20 md:h-28`}/>
            <div className={`max-w-7xl mx-auto px-5 pt-4 pb-10 lg:pt-6 lg:pb-16`}>
                <section className={`relative min-h-[300px] overflow-hidden rounded-xl bg-black md:min-h-[360px]`}>
                    <Image
                        src="/careers/hero-office.png"
                        alt="WEBXPAY team collaborating at work"
                        fill
                        priority
                        className={`object-cover object-[55%_center] md:object-center`}
                    />
                    <div className={`absolute inset-0 bg-linear-to-r from-black/75 via-black/35 to-black/5`}/>
                    <div className={`absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent md:from-black/45 md:via-transparent`}/>
                    <div className={`relative z-10 flex min-h-[300px] flex-col justify-end px-6 pb-9 pt-6 text-white md:min-h-[360px] md:px-9 md:pb-11`}>
                        <h1 className={`font-space-grotesk font-bold text-[30px] leading-tight lg:text-[42px]`}>Careers at WEBXPAY</h1>
                        <p className={`mt-4 max-w-2xl text-[15px] font-medium leading-relaxed text-white/95 lg:text-[17px]`}>
                            We&apos;re building the future of digital payments in Sri Lanka, and we&apos;re always looking
                            for talented people to join us. If you&apos;re interested in working with us, we&apos;d love to
                            hear from you.
                        </p>
                    </div>
                </section>
            </div>
            <JobBoard/>
            <Footer/>
        </>
    );
};

export default Page;
