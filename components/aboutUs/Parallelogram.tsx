import React from 'react';
import './Parallelogram.css';


interface ParallelogramProps {
    children: React.ReactNode;
    containerClassName?: string;
    contentClassName?: string;
}

const Parallelogram: React.FC<ParallelogramProps> = ({children, contentClassName, containerClassName}) => {
    return (
        <div className={`parallelogram-container ${containerClassName ? containerClassName : ''}`}>
            <div className={`parallelogram-content ${contentClassName ? contentClassName : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Parallelogram;
