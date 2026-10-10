import React from 'react';
import Image from 'next/image';

const Details = () => {
    return (
        <div className={`flex flex-col md:grid grid-cols-1 md:grid-cols-2 my-5 p-5 md:p-0 bg-white max-w-7xl mx-auto`}>
            <div>
                <Image
                    width={1000}
                    height={1000}
                    className={`rounded-lg`}
                    alt={'phone'} src={'/xgateway/1.png'}/>
            </div>
            <div className={`flex items-center md:px-5`}>
                <div className={`my-auto flex flex-col gap-y-6 md:p-5 pt-5 md:pt-12`}>
                    <Image
                        className={`w-[180px] hidden md:block`}
                        alt={'icon'}
                        src={'/xgateway/icon.svg'} width={200} height={100}/>
                    <p>
                        XGATEWAY is WEBXPAY’s all-encompassing online payment platform, designed for those looking to
                        accept credit/debit cards, mobile wallets, and direct bank transfers with minimal effort. Since
                        its inception, XGATEWAY has streamlined local and cross-border transactions (with multi-currency
                        support), integrates smoothly with major e-commerce systems, and offers advanced tools like
                        tokenisation for recurring payments.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Details;