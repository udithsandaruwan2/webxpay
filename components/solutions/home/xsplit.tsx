'use client';

import React, {useState} from 'react';
import Image from "next/image";
import CloseIcon from "@/components/solutions/icons/CloseIcon";
import SolutionDetailCard from "@/components/solutions/home/items/SolutionDetailCard";

const keyAdvantageCardDetails = [{
    title: 'Empower Larger Purchases',
    description: 'Customers can turn major outlays into manageable monthly instalments, making high-value items more accessible. This, in turn, boosts revenue and enriches customer satisfaction.'
}, {
    title: 'Flexible Deployment',
    description: 'XSPLIT integrates seamlessly with merchant websites, mobile apps, and XPOS devices. It can also run independently for unique deployments, ensuring minimal disruption to existing workflows.',
}, {
    title: 'Increased Sales & Loyalty',
    description: 'By providing affordable payment options, merchants reduce cart abandonment and encourage repeat purchases. Offering seamless instalment plans also differentiates the brand in a competitive marketplace.',
}, {
    title: 'Multi-Bank Support',
    description: 'Collaborations with leading Sri Lankan banks expand the solution’s financing reach, benefitting both merchants and customers with varied instalment options',
}, {
    title: 'Omnichannel Accessibility',
    description: 'Whether transactions happen online or in-store, XSPLIT ensures a consistent, user-friendly EMI experience across all points of sale.'
}, {
    title: 'Rapid T+1 Settlements',
    description: 'While customers repay over time, merchants receive settlement of the full transaction amount on the next business day, preserving steady cash flow.'
}, {
    title: 'Secure and Reliable',
    description: 'WEBXPAY’s ISO 27001 certification and PCI DSS compliance guarantee robust safeguards for cardholder data and transaction integrity.'
}, {
    title: 'Developer-Friendly Integration',
    description: 'A comprehensive developer kit and extensive API documentation simplify the technical side, helping merchants get XSPLIT up and running quickly.'
}]

const idealsDetails = ['Merchants desiring an uptick in sales and repeat customers', 'Retailers of big-ticket items (electronics, furniture, luxury goods)', 'E-commerce and physical stores are looking to offer convenient monthly instalments', 'Businesses aiming to cultivate ongoing loyalty by lowering financial hurdles']

const splitDetails = ['XSPLIT is more than just an EMI option; it’s an end-to-end strategy for boosting revenue and cultivating loyalty. By granting customers greater affordability and safeguarding each transaction with WEBXPAY’s cutting-edge security, XSPLIT becomes a powerful driver of both sales volumes and brand reputation.']

const Xsplit = () => {
    const [isDetailedView, setIsDetailedView] = useState(false);

    return (
        <div>
            <div
                id={'xsplit'}
                className={`py-2 md:py-10`}>
                <p className={`invisible`}>.</p>
            </div>
            <div >
                <div
                    className={`relative ${isDetailedView ? 'flex flex-col-reverse md:flex-col-reverse' : 'flex flex-col-reverse md:grid md:grid-cols-2'} my-5 p-5 md:p-0 bg-white max-w-7xl mx-auto`}>
                    <div className={`flex items-center md:px-5`}>
                        <div
                            className={`${isDetailedView ? 'justify-center items-center' : ''} my-auto flex flex-col gap-y-6 md:p-5 pt-5 md:pt-12`}>
                            <h1 className={`font-semibold`}>Drive Sales and Customer Loyalty with Flexible Instalment
                                Plans</h1>
                            <Image
                                className={`w-[140px]`}
                                alt={'icon'}
                                src={'/solutions/xsplit/icon.svg'} width={200} height={100}/>
                            <p className={`${isDetailedView ? 'max-w-5xl mx-auto text-center' : ''}`}>
                                XSPLIT is WEBXPAY’s flagship credit card–based seamless instalment solution, empowering
                                businesses to offer flexible payment plans on high-value purchases. By lowering the
                                immediate
                                financial barrier for customers, XSPLIT increases average order values, fosters repeat
                                business,
                                and elevates brand loyalty.
                            </p>
                            {!isDetailedView && <button onClick={() => setIsDetailedView(true)}
                                                        className={`cursor-pointer w-fit bg-black text-white rounded-md px-5 py-2 text-sm font-semibold`}>
                                Explore More →
                            </button>}
                        </div>
                    </div>
                    {isDetailedView ? <div className={'relative'}>
                            <div className={'absolute right-0'}>
                                <button onClick={() => setIsDetailedView(false)}
                                        className={'cursor-pointer w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full inline-flex items-center justify-center bg-[#4E5256]'}>
                                    <CloseIcon/></button>
                            </div>
                            <Image
                                width={388}
                                height={287}
                                className={`rounded-md md:mt-10 mx-auto`}
                                alt={'phone'} src={'/solutions/xsplit/img.webp'}/>
                        </div> :
                        <div>
                            <Image
                                width={1000}
                                height={1000}
                                className={`md:scale-95 lg:scale-100 rounded-md`}
                                alt={'phone'} src={'/solutions/xsplit/img.webp'}/>
                        </div>}
                </div>
                {isDetailedView &&
                    <div className={'px-5 lg:px-0 mt-14 lg:mt-24 bg-white max-w-7xl mx-auto flex flex-col gap-y-16'}>
                        <div>
                            <h2 className={'mb-8 text-base lg:text-[25px] font-bold lg:font-semibold text-[#0A0A0A]'}>Key
                                Advantages</h2>
                            <div className={'grid grid-cols-1 lg:grid-cols-2 gap-[17px]'}>
                                {keyAdvantageCardDetails.map((item, index) => {
                                    return (
                                        <SolutionDetailCard key={index} title={item.title}
                                                            description={item.description}/>
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                            <h2 className={'mb-8 text-base lg:text-[25px] font-bold lg:font-semibold text-[#0A0A0A]'}>Ideal
                                For</h2>
                            <div className={'grid grid-cols-1 gap-2'}>
                                {idealsDetails.map((item, index) => {
                                    return (
                                        <SolutionDetailCard key={index} title={item}/>
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                            <h2 className={'mb-8 text-base lg:text-[25px] font-bold lg:font-semibold text-[#0A0A0A]'}>Why
                                XSPLIT?</h2>
                            <div className={'grid grid-cols-1 gap-2'}>
                                {splitDetails.map((item, index) => {
                                    return (
                                        <SolutionDetailCard key={index} title={item}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    );
};

export default Xsplit;