import React from 'react';
import Header from "@/components/common/header";
import Footer from "@/components/common/footerAutoYear";
import Banner from "@/components/xsetra/banner";
import Details from "@/components/xsetra/details";
import Details2 from "@/components/xsetra/details2";
import Trust from "@/components/xsetra/trust";
import Future from "@/components/xsetra/future";
import FeatRow from "@/components/common/featRow";

const Page = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Details/>
            <div className={`py-5`}>
                <FeatRow
                    mainIconPath={'/xsetra/mainIcon/xbill.png'}
                    title={'XBills'.toUpperCase()} mainImagePath={'/xsetra/2.png'}
                    feats={
                        [
                            {
                                iconPath: '/xsetra/icon/1.png',
                                title: 'Quickly view and settle different bills—utilities, streaming services, etc.—all from a single interface.',
                                biggerTitle: 'Bill Consolidation'
                            },
                            {
                                iconPath: '/xsetra/icon/2.png',
                                title: 'Gains personal finance intelligence as more merchants join, offering deeper spending analytics.',
                                biggerTitle: 'Future XINSIGHT'
                            },
                            {
                                iconPath: '/xsetra/icon/3.png',
                                title: 'Standard MDR covers it, so merchants can sign up to XBills without additional fees.',
                                biggerTitle: 'No Extra Cost for Merchants'
                            },
                        ]
                    } isReversed={false}/>
            </div>
            <Trust/>
            <div className={`flex flex-col gap-y-3 md:gap-y-20 py-5`}>
                <FeatRow
                    mainIconPath={'/xsetra/mainIcon/xsell.png'}
                    title={'XSell'.toUpperCase()} mainImagePath={'/xsetra/3.png'}
                    feats={
                        [
                            {
                                iconPath: '/xsetra/icon/4.png',
                                title: 'Ideal for self-employed individuals or tiny shops wanting a frictionless route to digital transactions.',
                                biggerTitle: 'Micro-Merchant Focus'
                            },
                            {
                                iconPath: '/xsetra/icon/5.png',
                                title: 'Merchants generate dynamic QR codes, encouraging real-time, on-the-spot payments at minimal cost.',
                                biggerTitle: 'LankaQR Integration'
                            },
                            {
                                iconPath: '/xsetra/icon/6.png',
                                title: 'Real-time or near-immediate clearing ensures small vendors avoid cashflow delays.',
                                biggerTitle: 'Immediate Settlements'
                            },
                        ]
                    } isReversed={true}/>
                <FeatRow
                    mainIconPath={'/xsetra/mainIcon/xearn.png'}
                    title={'XEarn'.toUpperCase()} mainImagePath={'/xsetra/4.png'}
                    feats={
                        [
                            {
                                iconPath: '/xsetra/icon/7.png',
                                title: 'Users can invite friends or business partners to XSETRA, earning one-off and/or percentage-based bonuses on subsequent transactions.',
                                biggerTitle: 'Referral and Rewards'
                            },
                            {
                                iconPath: '/xsetra/icon/8.png',
                                title: 'A personalised dashboard shows the number of referred users, how many have transacted, and total rewards gained.',
                                biggerTitle: 'Transparent Tracking'
                            },

                        ]
                    } isReversed={false}/>
            </div>
            <Future/>
            <Details2/>
            <Footer/>
        </div>
    );
};

export default Page;
