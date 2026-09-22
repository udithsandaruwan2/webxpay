import React from 'react';
import Header from "@/components/common/header";
import Footer from "@/components/common/footerAutoYear";
import Banner from "@/components/press/banner";
import Latest from "@/components/press/latest";
import NotLatest from "@/components/press/notLatest";
import pressData from "@/app/media/pressData";

const Page = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            {/*First 2*/}
            <Latest data={pressData.slice(0, 2)}/>
            {/*Others*/}
            <NotLatest data={pressData.slice(2)}/>
            <Footer/>
        </div>
    );
};

export default Page;
