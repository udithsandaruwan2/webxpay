import React from 'react';

interface DescriptionProps {
    text: string;
}

const Description: React.FC<DescriptionProps> = ({ text }) => {
    return (
        <p className={`text-[14px] font-normal md:text-[18px] md:font-medium`}>{text}</p>
    );
};

export default Description;