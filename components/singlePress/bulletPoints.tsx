import React from 'react';

interface BulletPointsProps {
    points: string[];
}

const BulletPoints = ({ points }: BulletPointsProps) => {
    return (
        <div>
            <ul className={`list-disc pl-5`}>
                {points.map((point, index) => (
                    <li key={index} className={`text-[14px] font-normal md:text-[18px] md:font-medium`}>
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BulletPoints;