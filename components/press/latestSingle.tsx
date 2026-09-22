"use client";

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from "next/navigation";

export interface PressProps {
    imagePath?: string;
    title: string;
    description: string;
    url: string;
    isNewTab?: boolean;
}

const LatestSingle: React.FC<PressProps> = ({
                                                imagePath = "/media/default.png",
                                                url,
                                                title,
                                                description,
                                                isNewTab = false,
                                            }) => {
    const [isInsidePress, setIsInsidePress] = useState<boolean>(false);

    const location = usePathname();
    useEffect(() => {
        // Get the last part of the URL path
        const lastPart = location.split('/').pop();
        if (!lastPart) return;

        if (!lastPart.includes('media')) {
            setIsInsidePress(true);
        }
    }, [location]);


    return (
        <div className={`flex gap-y-3 flex-col`}>
            <Image alt={'latestimagge'} src={imagePath} width={500} height={300}
                   className={`w-full object-cover rounded-lg ${isInsidePress && 'aspect-video'}`}/>
            <h1 className={`font-semibold text-[25px]`}>{title}</h1>
            <p className={`text-[16px]`}>{description}</p>
            <div>
                {isNewTab ? (
                    <Link
                        className={`bg-webxpay-yellow rounded-sm py-2 px-4 text-[14px]`}
                        href={url} target="_blank" rel="noopener noreferrer">Read More →</Link>
                ) : (
                    <Link
                        className={`bg-webxpay-yellow rounded-sm py-2 px-4 text-[14px]`}
                        href={url}>Read More →</Link>
                )}
            </div>
        </div>
    );
};

export default LatestSingle;