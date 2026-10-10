import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Cores = () => {
    return (
        <div className={`max-w-7xl mx-auto md:grid grid-rows-2`}>
            <div
                className={`w-full flex flex-col-reverse md:flex-row justify-between bg-webxpay-core rounded-md p-5 my-5`}>
                <div
                    className={`grow md:pl-5 my-auto flex flex-col gap-y-6 pb-20 md:pr-12 pt-10 md:pt-0 text-center md:text-left`}>
                    <h1>Conquer the Digital Frontier</h1>
                    <Image
                        className={`w-[230px]`}
                        width={1200}
                        height={1000}
                        alt={'xgateway-icon'} src={'/home/coresolution/xgateway-icon.svg'}/>
                    <p>
                        XGATEWAY is WEBXPAY’s all-encompassing online payment platform, designed for those looking to
                        accept credit/debit cards, mobile wallets, and direct bank transfers with minimal effort. Since
                        its inception, XGATEWAY has streamlined local and cross-border transactions (with multi-currency
                        support), integrates smoothly with major e-commerce systems, and offers advanced tools like
                        tokenisation for recurring payments.
                    </p>
                    <div>
                        <Link href={'/xgateway'}
                              className={`bg-black text-white rounded-md px-5 py-2 text-sm font-semibold`}>
                            Learn more
                        </Link>
                    </div>
                </div>
                <div className={` w-full h-auto p-5 scale-110`}>
                    <Image
                        width={1200}
                        height={1000}
                        alt={'pc'} src={`/home/coresolution/xgateway.png`}/>
                </div>
            </div>
            <div
                className={`w-full flex flex-col-reverse md:flex-row justify-between bg-webxpay-core rounded-md pl-5 mb-5`}>
                <div
                    className={`grow md:pl-5 my-auto flex flex-col gap-y-6 pb-20 pt-10 md:pt-0 text-center md:text-left`}>
                    <h1>Unleash In-Store Commerce</h1>
                    <Image
                        className={`w-[140px]`}
                        width={1200}
                        height={1000}
                        alt={'xpos-icon'} src={'/home/coresolution/xpos-icon.svg'}/>
                    <p>
                        XPOS is WEBXPAY’s point-of-sale (POS) system, crafted for contemporary in-store experiences. It
                        combines contactless card acceptance, QR-based payments, and T+1 settlements on a single
                        device—paperless by default, though printed receipts are optional upon request.
                    </p>
                    <div>
                        <Link href={'/xpos'}
                              className={`bg-black text-white rounded-md px-5 py-2 text-sm font-semibold`}>
                            Learn more
                        </Link>
                    </div>
                </div>
                <div className={`md:pr-5 h-full flex items-end justify-end`}>
                    <Image
                        width={1000}
                        height={1000}
                        alt={'hand'}
                        className={`relative w-full md:w-[1400px] pt-12 md:pt-0`}
                        src={`/home/coresolution/xpos.png`}/>
                </div>
            </div>
        </div>
    );
};

export default Cores;