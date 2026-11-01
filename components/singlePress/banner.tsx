'use client'

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import pressData from "@/app/media/pressData";
import {usePathname} from "next/navigation";

const Banner = () => {
    const [pressDataTitle, setPressDataTitle] = useState<string>('Media - WEBXPAY');
    const location = usePathname();
    useEffect(() => {
        // Get the last part of the URL path
        let lastPart = location.split('/').pop();
        if (!lastPart) return;

        lastPart = `/press/${lastPart}`

        // Find the corresponding media item
        const pressItem = pressData.find(item => item.url === lastPart);

        // If found, set the document title
        if (pressItem) {
            document.title = pressItem.title;
            setPressDataTitle(pressItem.title);
        } else {
            document.title = 'Media - WEBXPAY'; // Default title if not found
            setPressDataTitle('Media - WEBXPAY');
        }
    }, [location]);


    return (
        <section
            className={`min-h-fit relative -top-2 md:top-0 lg:top-0 max-w-screen mx-auto bg-white z-0 overflow-x-hidden`}>
            <>
                {/*  Desktop Banner*/}
                <div className={'hidden lg:block relative mx-auto'}>
                    <div
                        className={`w-full h-[60vh] top-0 absolute z-20 bg-linear-[65deg,black,transparent_89%,transparent]`}>
                        .
                    </div>
                    <div className={'w-full h-[60vh] top-0 absolute z-10'}>
                        <>
                            <Image
                                src={'/media/banner.jpg'}
                                alt={'Home Header Image'}
                                fill
                                className={'object-cover object-right w-auto h-full z-10 relative'}
                                priority={true}
                                quality={85}
                            />
                        </>
                    </div>
                    <div
                        className={`relative h-[60vh] w-full mx-auto z-50 text-left flex flex-col gap-y-4 justify-end bottom-0`}>
                        <div className={`w-screen bg-webxpay-yellow`}>
                            <div className={`max-w-7xl mx-auto flex flex-row gap-x-5 p-5 font-bold text-[18px] text-webxpay-values`}>
                                <Link href="/media">Media</Link>
                                <p>/</p>
                                <p>{pressDataTitle} </p>
                            </div>
                        </div>
                    </div>

                </div>


                {/*  Mobile Banner*/}
                <div className={'block lg:hidden min-h-max'}>
                    <div
                        className={
                            'relative min-h-fit flex flex-col'
                        }
                    >
                        <div
                            className={'relative left-0 w-auto h-[300px] sm:h-[460px]'}>
                            <Image src={'/media/banner.jpg'}
                                   alt={'Home Page Banner image'}
                                   fill
                                   className={'object-cover object-[25%_center]'}
                                   priority={true}
                                   quality={85}
                            />
                        </div>

                        <div className={'relative flex flex-col gap-y-3 text-left bg-white'}>
                            <div className={`w-screen bg-webxpay-yellow`}>
                                <div className={`max-w-7xl mx-auto flex flex-row gap-x-5 p-5 font-semibold text-[14px] text-webxpay-values`}>
                                    <Link href="/media">Media</Link>
                                    <p>/</p>
                                    <p>{pressDataTitle} </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        </section>
    );
};

export default Banner;