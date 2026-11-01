import React from 'react';
import Image from "next/image";
import bgImage from "@/public/home/productSuite/bg.png";

const valuesValues: { title: string, description: string }[] = [
    {
        title: "Innovation",
        description: "We push boundaries daily, exploring cutting-edge technology to streamline how money moves. By embracing new ideas—like AI or advanced compliance protocols—we spark progress not just for big enterprises, but for every user in our ecosystem."
    },
    {
        title: "Empowerment",
        description: "Our approach grants real control to merchants, consumers, and even local agencies. We strip away complex fees and jargon, ensuring no one feels locked out. This inclusive mindset has allowed us to propel thousands of small merchants and everyday users into the digital era."
    },
    {
        title: "Integrity",
        description: "For us, integrity is a deeply human commitment: we truly care about how we serve you, maintaining honesty in prices, safeguarding personal data, and upholding every promise made. It’s not just about security and compliance; it’s about showing respect for people’s livelihoods and aspirations in every transaction."
    },
    {
        title: "Excellence",
        description: "We refuse to settle for “good enough.” Every design tweak, every line of code, is done with relentless attention to detail. Owning mistakes and fixing them quickly underscores our promise to continually surpass expectations."
    },
    {
        title: "Customer Centricity",
        description: "Every strategy or product roadmap question begins with: “How does this help the user—be they a consumer, merchant, or a bridging link to government services?” By acting on continuous feedback and measuring success through real-world outcomes, we ensure user happiness is our guiding star."
    },
    {
        title: "Inclusivity",
        description: "Our solutions scale from micro-vendors to major retailers, from individuals paying their monthly bills to local councils receiving digital fees. We keep our offerings fair, accessible, and adaptable, affirming our mission to unlock wealth for all."
    }
]

const Values = () => {
    return (
        <div className="relative w-full min-h-max">
            <Image
                src={bgImage}
                alt="Product Suite Background"
                fill
                className="object-cover z-0 hidden md:block"
            />
            <div className="absolute inset-0 bg-black/90 md:bg-black/35 z-10"/>
            <div className="relative z-20 pt-16 lg:pt-24 pb-12 md:pb-20 max-w-7xl mx-auto md:px-5">
                <div className={`text-center md:pb-10 px-5 md:px-0 pb-10`}>
                    <h1 className={`text-webxpay-yellow text-3xl font-bold`}>Our Values in Action</h1>
                </div>
                <div className={`flex flex-col md:grid md:grid-cols-2 gap-6 px-5 md:px-0`}>
                    {valuesValues.map((value) => (
                        <div key={value.title} className={`bg-webxpay-values flex flex-col p-5 rounded-md text-webxpay-font-maybe gap-y-4`}>
                            <div
                                className={`relative h-14 w-14 inline-flex justify-center items-center`}>
                                <Image
                                    className={`absolute object-contain`}
                                    src="/home/oneplatform/hexagon.svg" alt="Feature icon" fill/>
                                <Image
                                    className={`z-10 pl-0.5`}
                                    src={`/about-us/values/${value.title.replaceAll(" ", "_")}.svg`} alt="Feature icon"
                                    width={25} height={25}/>
                            </div>
                            <p className={`font-bold text-[16px]`}>{value.title}</p>
                            <p className={`text-[14px]`} dangerouslySetInnerHTML={{__html: value.description}}></p>
                        </div>))}
                </div>
            </div>
        </div>
    );
};

export default Values;