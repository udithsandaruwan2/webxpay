import React from 'react';
import Image from 'next/image';

interface ImageProps {
    src?: string;
}

const BigImage: React.FC<ImageProps> = ({src = '/media/default.png'}) => {
    return (
        <Image
            className={`w-screen`}
            src={src} width={2560} height={2560} alt={'pressimage'}/>
    );
};

export default BigImage;