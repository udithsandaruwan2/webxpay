import React from 'react';
import dynamic from 'next/dynamic';
import Header from "@/components/common/header";
import Banner from "@/components/home/banner";
import StoresSlider from "@/components/home/stores";
import OnePlatformHex from "@/components/home/OnePlatformHex";
import SeamlessIntegration from "@/components/home/SeamlessIntegration";
import ProductSuite from "@/components/home/ProductSuite";
import SecurityScale from "@/components/home/SecurityScale";
import Empower from "@/components/home/Empower";
import Footer from "@/components/common/footerAutoYear";

const CoreSolution = dynamic(() => import("@/components/home/CoreSolution"), {
    ssr: true,
});

const Page = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <StoresSlider/>
            <OnePlatformHex/>
            <SeamlessIntegration/>
            <CoreSolution/>
            <ProductSuite/>
            <SecurityScale/>
            <Empower/>
            <Footer/>
        </div>
    );
};

export default Page;
