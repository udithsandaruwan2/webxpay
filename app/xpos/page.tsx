import React from 'react';
import Header from "@/components/common/header";
import Footer from "@/components/common/footerAutoYear";
import Banner from "@/components/xpos/banner";
import Details from "@/components/xpos/details";
import KeyH from "@/components/common/KeyH";
import FeatRow from "@/components/common/featRow";

const Page = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Details/>
            <KeyH/>
            <div className={`flex flex-col gap-y-3 md:gap-y-20`}>
                <FeatRow
                    title={'All-in-One Device'} mainImagePath={'/xpos/2.webp'}
                    feats={
                        [
                            {
                                iconPath: '/xpos/icon/1.svg',
                                title: 'Accepts all major card schemes and local e-wallet/QR solutions (LankaQR, UPI, Alipay+).'
                            },
                            {
                                iconPath: '/xpos/icon/2.svg',
                                title: 'Digital receipt approach reduces waste and operating expenses.'
                            },
                        ]
                    } isReversed={false}/>
                <FeatRow
                    title={'T+1 Liquidity & Real-Time Analytics'} mainImagePath={'/xpos/3.png'}
                    feats={
                        [
                            {
                                iconPath: '/xpos/icon/3.svg',
                                title: 'Next-day settlements for local transactions.'
                            },
                            {
                                iconPath: '/xpos/icon/4.svg',
                                title: 'An integrated dashboard with a merchant app for daily sales tracking, refunds, chargebacks and reconciliation.'
                            },
                        ]
                    } isReversed={true}/>
                <FeatRow
                    title={'24/7 Support'} mainImagePath={'/xpos/4.png'}
                    feats={
                        [
                            {
                                iconPath: '/xpos/icon/5.svg',
                                title: 'Round-the-clock call centre for merchant and technical assistance.'
                            },
                            {
                                iconPath: '/xpos/icon/6.svg',
                                title: 'Dedicated merchant portal for real-time issue tracking and self-service resolution.'
                            },
                        ]
                    } isReversed={false}/>
                <FeatRow
                    title={'Scalable Tiers'} mainImagePath={'/xpos/5.png'}
                    feats={
                        [
                            {
                                iconPath: '/xpos/icon/7.svg',
                                title: 'Starter, Economy, and Business, each with varying transaction rates to match turnover levels.'
                            },

                        ]
                    } isReversed={true}/>
                <FeatRow
                    title={'Security'} mainImagePath={'/xpos/6.png'}
                    feats={
                        [
                            {
                                iconPath: '/xpos/icon/8.svg',
                                title: 'PCI DSS for card data and ISO 27001 for broader data integrity.'
                            },
                            {
                                iconPath: '/xpos/icon/9.svg',
                                title: 'Encrypted transaction flows safeguard information for any retail environment.'
                            },
                        ]
                    } isReversed={false}/>
            </div>
            <Footer/>
        </div>
    );
};

export default Page;
