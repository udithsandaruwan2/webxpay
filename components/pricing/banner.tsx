"use client";

import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className={`min-h-fit relative -top-2 md:top-0 lg:top-0 max-w-screen mx-auto bg-white z-0`}>
      <>
        {/*  Desktop Banner*/}
        <div className={"hidden lg:block relative mx-auto"}>
          <div className={`w-full h-screen top-0 absolute z-20 bg-linear-[60deg,black,transparent_80%,transparent]`}>
            .
          </div>
          <div className={"w-full h-screen top-0 absolute z-10"}>
            <>
              <Image
                src={"/pricing/banner_background.jpg"}
                alt={"Home Header Image"}
                fill
                className={"object-cover object-center w-auto h-full z-10 relative"}
                priority={true}
                quality={85}
              />
            </>
          </div>
          <div
            className={`relative h-screen w-full max-w-7xl mx-auto px-5 pb-20 z-50 text-left flex flex-col gap-y-4 justify-end`}
          >
            <div className={`w-full max-w-5xl flex flex-col gap-y-4`}>
              <h1
                className={
                  "max-w-2xl text-white font-poppins font-semibold text-[39px] xl:text-[61px] leading-[58.5px] xl:leading-[78.5px]"
                }
              >
                Pricing
              </h1>
              <div
                className={
                  "max-w-lg xl:max-w-[630px] text-white font-normal font-sf-pro-display tracking-[0.2px] text-lg leading-[27px]"
                }
              >
                Since 2015, WEBXPAY has been transforming Sri Lanka&apos;s digital payments landscape. Our pricing is
                designed to provide seamless, flexible, and transparent financial solutions tailored specifically for
                businesses and consumers, effortlessly bridging online and offline transactions...
              </div>
            </div>
          </div>
        </div>

        {/*  Mobile Banner*/}
        <div className={"block lg:hidden min-h-max "}>
          <div className={"relative min-h-fit flex flex-col"}>
            <div className={"relative left-0 w-auto h-[450px] sm:h-[560px]"}>
              <Image
                src={"/pricing/banner_background.jpg"}
                alt={"Home Page Banner image"}
                fill
                className={"object-cover"}
                priority={true}
                quality={85}
              />
            </div>

            <div className={"relative flex flex-col text-left mt-6 px-5 bg-white"}>
              <h1
                className={
                  "text-left w-full text-midnight-dreams font-poppins font-semibold text-[39px] leading-[50.7px] py-8"
                }
              >
                Pricing
              </h1>
              <div className={"text-left"}>
                Since 2015, WEBXPAY has been transforming Sri Lanka&apos;s digital payments landscape. Our pricing is
                designed to provide seamless, flexible, and transparent financial solutions tailored specifically for
                businesses and consumers, effortlessly bridging online and offline transactions.
              </div>
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default Banner;
