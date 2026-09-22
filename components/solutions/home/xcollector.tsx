'use client';

import React, {useState} from 'react';
import Image from "next/image";
import CloseIcon from "@/public/solutions/icons/close.Icon";
import SolutionDetailCard from "@/components/solutions/home/items/SolutionDetailCard";

const keyAdvantageCardDetails = [{
    title: 'Mobile-Ready Device & App',
    description: 'Outcome: Agents can take payments in the field, capturing digital receipts instantly. ' +
        'Why It Matters: Expands your revenue channels beyond store or website-based transactions.'
}, {
    title: 'Seamless Integration',
    description: 'Outcome: All data auto-syncs with your merchant portal for near-zero manual reconciliation. Why It Matters: Eliminates backend confusion, making daily closeouts easier.',
}, {
    title: 'Optional Agent Location Tracking',
    description: 'Outcome: Oversee route management and confirm agent visits. Why It Matters: Minimizes disputes and fosters accountability in field operations.',
}, {
    title: 'Instant Digital Receipts',
    description: 'Outcome: Provide immediate proof via SMS or email; maintain a green approach by avoiding paper. Why It Matters: Professional, transparent, and fosters trust with customers.',
}, {
    title: 'T+1 Local Settlements',
    description: 'Outcome: Faster access to funds from on-the-spot card or QR transactions. Why It Matters: Maintains stable cash flow even for an offsite sales/collections workforce.'
}, {
    title: 'Versatile Deployment',
    description: 'Easily plug in XQR to a POS system or an app; or use tabletop displays for simpler environments.'
}]

const qrDetails = [
    'XPOS: Ideal complement if you already use XPOS in-store, unifying the entire sales environment—storefront plus field.',
    'XCollector → XGateway: Data merges seamlessly for consistent end-of-day reporting across all channels.',
    'XSETRA: Potential integration for broader lifestyle or monthly payment cycles if you also have consumer-based solutions.',
]

const XCollector = () => {
    const [isDetailedView, setIsDetailedView] = useState(false);

    return (
        <div>
            <div
                id={'xcollector'}
                className={`py-5 md:py-10`}>
                <p className={`invisible`}>.</p>
            </div>
            <div
                className={`relative ${isDetailedView ? 'flex flex-col-reverse md:flex-col-reverse' : 'flex flex-col-reverse md:grid md:grid-cols-2'} my-5 p-5 md:p-0 bg-white max-w-7xl mx-auto`}>
                <div className={`flex items-center md:px-5`}>
                    <div
                        className={`${isDetailedView ? 'justify-center items-center' : ''} my-auto flex flex-col gap-y-6 md:p-5 pt-5 md:pt-12`}>
                        <h1 className={`font-semibold`}>Take your collection offline, but keep control online.</h1>
                        <Image
                            className={`w-[200px]`}
                            alt={'icon'}
                            src={'/solutions/xcollector/icon.png'} width={300} height={140}/>
                        <p className={`${isDetailedView ? 'max-w-5xl mx-auto text-center' : ''}`}>
                            {isDetailedView ? <>XCOLLECTOR from WEBXPAY is purpose-built for on-site or door-to-door
                                transactions, letting agents accept card, QR, or occasionally recorded cash with minimal
                                friction. It centralizes all data into a real-time dashboard, drastically cutting down
                                manual follow-ups and field errors. Optional location tracking, robust security (ISO
                                27001),
                                and T+1 local settlement transform your traditional collection process into a modern,
                                verifiable system that optimizes staff efficiency and your bottom line.</> : <> Give
                                your
                                field team the power to collect, record, and reconcile payments in
                                real-time—anywhere they go.</>}
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
                            alt={'phone'} src={'/solutions/xcollector/img.png'}/>
                    </div> :
                    <div>
                        <Image
                            width={1000}
                            height={1000}
                            className={`rounded-md`}
                            alt={'phone'} src={'/solutions/xcollector/img.png'}/>
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
                                    <SolutionDetailCard key={index} title={item.title} description={item.description}/>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <h2 className={'mb-8 text-base lg:text-[25px] font-bold lg:font-semibold text-[#0A0A0A]'}>Ecosystem
                            Synergy</h2>
                        <div className={'grid grid-cols-1 gap-2'}>
                            {qrDetails.map((item, index) => {
                                return (
                                    <SolutionDetailCard key={index} title={item}/>
                                )
                            })}
                        </div>
                    </div>
                </div>}
        </div>
    );
};

export default XCollector;
