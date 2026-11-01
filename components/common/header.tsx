"use client";

import React, { useEffect, useState } from "react";
import Solutions from "@/components/common/solutions";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { xGatewayLinks, xPosLinks } from "@/components/common/menuItems";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [solutionsSelected, setSolutionsSelected] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    if (!isSheetOpen) return;
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setSolutionsSelected(false);
        setIsSheetOpen(false);
      }
    };
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, [isSheetOpen]);

  useEffect(() => {
    if (!isSheetOpen) {
      const timer = setTimeout(() => {
        setSolutionsSelected(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isSheetOpen]);

  const router = useRouter();

  const closeSheet = () => {
    setIsSheetOpen(false);
    setSolutionsSelected(false);
  };

  return (
    <div className={`w-full bg-transparent fixed z-50 top-0 p-2`}>
      <div
        className={`hidden lg:flex flex-col border border-webxpay-header-border bg-white/80 backdrop-blur-lg px-6 pt-3 pb-1 rounded-xl mx-auto max-w-7xl gap-y-2`}
      >
        {/* Top Row: Logo & CTA */}
        <div className="flex justify-between items-center w-full">
          <div className="flex-1"></div>
          <div className="flex-1 flex justify-center">
            <Link href={"/"}>
              <Image
                src={"/common/logo.svg"}
                className={`cursor-pointer`}
                alt={"Home Page Banner image"}
                height={30}
                width={200}
              />
            </Link>
          </div>
          <div className="flex-1 flex justify-end gap-x-3">
            <Link
              href="https://signup.webxpay.com/wbx-merchant-signup"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-black text-white rounded-md px-6 py-2 cursor-pointer font-bold text-[14px]`}
            >
              Sign up
            </Link>
            <Link
              href="https://merchant.webxpay.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-webxpay-yellow text-black rounded-md px-6 py-2 cursor-pointer font-bold text-[14px]`}
            >
              Log in
            </Link>
          </div>
        </div>

        {/* Bottom Row: Navigation Links */}
        <div className="flex justify-center w-full border-t border-webxpay-header-border pt-1">
          <Solutions />
        </div>
      </div>
      <div
        className={`lg:hidden items-center flex justify-between flex-row bg-white/80 backdrop-blur-lg pl-4 pr-3 py-3 rounded-xl`}
      >
        <Link href={"/"}>
          <Image src={"/common/logo.svg"} alt={"Home Page Banner image"} height={18} width={100} />
        </Link>
        <Sheet open={isSheetOpen} onOpenChange={(open) => setIsSheetOpen(open)}>
          <SheetTrigger asChild>
            <button className={`bg-black text-white rounded-md px-3 py-2.5`}>
              <Image alt={"menu"} src={"/common/menu.svg"} height={20} width={20} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" isSolutionsSelected={solutionsSelected} goBack={() => setSolutionsSelected(false)}>
            {/*<SheetHeader>*/}
            {/*    <SheetTitle>Edit profile</SheetTitle>*/}
            {/*    <SheetDescription>*/}
            {/*        Make changes to your profile here. Click save when you're done.*/}
            {/*    </SheetDescription>*/}
            {/*</SheetHeader>*/}

            {!solutionsSelected ? (
              <div className={"h-full flex flex-col justify-between"}>
                <div className="grid gap-4 py-4 w-full max-h-[65vh] overflow-y-scroll">
                  <div
                    className={`flex justify-between w-full flex-row border-b border-webxpay-border-grey/20 `}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsSheetOpen(false);
                      router.push("/solutions");
                    }}
                  >
                    <p className={`px-5 pb-6 pt-4`}>Solutions</p>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setSolutionsSelected(true);
                      }}
                      className={`h-full w-1/4 flex items-center justify-center`}
                    >
                      <Image
                        className={`rotate-180 scale-75 relative left-5`}
                        alt={"Close"}
                        src={"/common/back.svg"}
                        height={30}
                        width={30}
                      />
                    </div>
                  </div>
                  <Link
                    href={"/pricing"}
                    onClick={closeSheet}
                    className={`px-5 w-full row border-b border-webxpay-border-grey/20 pb-6 pt-4`}
                  >
                    <p>Pricing</p>
                  </Link>
                  <Link
                    href={"https://developers.webxpay.com/"}
                    onClick={closeSheet}
                    className={`px-5 w-full row border-b border-webxpay-border-grey/20 pb-6 pt-4`}
                  >
                    <p>Developer</p>
                  </Link>
                  <Link
                    href={"/media"}
                    onClick={closeSheet}
                    className={`px-5 w-full row border-b border-webxpay-border-grey/20 pb-6 pt-4`}
                  >
                    <p>Media</p>
                  </Link>
                  <Link
                    href={"/about-us"}
                    onClick={closeSheet}
                    className={`px-5 w-full row border-b border-webxpay-border-grey/20 pb-6 pt-4`}
                  >
                    <p>About us</p>
                  </Link>
                  <Link
                    href={"/careers"}
                    onClick={closeSheet}
                    className={`px-5 w-full row border-b border-webxpay-border-grey/20 pb-6 pt-4`}
                  >
                    <div className="flex flex-col items-start gap-y-1">
                      <span className="hiring-badge w-fit rounded-full bg-webxpay-yellow px-2 py-0.5 text-[10px] font-extrabold leading-none text-black">
                        HIRING
                      </span>
                      <p>Careers</p>
                    </div>
                  </Link>
                </div>
                <SheetFooter className={"fixed md:relative right-0 left-0 bottom-0 z-10 bg-white"}>
                  <div className={"flex flex-col gap-y-2"}>
                    <Link
                      href="https://signup.webxpay.com/wbx-merchant-signup"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeSheet}
                      className={`bg-black text-white rounded-full py-2.5 cursor-pointer text-center`}
                    >
                      Sign up
                    </Link>
                    <Link
                      href="https://merchant.webxpay.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeSheet}
                      className={`bg-webxpay-yellow text-black rounded-full py-2 cursor-pointer text-center`}
                    >
                      Log in
                    </Link>
                  </div>
                </SheetFooter>
              </div>
            ) : (
              <div className={"flex flex-col gap-y-4 h-full max-h-[82vh] overflow-y-scroll"}>
                <div>
                  <p className={`px-5 pb-5 font-semibold text-webxpay-subheading`}>ONLINE</p>
                  <div>
                    {xGatewayLinks.map((link, index) => {
                      return (
                        <div
                          onClick={closeSheet}
                          key={index}
                          className={`flex flex-row justify-start items-center gap-x-4 border-b border-webxpay-border-grey/20`}
                        >
                          <Image
                            className={`${index !== 0 && "invisible"} relative left-5`}
                            alt={""}
                            src={"/common/box.svg"}
                            height={20}
                            width={20}
                          />
                          <div className={`px-5 w-full row  pb-4 pt-4`}>
                            <Link href={link.link}>{link.name}</Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <p className={`px-5 py-5 font-semibold text-webxpay-subheading`}>IN-STORE</p>
                  <div>
                    {xPosLinks.map((link, index) => {
                      return (
                        <div
                          onClick={closeSheet}
                          key={index}
                          className={`flex flex-row justify-start items-center gap-x-4 border-b border-webxpay-border-grey/20`}
                        >
                          <Image
                            className={`${index !== 0 && "invisible"} relative left-5`}
                            alt={""}
                            src={"/common/box.svg"}
                            height={20}
                            width={20}
                          />
                          <div className={`px-5 w-full row  pb-4 pt-4`}>
                            <Link href={link.link}>{link.name}</Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={`h-[220px]`}>
                  <br />
                  <br />
                </div>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;