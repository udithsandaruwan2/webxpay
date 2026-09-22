import React from 'react';
import Image from 'next/image';

export interface FeatWithIconProps {
    iconPath: string;
    title: string;
    biggerTitle?: string;
}

const FeatWithIcon: React.FC<FeatWithIconProps> = ({iconPath, title, biggerTitle}) => {
    return (
        <div className="flex flex-row items-center justify-start gap-4">
            <div className="relative w-[50px] h-[50px] flex-shrink-0">
                <Image
                    alt={'icon'}
                    src={iconPath}
                    fill
                    className="object-cover scale-125"
                />
            </div>
            <div className={`flex flex-col`}>
                {biggerTitle &&
                    <p className="text-[18px] font-bold pb-2">{biggerTitle}</p>
                }
                <p className="">{title}</p>
            </div>
        </div>
    );
};

export default FeatWithIcon;
