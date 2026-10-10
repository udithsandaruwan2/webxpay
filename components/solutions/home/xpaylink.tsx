'use client';

import React, {useState} from 'react';
import Image from "next/image";
import CloseIcon from "@/public/solutions/icons/close.Icon";
import SolutionDetailCard from "@/components/solutions/home/items/SolutionDetailCard";

const keyAdvantageCardDetails = [{
    title: 'Generate Links on Any Device',
    description: 'Effortlessly create and send payment links via desktop or mobile.'
}, {
    title: 'Seamless Digital Payments',
    description: 'Customers click a link to proceed—no app download required.',
}, {
    title: 'Dynamic or Fixed Amount',
    description: 'Merchants can either pre-set an amount or let customers enter one, suiting varied use-cases.',
}, {
    title: 'Next-Business-Day Settlements (T+1)',
    description: 'Consistent, reliable cash flow remains standard for local transactions.',
}, {
    title: 'Uncompromising Security',
    description: 'ISO 27001 and PCI DSS compliance ensure each link-based interaction is robustly protected.'
}, {
    title: 'Extensive Payment Options',
    description: 'Incorporates JustPay, cards, local e-wallets, XPAYLINK, and can even link to EMI solutions like XSPLIT for higher-value requests.'
}]

const idealsDetails = ['SMEs, self-employed individuals, or government bodies', 'Freelancers or consultants needing quick invoice settlement', 'Ad hoc sales (e.g. one-off product launches or event ticketing)']

const payLinkDetails = ['XPAYLINK fuses speed, simplicity, and security, enabling users to capitalise on payment opportunities instantly. With real-time transaction visibility and zero complicated integrations, it’s an accessible route to digital payments for even the smallest operations.']

const Xpaylink = () => {
    const [isDetailedView, setIsDetailedView] = useState(false);

    return (
        <div>
            <div
                id={`xpaylink`}
                className={`py-5 md:py-10`}>
                <p className={`invisible`}>.</p>
            </div>
            <div >
                <div
                    className={`relative ${isDetailedView ? 'flex flex-col md:flex-col' : 'flex flex-col md:grid md:grid-cols-2'} my-5 p-5 md:p-0 bg-white max-w-7xl mx-auto`}>
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
                                alt={'phone'} src={'/solutions/xpaylink/img.jpg'}/>
                        </div> :
                        <div>
                            <Image
                                width={1000}
                                height={1000}
                                className={`rounded-md`}
                                alt={'phone'} src={'/solutions/xpaylink/img.jpg'}/>
                        </div>}
                    <div className={`flex items-center md:px-5`}>
                        <div
                            className={`${isDetailedView ? 'justify-center items-center' : ''} my-auto flex flex-col gap-y-6 md:p-5 pt-5 md:pt-12`}>
                            <h1 className={`font-semibold`}>A Quick, Secure Path to Accepting Payments Anywhere</h1>
                            <Image
                                className={`w-[140px]`}
                                alt={'icon'}
                                src={'/solutions/xpaylink/icon.svg'} width={200} height={100}/>
                            <p className={`${isDetailedView ? 'max-w-5xl mx-auto text-center' : ''}`}>
                                XPAYLINK is a flexible, shareable link solution designed for merchants and agencies
                                requiring
                                remote or spontaneous transactions without a full-blown e-commerce site. It&apos;s ideal
                                for
                                scenarios like social media sales, invoicing over email, or government fee collections.
                            </p>
                            {!isDetailedView && <button onClick={() => setIsDetailedView(true)}
                                                        className={`cursor-pointer w-fit bg-black text-white rounded-md px-5 py-2 text-sm font-semibold`}>
                                Explore More →
                            </button>}

                        </div>
                    </div>
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
                                XPAYLINK?</h2>
                            <div className={'grid grid-cols-1 gap-2'}>
                                {payLinkDetails.map((item, index) => {
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

export default Xpaylink;
