import React from 'react';
import Image from 'next/image';

const Details2 = () => {
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
                <div className={`my-auto flex flex-col gap-y-6 md:p-5 pt-5 md:pt-12 text-center md:text-left`}>
                    <h1 className={`font-bold text-[37px]`}>Why XSETRA Matters</h1>
                    <p>
                        By merging day-to-day service needs (e.g. paying bills, scheduling repairs, or making insurance
                        payments) with advanced payment tools (like XSPLIT, XQR, or XSUPPLIER), XSETRA aims to be every
                        Sri Lankan’s digital companion, ensuring convenience, transparency, and empowerment in one
                        holistic ecosystem.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Details2;