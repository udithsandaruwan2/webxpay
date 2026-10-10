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
                    alt={'phone'} src={'/xpos/1.png'}/>
            </div>
            <div className={`flex items-center md:px-5`}>
                <div className={`my-auto flex flex-col gap-y-6 md:p-5 pt-5 md:pt-12`}>
                    <Image
                        className={`w-[180px] hidden md:block`}
                        alt={'icon'}
                        src={'/xpos/icon.svg'} width={200} height={100}/>
                    <p>
                        XPOS is WEBXPAY’s point-of-sale (POS) system, crafted for contemporary in-store experiences. It combines contactless card acceptance, QR-based payments, and T+1 settlements on a single device—paperless by default, though printed receipts are optional upon request.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Details;