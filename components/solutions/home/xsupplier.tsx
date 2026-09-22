'use client';

import React, {useState} from 'react';
import Image from "next/image";
import CloseIcon from "@/public/solutions/icons/close.Icon";
import SolutionDetailCard from "@/components/solutions/home/items/SolutionDetailCard";

const keyAdvantageCardDetails = [{
    title: 'Remove Debtor Risks for Suppliers',
    description: 'As soon as an invoice is generated, suppliers receive immediate payment or a scheduled payment. This certainty underpins stable cash flow and builds trust in the supply chain.'
}, {
    title: 'Unparalleled Buyer Credit Flexibility',
    description: 'Buyers can exploit up to 20-50-day credit terms, extending them to 80 days, including the usual supplier credit of 30 days, by settling on a specified day. This goes well beyond the standard 30-day window, affording more financial control.',
}, {
    title: 'Corporate Card Versatility',
    description: 'Buyers can consolidate various expenses—including salaries, utilities, and taxes—onto a single corporate card, streamlining financial management.',
}, {
    title: 'Working Capital Optimisation',
    description: 'Longer credit periods allow buyers to reallocate funds for strategic investments, expansions, or operational efficiency.',
}, {
    title: 'Enhanced Supplier Relationships',
    description: 'Swift, predictable payments reduce friction, enabling suppliers to plan production and inventory with confidence and potentially offer favourable rates.'
}, {
    title: 'Secure Platform & Controls',
    description: 'XSUPPLIER is safeguarded by ISO 27001 and PCI DSS compliance, while replicating established financial controls (e.g. inputter and approver) to prevent single-user overrides.'
}, {
    title: 'Streamlined Transaction Management',
    description: 'Routine processes such as invoice generation, credit checks, and settlement confirmations are digitised, cutting administrative overhead',
}, {
    title: 'Developer-Friendly',
    description: 'Detailed API docs and a dedicated developer kit make it easy to fold XSUPPLIER into existing ERP or accounting systems.',
}]

const idealsDetails = ['Suppliers wanting stable, predictable cash flow', 'Buyers seeking to extend credit terms for liquidity or strategic growth', 'Complex B2B operations with frequent, high-value transactions']

const supplierDetails = ['XSUPPLIER is a comprehensive supply chain solution rather than a mere payment facilitator. By minimising debtor eXPOSure, boosting credit flexibility, and securing every transaction under WEBXPAY’s robust compliance, it converts supply chains into genuine growth engines for modern businesses.']

const Xsupplier = () => {
    const [isDetailedView, setIsDetailedView] = useState(false);

    return (
        <div>
            <div
                id={'xsupplier'}
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
                                alt={'phone'} src={'/solutions/xsupplier/img.jpg'}/>
                        </div> :
                        <div>
                            <Image
                                width={1000}
                                height={1000}
                                className={`rounded-md`}
                                alt={'phone'} src={'/solutions/xsupplier/img.jpg'}/>
                        </div>}
                    <div className={`flex items-center md:px-5`}>
                        <div
                            className={`${isDetailedView ? 'justify-center items-center' : ''} my-auto flex flex-col gap-y-6 md:p-5 pt-5 md:pt-12`}>
                            <h1 className={`font-semibold`}>Strategic Supply Chain Financing</h1>
                            <Image
                                className={`w-[140px]`}
                                alt={'icon'}
                                src={'/solutions/xsupplier/icon.png'} width={200} height={100}/>
                            <p className={`${isDetailedView ? 'max-w-5xl mx-auto text-center' : ''}`}>
                                XSUPPLIER is a forward-thinking platform that streamlines B2B supply chains by extending
                                credit
                                lines to buyers and guaranteeing immediate or agreed settlements for suppliers. It
                                effectively
                                eliminates traditional debtor risks, optimises working capital, and empowers business
                                partnerships to thrive.
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
                                {supplierDetails.map((item, index) => {
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

export default Xsupplier;
