'use client';

import React, {useState} from 'react';
import Image from "next/image";
import CloseIcon from "@/public/solutions/icons/close.Icon";
import SolutionDetailCard from "@/components/solutions/home/items/SolutionDetailCard";

const keyAdvantageCardDetails = [{
    title: 'Remove Debtor Risks for Suppliers',
    description: 'As soon as an invoice is generated, suppliers receive immediate payment or a scheduled payment. This certainty underpins stable cash flow and builds trust in the supply chain.'
}, {
    title: 'Static or Dynamic QRs',
    description: 'Suitable for either a permanent display or custom generation per transaction.',
}, {
    title: 'Extended Global Reach',
    description: 'Integrates with UPI (for Indian tourists) and Alipay+ (spanning 10 major markets), unlocking international spending.',
}, {
    title: 'Secure & Compliant',
    description: 'SO 27001–backed data protection and PCI DSS–aligned processes, safeguarding each scan and payment.',
}, {
    title: 'Competitive MDR',
    description: 'Local QR fees are as low as 1% and cross-border at 1.8%, with T+1 settlements for LKR transactions.'
}, {
    title: 'Versatile Deployment',
    description: 'Easily plug in XQR to a POS system or an app; or use tabletop displays for simpler environments.'
}]

const qrDetails = ['Sri Lanka’s fast-evolving digital landscape sees an uptick in contactless, QR-based transactions. By adopting XQR, merchants embrace modern payment preferences, whether from local smartphone users or tourists carrying international wallets.']

const Xqr = () => {
    const [isDetailedView, setIsDetailedView] = useState(false);

    return (
        <div>
            <div
                id={'xqr'}
                className={`py-5 md:py-10`}>
                <p className={`invisible`}>.</p>
            </div>
            <div
                className={`relative ${isDetailedView ? 'flex flex-col-reverse md:flex-col-reverse' : 'flex flex-col-reverse md:grid md:grid-cols-2'} my-5 p-5 md:p-0 bg-white max-w-7xl mx-auto`}>
                <div className={`flex items-center md:px-5`}>
                    <div
                        className={`${isDetailedView ? 'justify-center items-center' : ''} my-auto flex flex-col gap-y-6 md:p-5 pt-5 md:pt-12`}>
                        <h1 className={`font-semibold`}>Seamless, Secure, Globally Connected QR</h1>
                        <Image
                            className={`w-[100px]`}
                            alt={'icon'}
                            src={'/solutions/xqr/icon.svg'} width={200} height={100}/>
                        <p className={`${isDetailedView ? 'max-w-5xl mx-auto text-center' : ''}`}>
                            Built on the LankaQR framework and enriched by EMV standards, XQR by WEBXPAY unifies local
                            and
                            cross-border QR transactions under one powerful solution. It caters to corporates, SMEs,
                            micro-merchants, and even self-employed professionals, unlocking frictionless payment
                            experiences.
                        </p>
                        <div className={``}>
                            <div className={`flex flex-row ${isDetailedView ? 'justify-center' : ''}`}>
                                <Image
                                    width={168}
                                    height={50}
                                    className={`rounded-md`}
                                    alt={'phone'} src={'/solutions/xqr/sub1.png'}/>
                                <Image
                                    width={200}
                                    height={50}
                                    className={`rounded-md scale-50 relative right-10`}
                                    alt={'phone'} src={'/solutions/xqr/sub2.png'}/>
                            </div>
                        </div>
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
                            alt={'phone'} src={'/solutions/xqr/img.jpg'}/>
                    </div> :
                    <div>
                        <Image
                            width={1000}
                            height={1000}
                            className={`rounded-md`}
                            alt={'phone'} src={'/solutions/xqr/img.jpg'}/>
                    </div>}
            </div>
            {isDetailedView &&
                <div className={'px-5 lg:px-0 mt-14 lg:mt-24 bg-white max-w-7xl mx-auto flex flex-col gap-y-16'}>
                    <div>
                        <h2 className={'mb-8 text-base lg:text-[25px] font-bold lg:font-semibold text-[#0A0A0A]'}>Merchant
                            Capabilities</h2>
                        <div className={'grid grid-cols-1 lg:grid-cols-2 gap-[17px]'}>
                            {keyAdvantageCardDetails.map((item, index) => {
                                return (
                                    <SolutionDetailCard key={index} title={item.title} description={item.description}/>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <h2 className={'mb-8 text-base lg:text-[25px] font-bold lg:font-semibold text-[#0A0A0A]'}>Why It
                            Matters</h2>
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

export default Xqr;
