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
                    alt={'phone'} src={'/xsetra/1.png'}/>
            </div>
            <div className={`flex items-center md:px-5`}>
                <div className={`my-auto flex flex-col gap-y-6 md:p-5 pt-5 md:pt-12`}>
                    <Image
                        className={`w-[180px] hidden md:block`}
                        alt={'icon'}
                        src={'/xsetra/icon.svg'} width={200} height={100}/>
                    <h1 className={`font-bold text-[31px] md:text-[39px]`}>Rationale and Core Ethos</h1>
                    <p>
                        XSETRA is WEBXPAY’s vision of how financial activities and daily living should
                        intersect—smoothly, securely, and in one place. By bundling diverse features such as bill
                        payments, peer-to-peer transfers, QR acceptance, referral rewards, and more, XSETRA transforms
                        into a centralised hub that users can rely on for virtually any financial or lifestyle need.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Details;