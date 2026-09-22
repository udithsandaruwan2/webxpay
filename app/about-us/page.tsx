import React from 'react';
import Header from "@/components/common/header";
import Footer from "@/components/common/footerAutoYear";
import Banner from "@/components/aboutUs/banner";
import Vision from "@/components/aboutUs/Vision";
import Mission from "@/components/aboutUs/Mission";
import Values from "@/components/aboutUs/Values";
import Story from "@/components/aboutUs/story";
import WhyAreWe from "@/components/aboutUs/whyAreWe";
import Note from "@/components/aboutUs/Note";
import Commerce from "@/components/aboutUs/Commerce";
import Movement from "@/components/aboutUs/Movement";

const Page = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Story/>
            <WhyAreWe/>
            <Note/>
            <Vision/>
            <Mission/>
            <Values/>
            <Commerce/>
            <Movement/>
            <Footer/>
        </div>
    );
};

export default Page;
