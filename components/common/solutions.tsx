"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { xGatewayLinks, xPosLinks } from "@/components/common/menuItems";
import { useRouter } from "next/navigation";

const Solutions = () => {
  const router = useRouter();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`cursor-pointer`}
            onClick={() => {
              router.push("/solutions");
            }}
          >
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex flex-col w-[230px] py-3 px-5">
              <div className={`pb-2`}>
                <h1 className={`text-webxpay-header-solutions-header pb-3 text-[14px] font-bold`}>ONLINE</h1>
                <h2 className={`text-webxpay-header-solutions-subheader pb-3 text-[14px] font-bold`}>XGATEWAY</h2>
                <div className={`w-full grid grid-cols-2 gap-2.5 `}>
                  {xGatewayLinks.map((item, index) => (
                    <Link href={item.link} key={index}>
                      <h3 className={`text-webxpay-header-solutions-subheader text-[11px] font-medium`}>{item.name}</h3>
                    </Link>
                  ))}
                </div>
              </div>
              <div className={`pt-5`}>
                <h1 className={`text-webxpay-header-solutions-header pb-3 text-[14px] font-bold`}>IN-STORE</h1>
                <h2 className={`text-webxpay-header-solutions-subheader pb-3 text-[14px] font-bold`}>XPOS</h2>
                <div className={`w-full grid grid-cols-2 gap-2.5`}>
                  {xPosLinks.map((item, index) => (
                    <Link href={item.link} key={index}>
                      <h3 className={`text-webxpay-header-solutions-subheader text-[11px] font-medium`}>{item.name}</h3>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="/pricing" className={navigationMenuTriggerStyle()}>
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="https://developers.webxpay.com/"
            target={"_blank"}
            className={navigationMenuTriggerStyle()}
          >
            Developer
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="/media" className={navigationMenuTriggerStyle()}>
            Media
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="/about-us" className={navigationMenuTriggerStyle()}>
            About us
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="flex items-center">
          <NavigationMenuLink
            href="/careers"
            className={cn(navigationMenuTriggerStyle(), "text-black")}
          >
            <span className="relative inline-flex items-center">
              Careers
              <span className="hiring-badge absolute -right-2 -top-[10px] rounded-full bg-webxpay-yellow px-2 py-0.5 text-[10px] font-extrabold leading-none text-black">
                HIRING
              </span>
            </span>
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default Solutions;
