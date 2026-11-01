"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

type PlacementCoords = {
  imageCoords: {
    x: number | number[] | string;
    y: number | number[] | string;
    rotate: number | number[] | string;
    scale: number | number[] | string;
  };
  textCoords: {
    x: number | number[] | string;
    y: number | number[] | string;
  };
  iconCoords: {
    x: number | number[] | string;
    y: number | number[] | string;
  };
};

const firstList = [
  { id: 1, details: "Accept Major Cards + LankaQR" },
  { id: 2, details: "XSPLIT Compatibility" },
  { id: 3, details: "Real-Time Sync" },
  { id: 4, details: "ISO 27001 Security + PCI DSS" },
];

const secondList = [
  { id: 1, details: "Multi-Currency Acceptance" },
  { id: 2, details: "Built-In Tokenization" },
  { id: 3, details: "Modular Features" },
  { id: 4, details: "Fast T+1 Settlements" },
];

const CoreSolution = () => {
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);
  const [width, setWidth] = useState(1024);

  React.useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Widths: [left, right]
  const getWidths = (hovered: string | null) => {
    if (hovered === "left") return ["98.5%", "1.5%"];
    if (hovered === "right") return ["1.5%", "98.5%"];
    return ["50%", "50%"];
  };

  const [leftWidth, rightWidth] = getWidths(hovered);

  const getCoordsLeft = (hovered: string | null): PlacementCoords => {
    if (hovered === "left")
      return {
        imageCoords: {
          x: 310,
          y: 130,
          rotate: 0,
          scale: 1.6,
        },
        textCoords: {
          x: 500,
          y: 70,
        },
        iconCoords: {
          x: 500,
          y: -40,
        },
      };

    if (hovered === "right")
      return {
        imageCoords: {
          x: 40,
          y: 520,
          rotate: 0,
          scale: 1.5,
        },
        textCoords: {
          x: 0,
          y: 500,
        },
        iconCoords: {
          x: -500,
          y: -40,
        },
      };

    return {
      imageCoords: {
        x: 170,
        y: 135,
        rotate: 0,
        scale: 1.65,
      },
      textCoords: {
        x: 450,
        y: 500,
      },
      iconCoords: {
        x: 20,
        y: -40,
      },
    };
  };

  const getCoordsRight = (hovered: string | null): PlacementCoords => {
    if (hovered === "left")
      return {
        imageCoords: {
          x: 35,
          y: 520,
          rotate: 0,
          scale: 1.61,
        },
        textCoords: {
          x: 0,
          y: 0,
        },
        iconCoords: {
          x: 500,
          y: -60,
        },
      };

    if (hovered === "right")
      return {
        imageCoords: {
          x: 900,
          y: 10,
          rotate: 0,
          scale: 1.1,
        },
        textCoords: {
          x: 50,
          y: 50,
        },
        iconCoords: {
          x: 50,
          y: -60,
        },
      };

    return {
      imageCoords: {
        x: 310,
        y: 125,
        rotate: 0,
        scale: 1.5,
      },
      textCoords: {
        x: -520,
        y: 500,
      },
      iconCoords: {
        x: 20,
        y: -60,
      },
    };
  };

  // top-left, top-right, bottom-right, bottom-left [unga bunga sometimes lol]
  const getLeftBoxRadius = (hovered: string | null) => {
    if (hovered === "right") return "0rem 12px 12px 0rem";
    return "12px";
  };

  const getRightBoxRadius = (hovered: string | null) => {
    if (hovered === "left") return "12px 0rem 0rem 12px";
    return "12px";
  };

  const router = useRouter();

  // mobile (no animations)
  if (width < 768) {
    return (
      <div className={`relative max-w-7xl mx-auto pt-12 pb-28`}>
        <div className={`flex flex-col md:grid md:grid-cols-2 md:space-x-4 mx-4`}>
          <div className={`relative overflow-hidden h-full bg-white md:border-2 md:rounded-lg`}>
            <div className={`flex flex-col justify-between `}>
              <motion.div
                animate={{
                  height: 325,
                }}
                initial={{
                  height: 325,
                }}
                className={`relative w-full overflow-hidden md:overflow-visible`}
              >
                <motion.img
                  animate={{
                    x: 4,
                    y: 65,
                  }}
                  initial={{
                    x: 4,
                    y: 65,
                  }}
                  className={`relative w-full h-auto`}
                  src={"/home/coresolution/xpos.png"}
                  alt="Banner background"
                  width={300}
                  height={300}
                />
              </motion.div>
              <div className={`h-32 space-y-4 pt-4`}>
                <h1 className={`font-extrabold text-[18px]`}>In-Store Reimagined</h1>
                <Image
                  className={`bg-transparent`}
                  src={"/home/coresolution/xpos-icon.svg"}
                  alt="Banner background"
                  width={161}
                  height={50}
                />
              </div>
            </div>
            <p className={`pb-5`}>
              Deliver a modern, high-speed checkout at physical touchpoints—empower your customers to pay by card, QR,
              or even instalments, all on one sleek POS.
            </p>
            <div className={`md:hidden space-y-5 `}>
              {firstList.map((data, index) => (
                <div className={`flex items-center gap-5`} key={index}>
                  <Image
                    alt={`icon_${index}`}
                    src={`/home/coresolution/xpos/icon-${index + 1}.png`}
                    width={36 * 1.14}
                    height={36 * 1.14}
                  />
                  <p className={`font-bold text-[16px]`}>{data.details}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => router.push("/xpos")}
              className={`bg-black text-white px-4 py-2 rounded-full mt-6 cursor-pointer`}
            >
              Discover XPOS
            </button>
          </div>
          <div className={`relative overflow-hidden h-full bg-white md:border-2 md:rounded-lg`}>
            <div className={`flex flex-col justify-between `}>
              <div className={"relative w-full"}>
                <Image
                  src={"/home/coresolution/xgateway.png"}
                  alt="Banner background"
                  className={`md:hidden  w-full h-auto  p-10`}
                  width={600}
                  height={300}
                />
              </div>
              <div className={`h-32 space-y-4 pt-4`}>
                <h1 className={`font-extrabold text-[18px]`}>Online Made Easy</h1>
                <Image
                  src={"/home/coresolution/xgateway-icon.svg"}
                  alt="Banner background"
                  className={`bg-transparent`}
                  width={300}
                  height={50}
                />
              </div>
            </div>
            <p className={`pb-5 `}>
              XGATEWAY powers your e-commerce with broad multi-currency acceptance, seamless integration with FriMi,
              mCash, EzCash, JustPay, and more. Embrace tokenization for returning customers, tap XSPLIT for instalments
              convenience, and unify everything in a single dashboard—no complexity required.
            </p>
            <div className={`md:hidden space-y-5 `}>
              {secondList.map((data, index) => (
                <div className={`flex items-center gap-5`} key={index}>
                  <Image
                    alt={`icon_${index}`}
                    src={`/home/coresolution/xpos/icon-${index + 1}.png`}
                    width={36 * 1.14}
                    height={36 * 1.14}
                  />
                  <p className={`font-bold text-[16px]`}>{data.details}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => router.push("/xgateway")}
              className={`bg-black text-white  px-4 py-2 rounded-full mt-6 cursor-pointer`}
            >
              Explore XGateway
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative max-w-7xl mx-auto mb-4 md:px-5 py-20 lg:py-28`}>
      <div className={`hidden md:block`}>
        <h1 className={`text-left text-4xl font-bold py-8`}>
          Core Solutions
          {/*{hovered && <span className={`text-red-500`}>{hovered}</span>}*/}
        </h1>
      </div>

      <AnimatePresence>
        <div className="flex gap-x-2 w-full h-[450px] overflow-hidden">
          <motion.div
            className="bg-white border-[0.6px] border-webxpay-border-grey/50 relative flex items-center justify-center overflow-hidden"
            animate={{
              width: leftWidth,
              borderRadius: getLeftBoxRadius(hovered),
            }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            onMouseEnter={() => setHovered("left")}
            onMouseLeave={() => setHovered(null)}
          >
            <div className={`absolute w-full`}>
              <motion.div
                animate={{
                  x: getCoordsLeft(hovered).iconCoords.x,
                  y: getCoordsLeft(hovered).iconCoords.y,
                  opacity: hovered === "right" ? 0 : 1,
                }}
                transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                className={`absolute`}
              >
                <p className={`font-semibold pb-2`}>In-Store Reimagined</p>
                <Image
                  alt={"xpos-icon"}
                  className={``}
                  src={"/home/coresolution/xpos-icon.svg"}
                  height={200}
                  width={161}
                />
              </motion.div>
              <motion.div
                animate={{
                  x: getCoordsLeft(hovered).imageCoords.x,
                  y: getCoordsLeft(hovered).imageCoords.y,
                  rotate: getCoordsLeft(hovered).imageCoords.rotate,
                  scale: getCoordsLeft(hovered).imageCoords.scale,
                  opacity: hovered === "right" ? 0 : 1,
                }}
                transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                className={`relative`}
              >
                <Image
                  src={"/home/coresolution/xpos-updated.webp"}
                  alt="Banner background"
                  className={``}
                  width={300}
                  height={300}
                />
              </motion.div>
              <motion.div
                animate={{
                  x: getCoordsLeft(hovered).textCoords.x,
                  y: getCoordsLeft(hovered).textCoords.y,
                  opacity: hovered === "right" ? 0 : 1,
                }}
                transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                className={`absolute left-0 top-0 w-full h-full flex `}
              >
                <div className={`relative p-1 max-w-2xl text-black pr-20`}>
                  <p>
                    Deliver a modern, high-speed checkout at physical touchpoints—empower your customers to pay by card,
                    QR, or even instalments, all on one sleek POS.
                  </p>
                  <div className={`grid grid-cols-2 gap-2 my-10`}>
                    {firstList.map((data, index) => (
                      <div className={`flex items-center gap-2`} key={index}>
                        <Image
                          alt={`icon_${index}`}
                          src={`/home/coresolution/xpos/icon-${index + 1}.png`}
                          width={36 * 1.14}
                          height={36 * 1.14}
                        />
                        {data.details}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => router.push("/xpos")}
                    className={`bg-black text-white px-4 py-2 rounded-full mt-4 cursor-pointer`}
                  >
                    Discover XPOS
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/*======================================================================================================================================*/}

          <motion.div
            className="bg-white border-[0.6px] border-webxpay-border-grey/50 relative flex items-center justify-center overflow-hidden"
            animate={{
              width: rightWidth,
              borderRadius: getRightBoxRadius(hovered),
            }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            onMouseEnter={() => setHovered("right")}
            onMouseLeave={() => setHovered(null)}
          >
            <div className={`absolute w-full`}>
              <motion.div
                animate={{
                  x: getCoordsRight(hovered).iconCoords.x,
                  y: getCoordsRight(hovered).iconCoords.y,
                  opacity: hovered === "left" ? 0 : 1,
                }}
                transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                className={`absolute`}
              >
                <p className={`font-semibold pb-2`}>Online Made Easy</p>
                <Image
                  className={``}
                  alt={"xpos-icon"}
                  src={"/home/coresolution/xgateway-icon.svg"}
                  height={350}
                  width={310}
                />
              </motion.div>
              <motion.div
                animate={{
                  x: getCoordsRight(hovered).imageCoords.x,
                  y: getCoordsRight(hovered).imageCoords.y,
                  rotate: getCoordsRight(hovered).imageCoords.rotate,
                  scale: getCoordsRight(hovered).imageCoords.scale,
                  opacity: hovered === "left" ? 0 : 1,
                }}
                transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                className={`relative`}
              >
                <Image
                  src={"/home/coresolution/xgateway.png"}
                  alt="Banner background"
                  className={``}
                  width={300}
                  height={300}
                />
              </motion.div>
              <motion.div
                animate={{
                  x: getCoordsRight(hovered).textCoords.x,
                  y: getCoordsRight(hovered).textCoords.y,
                  opacity: hovered === "left" ? 0 : 1,
                }}
                transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                className={`absolute left-0 top-0 w-full h-full flex `}
              >
                <div className={`relative max-w-2xl text-black`}>
                  <p>
                    XGATEWAY powers your e-commerce with broad multi-currency acceptance, seamless integration with
                    FriMi, mCash, EzCash, JustPay, and more. Embrace tokenization for returning customers, tap XSPLIT
                    for instalments convenience, and unify everything in a single dashboard—no complexity required.
                  </p>
                  <div className={`grid grid-cols-2 gap-2 my-6`}>
                    {secondList.map((data, index) => (
                      <div className={`flex items-center gap-2`} key={index}>
                        <Image
                          alt={`icon_${index}`}
                          src={`/home/coresolution/xpos/icon-${index + 1}.png`}
                          width={36 * 1.14}
                          height={36 * 1.14}
                        />
                        {data.details}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => router.push("/xgateway")}
                    className={`bg-black text-white px-4 py-2 rounded-full mt-4 cursor-pointer`}
                  >
                    Explore XGateway
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default CoreSolution;
