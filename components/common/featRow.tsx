import React from 'react';
import FeatWithIcon, {FeatWithIconProps} from "@/components/common/featWithIcon";
import Image from "next/image";

interface FeatWithIconState {
    mainIconPath?: string;
    feats: FeatWithIconProps[]
    title: string;
    isReversed?: boolean;
    mainImagePath: string;
}

const FeatRow: React.FC<FeatWithIconState> = ({mainIconPath, mainImagePath, feats, title, isReversed = false}) => {
    return (
        <div
            className={`flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 my-5 p-5 md:p-0 bg-white max-w-7xl mx-auto ${isReversed ? 'md:flex-row-reverse' : ''}`}>
            {/* Content Section */}
            <div className={`flex items-center md:px-5`}>
                <div className={`my-auto flex flex-col gap-y-6 md:p-5 pt-5 md:pt-12`}>
                    {mainIconPath ? (
                            <div className="w-1/2 pt-6 md:pt-0">
                                <Image
                                    alt={'main icon'}
                                    src={mainIconPath}
                                    width={250}
                                    height={250}
                                    className="w-1/2"
                                />
                            </div>
                        ) :
                        <h1 className={`font-semibold text-[31px] md:text-[39px]`}>
                            {title}
                        </h1>
                    }
                    <div className="flex flex-col gap-y-4">
                        {feats.map((feat, i) => {
                            return (
                                <FeatWithIcon
                                    key={`${i}-${feat.title}-${title}`}
                                    title={feat.title}
                                    iconPath={feat.iconPath}
                                    biggerTitle={feat.biggerTitle}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className={`${isReversed ? 'md:order-first' : ''}`}>
                <Image
                    alt={'main image'}
                    src={mainImagePath}
                    width={1000}
                    height={1000}
                    className="rounded-md w-full h-auto"
                />
            </div>
        </div>
    );
};

export default FeatRow;
