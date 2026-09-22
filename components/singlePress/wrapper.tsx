import React from 'react';
import Header from "@/components/common/header";
import Footer from "@/components/common/footerAutoYear";
import Banner from "@/components/singlePress/banner";
import MoreWebxpayPress from "@/components/singlePress/moreWebxpayPress";

interface WrapperProps {
    children?: React.ReactNode;
}

// This is a wrapper component for the media section. You don't need to add any content here nor change this normally.
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <div>
            <Header/>
            <Banner/>
            <div className={`max-w-7xl mx-auto px-5 flex flex-col gap-y-4 py-5`}>
                {children}
            </div>
            <MoreWebxpayPress/>
            <Footer/>
        </div>
    );
};

export default Wrapper;
