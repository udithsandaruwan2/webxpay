import React from 'react';
import Banner from "@/components/solutions/home/Banner";
import Header from "@/components/common/header";
import Cores from "@/components/solutions/home/Cores";
import Footer from "@/components/common/footerAutoYear";
import App from "@/components/solutions/home/App";
import Suite from "@/components/solutions/home/Suite";
import Xsplit from "@/components/solutions/home/xsplit";
import Xsupplier from "@/components/solutions/home/xsupplier";
import Xqr from "@/components/solutions/home/xqr";
import Xpaylink from "@/components/solutions/home/xpaylink";
import XCollector from "@/components/solutions/home/xcollector";

const Page = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Cores/>
            <App/>
            <Suite/>
            <div className={`flex flex-col pb-5`}>
                <Xsplit/>
                <Xsupplier/>
                <Xqr/>
                <Xpaylink/>
                <XCollector/>
            </div>
            <Footer/>
        </div>
    );
};

export default Page;
