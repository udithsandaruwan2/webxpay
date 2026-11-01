import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {PressProps} from "@/components/press/latestSingle";

const NotLatestSingle: React.FC<PressProps> = ({
                                                   imagePath = "/media/default.png", url, title, description
                                               }) => {
    return (
        <div>
            <div className={`flex gap-y-3 flex-col`}>
                <Image alt={'latestimagge'} src={imagePath} width={500} height={300}
                       className={`w-full object-cover rounded-lg`}/>
                <h1 className={`font-semibold text-[25px]`}>{title}</h1>
                <p className={`text-[16px]`}>{description}</p>
                <div>
                    <Link
                        className={`bg-webxpay-yellow rounded-sm py-2 px-4 text-[14px]`}
                        href={url} target="_blank" rel="noopener noreferrer">Learn More →</Link>
                </div>
            </div>
        </div>
    );
};

export default NotLatestSingle;