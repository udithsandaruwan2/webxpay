import React from 'react';
import Header from "@/components/common/header";
import Footer from "@/components/common/footerAutoYear";
import Link from 'next/link';

const P = ({text}: { text: string }) => {
    return <p className={`text-[14px] md:text-[16px] font-normal`}>
        {text}
    </p>
}

const Page = () => {
    return (
        <div>
            <Header/>
            <div className={`h-[100px] md:h-[160px]`}></div>
            <div className={`max-w-7xl mx-auto p-5`}>
                {/*700 31 700 56*/}
                <h1 className={'text-[31px] font-bold md:text-[56px] md:font-bold'}>Privacy Policy</h1>
                {/*600 16 600 22*/}
                <p className={`text-[16px] md:text-[22px] font-semibold mt-4`}>WEBXPAY (Pvt) Ltd is committed to
                    protecting your privacy. We believe that transparency in how we collect and use information helps
                    you make informed decisions about using our website.</p>
                <br/>
                <br/>
                <br/>
                <P text={'We, WEBXPAY (Pvt) Ltd are committed to respecting and protecting your privacy. We believe that honesty and transparency in how we collect information and its use will allow you to make an informed decision regarding your continued use of our website.'}/>
                <br/>
                <P text={'This Policy applies only to the WEBXPAY (Pvt) Ltd website (“Website”) and not to other websites to which we provide links. Please do read the privacy policy of such other websites if you should choose to access such a link.'}/>
                <br/>
                <br/>
                <P text={'Our collection and use of your personal information is with the objective of providing you with a more relevant personalized service that meets your individual preferences and needs. By using the Website you indicate your consent to the collection and use of such information in accordance with the following Privacy Policy.'}/>
                <P text={'You can use our Website without divulging any personally identifiable information including your email address. Our Website does not collect personally identifiable information about individuals except when such individuals specifically provide such information on a voluntary basis, such as when requesting a brochure, making an enquiry, signing up for our newsletter, booking a service, or contacting us for more information. We use such information collected to provide the information or services you request, to improve and customize the content you see, and to contact you about special promotions and new products if requested.'}/>
                <br/>
                <p className={`text-[14px] md:text-[16px] font-bold`}>
                    The personal information we collect includes the following:
                </p>
                <br/>
                <ul className={`text-[14px] md:text-[16px] font-normal list-disc pl-5 mt-2`}>
                    <li>dentifying information such as your name, addresses, telephone numbers, nationality (country) or
                        email addresses when you register for an account or service with us or make an enquiry with us
                    </li>
                    <li>Transaction related information when you purchase services from us</li>
                    <li>Other content that you generate, or that is connected to your account</li>
                    <li>Financial information (such as credit card or bank account numbers) in connection with a
                        transaction
                    </li>
                    <li>In some instances, when you use our services, you may provide age, gender, interests and
                        favorites
                    </li>
                    <li> You may also provide us other information through a web form, by updating or adding information
                        to your account or enquiry, through your participation in discussions, chats, dispute
                        resolution, or when you otherwise correspond with us regarding our services Like many site
                        operators, we collect information that your browser sends whenever you visit our Site (“Log
                        Data”).
                    </li>
                </ul>
                <br/>
                <P text={`This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics. Log Data is collected via cookies which are small files of letters and numbers that are downloaded onto your computer or mobile or other handheld device when you access our website. Cookies allow a website to recognize a user’s device and help your browser navigate through the website by remembering settings you selected during earlier visits (amongst other functions). Unless you have adjusted your browser settings so that it will refuse Cookies, Cookies will be set when you access this website. By using and browsing this website, you consent to Cookies being used in accordance with this Cookie Policy. If you do not consent, you must either disable Cookies or refrain from using this website. However please note that if you do this you may not be able to use the full functionality of this website.`}/>
                <br/>
                <P text={'You can choose to accept or decline cookies from your device. Most web browsers automatically accept cookies, but you can modify the browser settings on your device to decline cookies as follows:'}/>
                <br/>
                <p className={`text-[14px] md:text-[16px] font-bold`}>
                    The personal information we collect includes the following:
                </p>
                <br/>
                {/*list dash (-)*/}
                <ul className={`text-[14px] md:text-[16px] font-normal list-none`}>
                    <li>
                        - <Link
                        href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                    >
                        Cookie settings in Internet Explorer
                    </Link>
                    </li>
                    <li>
                        - <Link
                        href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                    >
                        Cookie settings in Firefox
                    </Link>
                    </li>
                    <li>
                        - <Link
                        href="https://support.google.com/chrome/answer/95647"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                    >
                        Cookie settings in Chrome
                    </Link>
                    </li>
                    <li>
                        - <Link
                        href="https://support.apple.com/en-us/HT201265"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                    >
                        Cookie settings in Safari
                    </Link>
                    </li>
                    <li>
                        - <Link
                        href="https://support.apple.com/en-us/102725"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                    >
                        Cookie settings in Safari for iOS (iPhone / iPad)
                    </Link>
                    </li>

                    <li>- For other browsers, check with your provider to find out how to disable cookies</li>
                </ul>
                <br/>
                <p className={`text-[14px] md:text-[16px] font-bold`}>
                    Google Analytics Advertising Features
                </p>
                <br/>
                <P text={`This website uses Google Analytics, a web analytics advertising service provided by Google, Inc. (“Google”). This is to enable us to obtain information on user preferences and customer profiling to be used for product development and marketing activities of WEBXPAY (Pvt) Ltd and its affiliated companies.`}/>
                <P text={`Google advertising cookies and identifiers are used in the following manner`}/>
                <P text={`i. Google’s Analytics Advertising Features used on the website are ‘Remarketing with Analytics’, ‘Demographics and Interests Reporting’ and ‘Segments’, all of which are products provided by Google under contract.`}/>
                <P text={`ii. These products, as in other cookies, operate by storing and accessing cookies on the devices of the user to collect data.`}/>
                <P text={`iii. These do not collect any personal information nor any information capable of identifying a user. Google reports derived from these products are always aggregated data and never the data of a particular user.`}/>
                <br/>
                <P text={`You may prevent the collection of the information generated by the cookie about your use of the website (including your IP address) and the processing of this data by Google if you download and install the browser plug-in available at the following:`}/>
                <Link
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline text-[14px] md:text-[16px]"
                >
                    https://tools.google.com/dlpage/gaoptout
                </Link>
                <br/>
                <br/>
                <P text={`Facebook Plug-in This Website has social plugins to Facebook which may use cookies, web beacons, and other storage technologies to collect or receive information about visitors to our Website. The data collected is used by Facebook to provide measurement services and target ads. If you are a Facebook user, and you are logged onto Facebook at the moment you visit this Website, Facebook may be able to connect the visit on the Website to your Facebook account. If you interact with the plugin – for example if you press the like button or comment on something – the browser will transmit this information to Facebook. If a user is not a member of Facebook, Facebook may collect and store the user’s IP-address.`}/>
                <P text={`The reason for and scope of the data acquisition and information about the way in which the data is processed and used by Facebook, as well as the user’s rights in this respect and settings options for protecting the users privacy can be found under: https://www.facebook.com/policy.php. Facebook does not permit access to user accounts or share personal information with us at any time.`}/>
                <P text={`If you are a member of Facebook and do not wish Facebook to collect personal data via this homepage and to link this with your data stored on Facebook, please log off from Facebook before visiting this website. You may also block Facebook’s plugins using add-ons for the user’s browser, for example the “Facebook Blocker”.`}/>
                <br/>
                <P text={`Disclosure We may disclose your personal information to other members of our corporate family including affiliate and parent company and to third parties as may be required for us to provide and to provide you access to, our services, to improve your experience with us, to comply with our legal obligations and to facilitate our marketing and advertising activities. We minimize the amount of personal information we disclose to what is directly relevant and necessary to accomplish the specified purpose. We will disclose only information necessary for service providers. We may disclose your personal information to third party financial services providers who facilitate payment processing services on this Website in order to provide you with online payment options. We will release your personal information to law enforcement or governmental agencies or under order of court in response to a verified request relating to a criminal investigation or alleged or suspected illegal activity or any other activity that may expose us, you, or any other of our users to legal liability. This includes the customs department, immigration and emigration department, airport and aviation authorities amongst others.`}/>
                <br/>
                <P text={`Protection We protect your information using technical and administrative security measures to reduce the risks of loss, misuse, unauthorized access, disclosure and alteration. Some of the safeguards we use are firewalls and data encryption, access controls, and information access authorization controls. Please note that transmission of information by electronic means (i.e internet/web-based transmission) is not completely secure though we will adopt reasonable measures for the security of all communications and the content thereof. Hence all transmission is and must necessarily be at the risk of the user.`}/>
                <br/>
                <P text={`Data Deletion Amendment and Other Information If you require further information or wish to amend or delete your data stored with us, or in the event you believe your account has been abused, please contact us following the instructions in the Contact Us section below.`}/>
                <br/>
                <p className={`text-[14px] md:text-[16px] font-bold`}>
                    Contact Us
                </p>
                <P text={`Company Name: WEBXPAY (Pvt) Ltd.`}/>
                <P text={`Company Registration Number: PV – 110334`}/>
                <P text={`Address: 5th Floor, 46/46, Navam Mawatha Colombo 2. Sri Lanka`}/>
                <P text={`Tel: +94117441900`}/>
                <P text={`Email: info@webxpay.com`}/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            <Footer/>
        </div>
    );
};

export default Page;
