import React from 'react';

interface WrapperProps {
    children?: React.ReactNode;
    reverse?: boolean; // If true, the order of the columns will be reversed on mobile view
}

const TwoCols: React.FC<WrapperProps> = ({children, reverse}) => {
    return (
        <div className={`flex ${reverse ? 'flex-col-reverse' : 'flex-col'} lg:flex-row gap-5 md:gap-10`}>
            {children}
        </div>
    );
};

export default TwoCols;