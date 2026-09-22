import React from 'react';

interface SolutionDetailsCardProps {
    title?: string;
    description?: string;
}

const SolutionDetailCard: React.FC<SolutionDetailsCardProps> = ({title, description}) => {
    return (
        <div className={'bg-[#4E5256] rounded-lg p-5 flex flex-col gap-y-3'}>
            {title && <h3 className={'font-bold text-base text-white'}>{title}</h3>}
            {description && <p className={'font-normal text-sm text-white'}>{description}</p>}
        </div>
    );
};

export default SolutionDetailCard;