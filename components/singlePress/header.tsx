import React from 'react';

interface HeaderProps {
    text: string;
    headerSize?: 'small' | 'medium' | 'large';
}

const Header: React.FC<HeaderProps> = ({text, headerSize = 'medium'}) => {
    let headerClass = '';
    switch (headerSize) {
        case 'small':
            headerClass = 'text-[20px] font-semibold';
            break;
        case 'medium':
            headerClass = 'text-[25px] font-semibold';
            break;
        case 'large':
            headerClass = 'text-[31px] md:text-[39px] font-bold';
            break;
        default:
            headerClass = 'text-[25px] font-semibold';
    }


    return (
        <h1 className={`${headerClass}`}>
            {text}
        </h1>
    );
};

export default Header;