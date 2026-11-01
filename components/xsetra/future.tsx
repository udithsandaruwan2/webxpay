import React from 'react';
import Image from "next/image";


const ICON = () => {
    return (
        <div className={`relative h-16 w-16 grid place-items-center md:scale-90`}>
            <Image
                className={`absolute`}
                src="/home/oneplatform/hexagon.svg" alt="Feature icon" width={1000} height={1000}/>
            <Image
                className={`z-10`}
                src={'/xsetra/globe.svg'} alt="Feature icon" width={25} height={25}/>
        </div>
    );
};


const Future = () => {
    return (
        <div className={'bg-webxpay-future py-12'}>
            <div className={`max-w-7xl mx-auto pt-5 px-5 md:px-0`}>
                <h1 className={`text-white text-[39px] font-bold pb-5`}>Future-Focused Features</h1>
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 text-white`}>
                    <div className={`bg-webxpay-values flex justify-start flex-col p-5 rounded-md`}>
                        <div>
                            <ICON/>
                        </div>
                        <p className={`font-bold pb-2`}>Micro-Merchant Focus</p>
                        <p>Ideal for self-employed individuals or tiny shops wanting a frictionless route to digital
                            transactions.</p>
                    </div>
                    <div className={`bg-webxpay-values flex justify-start flex-col p-5 rounded-md`}>
                        <div>
                            <ICON/>
                        </div>
                        <p className={`font-bold pb-2`}>LankaQR Integration</p>
                        <p>Merchants generate dynamic QR codes, encouraging real-time, on-the-spot payments at minimal
                            cost.</p>
                    </div>
                    <div className={`bg-webxpay-values flex justify-start flex-col p-5 rounded-md`}>
                        <div>
                            <ICON/>
                        </div>
                        <p className={`font-bold pb-2`}>Immediate Settlements</p>
                        <p>Real-time or near-immediate clearing ensures small vendors avoid cashflow delays.</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Future;