import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterAutoYear = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`bg-[#202020] w-full p-4`}>
      <div className={`bg-[#22272D] w-full`}>
        <div className={`max-w-7xl mx-auto text-white md:px-5`}>
          <div className={`w-full flex flex-col md:flex-row justify-between pt-2 px-5 md:px-0`}>
            <div className={`w-full md:max-w-sm lg:max-w-md`}>
              <Image
                className={`w-11/12 md:w-8/12 pt-10`}
                src={"/common/logo2.svg"}
                alt={"Home Page Banner image"}
                height={300}
                width={2000}
              />
              <p className={`pt-12 text-[14px] md:max-w-[350px]`}>
                Explore new market segments, reach more customers and expand your business globally with WEBXPAY, your
                digital payment platform.
              </p>
            </div>
            <div className={`flex flex-col md:grid md:grid-cols-3 gap-x-4 lg:gap-x-10 pt-12`}>
              <div className={`md:text-right pb-10`}>
                <h2 className={`text-webxpay-yellow pb-8 text-[18px]`}>Developers</h2>
                <div className={`flex flex-col gap-y-2 text-[16px]`}>
                  <Link href={"https://developers.webxpay.com/"} target="_blank">
                    Developer Kit
                  </Link>
                </div>
              </div>
              <div className={`md:text-right pb-10`}>
                <h2 className={`text-webxpay-yellow pb-8 text-[18px]`}>Support</h2>
                <div className={`flex flex-col gap-y-2 text-[16px]`}>
                  <Link href={"/contact-us"}>Contact Us</Link>
                  {/*<Link href={'#'}>Careers</Link>*/}
                  <Link href={"/media"}>Media</Link>
                  <Link href={"/privacy-policy"}>Privacy Policy</Link>
                </div>
              </div>
              <div className={`md:text-right pb-10`}>
                <h2 className={`text-webxpay-yellow pb-8 text-[18px]`}>Solutions</h2>
                <div className={`flex flex-col gap-y-2 text-[16px]`}>
                  <Link href={"/xgateway"}>XGATEWAY</Link>
                  <Link href={"/xpos"}>XPOS</Link>
                  <Link href={"/solutions#xsplit"}>XSPLIT</Link>
                  <Link href={"/solutions#xsupplier"}>XSUPPLIER</Link>
                  <Link href={"/xsetra"}>XSETRA</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`px-4 md:px-0 md:pt-5`}>
            <hr className={`border-[#7B7D80] w-full`} />
          </div>
          <div className={`w-full flex flex-col md:flex-row justify-between gap-x-4 pt-8 px-5 md:px-0`}>
            <div className={`text-[14px] md:text-center`}>Copyright &copy; {currentYear} WEBXPAY All Rights Reserved..</div>
            <div
              className={`flex flex-row gap-x-6 lg:gap-x-8 items-center justify-start md:justify-between px-0 pt-6 pb-10 md:pt-0 `}
            >
              <Link href={"https://www.facebook.com/webxpay/"} target="_blank" rel="noopener noreferrer">
                <Image src={"/common/social/facebook.svg"} alt={"facebook"} height={24} width={24} />
              </Link>
              <Link href={"https://www.tiktok.com/@webxpay"} target="_blank" rel="noopener noreferrer">
                <Image src={"/common/social/tiktok.svg"} alt={"tiktok"} height={24} width={24} />
              </Link>
              <Link href={"https://www.instagram.com/webxpay/?hl=en"} target="_blank" rel="noopener noreferrer">
                <Image src={"/common/social/instagram.svg"} alt={"instagram"} height={24} width={24} />
              </Link>
              <Link href={"https://www.youtube.com/@webxpay"} target="_blank" rel="noopener noreferrer">
                <Image src={"/common/social/youtube.svg"} alt={"youtube"} height={24} width={24} />
              </Link>
              <Link href={"https://lk.linkedin.com/company/webxpay"} target="_blank" rel="noopener noreferrer">
                <Image src={"/common/social/linkedin.svg"} alt={"linkedin"} height={24} width={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterAutoYear;
