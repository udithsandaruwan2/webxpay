import React from 'react';

// Importing necessary custom components for the single media page. If you're importing from another folder other than components/singlePress, you are doing something wrong.
import Wrapper from "@/components/singlePress/wrapper";
import Header from "@/components/singlePress/header";
import Description from "@/components/singlePress/description";
import BigImage from "@/components/singlePress/bigImage";
import TwoCols from "@/components/singlePress/TwoCols";
import Image from "next/image";
import BulletPoints from "@/components/singlePress/bulletPoints";

// This is an example for a single Press page. Use this as a template for your own media pages. All required components are in /components/singlePress folder.
// Make sure to add this to pressData.ts file in the app/media folder to link it from the main media page.
// Folder name is important, it is the URL path for this page, so it should be descriptive of the content.
const Page = () => {
    return (
        // When Creating a new Page for a media release, you can copy this code and change the content as needed.
        <Wrapper>
            <div className={`flex flex-col gap-y-4`}>
                <Header text={'Online Payment in Sri Lanka'} headerSize={'large'}/>
                <Description
                    text={'WEBXPAY is proud to announce the successful completion of our $5 million Series A funding round—a major milestone that marks the next chapter in our mission to revolutionize digital payments across Sri Lanka and emerging markets.'}/>
            </div>
            <BigImage src={'/media/online-payment-sri-lanka/big.png'}/>
            <div className={`flex flex-col gap-y-4 py-5`}>
                <Header text={'Fueling Growth and Innovation'} headerSize={'small'}/>
                <Description
                    text={'This investment will allow WEBXPAY to scale our technology, expand our team, and introduce new features designed to make digital payments even more accessible and secure. With this fresh capital, we are poised to accelerate our efforts in empowering businesses—large and small—to seamlessly accept payments and manage transactions online.'}/>
            </div>
            <div className={`flex flex-col gap-y-4 py-5`}>
                <Header text={'Backed by Leading Investors'} headerSize={'small'}/>
                <Description
                    text={'The funding round was led by prominent regional and international investors who share our vision for building a cashless, digitally inclusive future. Their support is a testament to the rapid growth of WEBXPAY and our position as a trusted payment solutions provider in the region.'}/>
            </div>
            {/* If reverse = true, the order of the columns will be reversed on mobile view*/}
            <TwoCols reverse={false}>
                <Image alt={'girl-webxpay'} src={'/media/online-payment-sri-lanka/girl.png'} width={1000}
                       height={1000}/>
                <div className={`flex flex-col gap-y-4 py-5`}>
                    <Header text={'What This Means for Our Customers'} headerSize={'small'}/>
                    <Description
                        text={'With the Series A funding, WEBXPAY will:'}/>
                    <BulletPoints
                        points={[
                            'Launch new payment tools: We’re investing in innovative features, including advanced analytics, subscription management, and faster settlement options for merchants.',
                            'Enhance security: Upgrading our infrastructure to offer even higher levels of payment security and fraud prevention.',
                            'Expand our reach: Entering new regional markets and forming strategic partnerships to support more businesses across South Asia.',
                        ]}
                    />

                </div>
            </TwoCols>
            <div className={`flex flex-col gap-y-4 py-5`}>
                <Header text={'A Message from Our CEO'} headerSize={'small'}/>
                <Description
                    text={'“Our mission has always been to make online payments simple, secure, and accessible for everyone,” said [CEO Name], CEO of WEBXPAY. “This funding is not just a validation of our vision—it’s a boost that will help us serve our customers better and reach new heights as a leading fintech company in the region.”'}/>
            </div>
            <div className={`flex flex-col gap-y-4 py-5`}>
                <Header text={'Looking Ahead'} headerSize={'small'}/>
                <Description
                    text={'We’re deeply grateful to our team, partners, and customers who have trusted WEBXPAY on this journey. This is just the beginning. We remain committed to delivering best-in-class digital payment solutions and supporting the growth of businesses everywhere.'}/>
                <Description
                    text={'Stay tuned for exciting product updates and expansion news in the coming months!'}/>
            </div>
            <div className={`flex flex-col gap-y-4 py-5`}>
                <Header text={'About WEBXPAY'} headerSize={'small'}/>
                <Description
                    text={'WEBXPAY is Sri Lanka’s leading digital payment gateway, powering thousands of businesses to accept secure online payments with ease.'}/>
            </div>
        </Wrapper>
    );
};

export default Page;