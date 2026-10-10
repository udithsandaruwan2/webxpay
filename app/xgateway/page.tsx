import React from 'react';
import Header from "@/components/common/header";
import Footer from "@/components/common/footerAutoYear";
import Banner from "@/components/xgateway/banner";
import Details from "@/components/xgateway/details";
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
                    title={'Multiple Payment Method Acceptance'} mainImagePath={'/xgateway/2.png'}
                    feats={
                        [
                            {
                                iconPath: '/xgateway/icon/1.svg',
                                title: 'Coverage of Visa, Mastercard, Amex, UnionPay, Diners, Discover, plus local mobile wallets (FriMi, eZ Cash, mCash) and direct bank options (JustPay).'
                            },
                            {
                                iconPath: '/xgateway/icon/2.svg',
                                title: 'Multi-currency acceptance for merchants targeting an international consumer base.'
                            },
                        ]
                    } isReversed={false}/>
                <FeatRow
                    title={'Fast Local Settlements (T+1)'} mainImagePath={'/xgateway/3.png'}
                    feats={
                        [
                            {
                                iconPath: '/xgateway/icon/3.svg',
                                title: 'Enables merchants to access funds by the next business day, enhancing liquidity.'
                            },
                            {
                                iconPath: '/xgateway/icon/4.svg',
                                title: 'An Fast T+1 settlement for foreign currency transactions.'
                            },
                        ]
                    } isReversed={true}/>
                <FeatRow
                    title={'Advanced Developer Integration'} mainImagePath={'/xgateway/4.png'}
                    feats={
                        [
                            {
                                iconPath: '/xgateway/icon/5.svg',
                                title: 'APIs, SDKs, and plugins (Shopify, WooCommerce, OpenCart).'
                            },
                            {
                                iconPath: '/xgateway/icon/6.svg',
                                title: 'Tokenisation (in certain tiers) for subscription models or quick repeat checkouts.'
                            },
                        ]
                    } isReversed={false}/>
                <FeatRow
                    title={'Security & Compliance'} mainImagePath={'/xgateway/5.png'}
                    feats={
                        [
                            {
                                iconPath: '/xgateway/icon/7.svg',
                                title: 'ISO 27001 and PCI DSS adherence.'
                            },
                            {
                                iconPath: '/xgateway/icon/8.svg',
                                title: 'AI-driven onboarding minimises fraud and expedites verifications.'
                            },
                        ]
                    } isReversed={true}/>
                <FeatRow
                    title={'Scalable Tiers'} mainImagePath={'/xgateway/6.png'}
                    feats={
                        [
                            {
                                iconPath: '/xgateway/icon/9.svg',
                                title: 'Starter, Economy, and Business packages options with varying transaction rates and subscription fees to match turnover levels.'
                            },
                        ]
                    } isReversed={false}/>
                <FeatRow
                    title={'Optional Add-Ons'} mainImagePath={'/xgateway/7.png'}
                    feats={
                        [
                            {
                                iconPath: '/xgateway/icon/10.svg',
                                title: 'XSUPPLIER for supply chain finance, XQR for QR acceptance, XPAYLINK for generating payment links, and XSPLIT for flexible instalment plans (BNPL).'
                            },
                        ]
                    } isReversed={true}/>
            </div>
            <Footer/>
        </div>
    );
};

export default Page;
