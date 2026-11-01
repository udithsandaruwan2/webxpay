import React from 'react';
import Image from "next/image";
import Link from "next/link";

const App = () => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 p-4 bg-white max-w-7xl mx-auto`}>
            <div>
                <Image
                    width={1000}
                    height={1000}
                    className={`rounded-md`}
                    alt={'phone'} src={'/solutions/app/whole.webp'}/>
            </div>
            <div className={`flex items-center md:px-5`}>
                <div className={`my-auto flex flex-col gap-y-6 md:p-5 pt-5 md:pt-12`}>
                    <h1>Lifestyle Super App</h1>
                    <Image
                        className={`w-[140px]`}
                        alt={'icon'}
                        src={'/solutions/app/icon.svg'} width={200} height={100}/>
                    <p>
                        XSETRA is WEBXPAY’s vision of how financial activities and daily living should
                        intersect—smoothly, securely, and in one place. By bundling diverse features such as bill
                        payments, peer-to-peer transfers, QR acceptance, referral rewards, and more, XSETRA transforms
                        into a centralised hub that users can rely on for virtually any financial or lifestyle need.
                    </p>
                    <div>
                        <Link href={'/xsetra'}
                              className={`bg-black text-white rounded-md px-5 py-2 text-sm font-semibold`}>
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;