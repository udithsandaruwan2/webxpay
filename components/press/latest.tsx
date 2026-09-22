import React from 'react';
import LatestSingle, {PressProps} from "@/components/press/latestSingle";


export interface LatestPressProps {
    data: PressProps[];
}

const Latest: React.FC<LatestPressProps> = ({data}) => {
    return (
        <div className={`max-w-7xl mx-auto px-5 py-10 relative`}>
            <h1 className={`font-bold text-[39px] pb-5`}>Latest News</h1>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-5`}>
                {data.map((item, index) => (
                    <LatestSingle
                        key={index}
                        imagePath={item.imagePath}
                        title={item.title}
                        description={item.description}
                        url={item.url}
                    />
                ))}
            </div>
        </div>
    );
};

export default Latest;