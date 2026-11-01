import React from "react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CheckIcon = () => {
  return (
    <div className={`h-[20px] w-[20px] grid place-items-center`}>
      <Image src={"/pricing/check.svg"} alt="check icon" width={20} height={20} />
    </div>
  );
};

const CloseIcon = () => {
  return (
    <div className={`h-[20px] w-[20px] grid place-items-center`}>
      <Image src={"/pricing/close.svg"} className={`scale-75`} alt="close icon" width={20} height={20} />
    </div>
  );
};

const Pricing = () => {
  return (
    <div className={`max-w-7xl mx-auto px-5 py-20 lg:pt-24 lg:pb-52`}>
      <div className={`w-full hidden lg:block`}>
        <br />
        <br />
        <h1 className={"font-semibold"}>Packages</h1>
        <div className={`w-[300px] pt-2.5 pb-6 lg:pb-12`}>
          <Image alt={"xgateway"} src={"/pricing/packages/xgateway.svg"} width={600} height={300} />
        </div>

        <div className={`hidden text-sm lg:flex flex-col gap-y-2`}>
          <div className={`grid grid-cols-10 items-center justify-between text-center w-full`}>
            <div className={`col-span-3 p-1 invisible`}>Empty</div>
            <div className={`col-span-7 flex flex-row items-center justify-between text-center space-x-2 pl-2`}>
              <div className={`bg-webxpay-yellow rounded-t-xl p-3 w-full text-xl font-bold`}>Starter</div>
              <div className={`bg-webxpay-yellow rounded-t-xl p-3 w-full text-xl font-bold`}>Economy</div>
              <div className={`bg-webxpay-yellow rounded-t-xl p-3 w-full text-xl font-bold`}>Business</div>
            </div>
          </div>
          <div className={`grid grid-cols-10 items-center justify-between w-full`}>
            <div className={`col-span-3 bg-webxpay-table p-3 flex flex-col space-y-4`}>
              <p className={`font-bold`}>Package Inclusions</p>
              <p>Business-volume Commitment</p>
              <p>Subscription Fee</p>
              {/* <p className={`invisible`}>-</p> */}
              <p>Monthly Payment Limit</p>
              <p>Settlement (LKR)</p>
              <p>Settlement (USD / GBP)</p>
              <p>24/7 Merchant & Tech Support</p>
              <p>Merchant Partner Portal</p>
              <p>Invoicing</p>
              <p>APIs & Plug-Ins</p>
              <p>Tokenization</p>
            </div>
            <div className={`col-span-7 flex flex-row items-center justify-between text-center space-x-2 pl-2`}>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p className={`invisible`}>-</p>
                <p>None</p>
                <p>Rs.10,000 for 12 months</p>
                <p>-</p>
                <p>Unlimited</p>
                <p>T+1 (Next Business Day)</p>
                <p>T+2 (NBD + 1)</p>
                <p>Free</p>
                <CheckIcon />
                <CheckIcon />
                <CloseIcon />
                {/* <CloseIcon /> */}
              </div>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p className={`invisible`}>-</p>
                <p>Rs.10m–25m/month</p>
                <p>Rs.29,940 for 6 months</p>
                <p>Rs.59,880 for 12 months</p>
                <p>Unlimited</p>
                <p>T+1</p>
                <p>T+2</p>
                <p>Free</p>
                <CheckIcon />
                <CheckIcon />
                <CheckIcon />
                {/* <CheckIcon /> */}
              </div>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p className={`invisible`}>-</p>
                <p>&gt; Rs.25m/month</p>
                <p>Rs.53,940 for 6 months</p>
                <p>Rs.107,880 for 12 months</p>
                <p>Unlimited</p>
                <p>T+1</p>
                <p>T+2</p>
                <p>Free</p>
                <CheckIcon />
                <CheckIcon />
                <CheckIcon />
                {/* <CheckIcon /> */}
              </div>
            </div>
          </div>
          <div className={`grid grid-cols-10 items-center justify-between w-full`}>
            <div className={`col-span-3 bg-webxpay-table p-3 flex flex-col space-y-4`}>
              <p className={`font-bold`}>Package Inclusions</p>
              <p className={`invisible`}>-</p>
              <p className={`invisible`}>-</p>
              <p className={`invisible`}>-</p>
              <p className={`invisible`}>-</p>
            </div>
            <div className={`col-span-7 flex flex-row items-center justify-between text-center space-x-2 pl-2`}>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p>XQR</p>
                <p>XPAYLINK</p>
                <p>XSPLIT</p>
                <p className={`invisible`}>-</p>
                <p className={`invisible`}>-</p>
              </div>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p>XQR</p>
                <p>XPAYLINK</p>
                <p>XSPLIT</p>
                <p>XSUPPLIER</p>
                <p className={`invisible`}>-</p>
              </div>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p>XQR</p>
                <p>XPAYLINK</p>
                <p>XSPLIT</p>
                <p>XSUPPLIER</p>
                <p>XCOLLECTOR</p>
              </div>
            </div>
          </div>
          <div className={`grid grid-cols-10 items-center justify-between w-full`}>
            <div className={`col-span-3 bg-webxpay-table p-3 flex flex-col space-y-4`}>
              <p className={`font-bold`}>Card &amp; Wallet Processing Rates</p>
              <p>Visa / Master</p>
              <p>Visa / Master (Foreign)</p>
              <p>Amex</p>
              <p>Tokenization - Visa / Master</p>
              <p>Tokenization - Visa / Master (Foreign)</p>
              <p>Foreign Amex / Discover / Diners Club</p>
              <p>Tokenization - Amex</p>
              <p>Tokenization - Amex (Foreign)</p>
              <p>Discover</p>
              <p>Foreign UnionPay</p>
              <p>Diners Club</p>
              <p>UnionPay</p>
              <p>eZ Cash</p>
              <p>Sampath Vishwa</p>
              <p>mCash</p>
              <p>FriMi</p>
              <p>U Pay</p>
              <p>Alipay+</p>
              <p>LANKAQR</p>
              <p>UPI</p>
              <p>JustPay (Rs.1k–50k)</p>
              <p>JustPay (Rs.250–1k)</p>
              <p>JustPay (Rs.50–250)</p>
              <p>KOKO</p>
              <p>Foreign Google Pay</p>
              <p>Google Pay</p>
              <p>Pinelabs</p>
            </div>
            <div className={`col-span-7 flex flex-row items-center justify-between text-center space-x-2 pl-2`}>
              {/* X-STARTER */}
              <div className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}>
                <p className={`invisible`}>-</p>
                <p>3.80%</p>
                <p>4.85%</p>
                <p>3.99%</p>
                <p>-</p>
                <p>-</p>
                <p>4.85%</p>
                <p>-</p>
                <p>-</p>
                <p>3.99%</p>
                <p>4.85%</p>
                <p>3.99%</p>
                <p>3.80%</p>
                <p>2.65%</p>
                <p>Inactive</p>
                <p>2.65%</p>
                <p>2.65%</p>
                <p>Inactive</p>
                <p>1.80%</p>
                <p>1.00%</p>
                <p>1.80%</p>
                <p>1.90%</p>
                <p>2.50%</p>
                <p>6.00%</p>
                <p>10.00%</p>
                <p>4.85%</p>
                <p>3.80%</p>
                <p>-</p>
              </div>
              {/* X-GATEWAY */}
              <div className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}>
                <p className={`invisible`}>-</p>
                <p>3.10%</p>
                <p>4.85%</p>
                <p>3.75%</p>
                <p>3.75%</p>
                <p>4.85%</p>
                <p>4.85%</p>
                <p>3.75%</p>
                <p>4.85%</p>
                <p>3.75%</p>
                <p>4.85%</p>
                <p>3.75%</p>
                <p>3.20%</p>
                <p>2.65%</p>
                <p>Inactive</p>
                <p>2.65%</p>
                <p>2.65%</p>
                <p>Inactive</p>
                <p>1.80%</p>
                <p>1.00%</p>
                <p>1.80%</p>
                <p>1.90%</p>
                <p>2.50%</p>
                <p>6.00%</p>
                <p>10.00%</p>
                <p>4.85%</p>
                <p>3.10%</p>
                <p>6.00%</p>
              </div>
              {/* X-GATEWAY ENTERPRISE */}
              <div className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}>
                <p className={`invisible`}>-</p>
                <p>2.60%</p>
                <p>4.45%</p>
                <p>3.50%</p>
                <p>3.50%</p>
                <p>4.45%</p>
                <p>4.45%</p>
                <p>3.50%</p>
                <p>4.45%</p>
                <p>3.50%</p>
                <p>4.45%</p>
                <p>3.50%</p>
                <p>2.90%</p>
                <p>2.65%</p>
                <p>Inactive</p>
                <p>2.65%</p>
                <p>2.65%</p>
                <p>Inactive</p>
                <p>1.80%</p>
                <p>1.00%</p>
                <p>1.80%</p>
                <p>1.90%</p>
                <p>2.50%</p>
                <p>6.00%</p>
                <p>10.00%</p>
                <p>4.45%</p>
                <p>2.60%</p>
                <p>6.00%</p>
              </div>
            </div>
          </div>
          <div className={`grid grid-cols-10 items-center justify-between w-full`}>
            <div className={`col-span-3 bg-webxpay-table p-3 grid grid-rows-3`}>
              <p className={`row-span-2`}>Multi-Currency Processing (USD→LKR, USD→USD, GBP→GBP)</p>
              <p>Multi-Currency One-Off Activation Fee</p>
            </div>
            <div className={`col-span-7 flex flex-row items-center justify-between text-center space-x-2 pl-2`}>
              <div className={`bg-webxpay-table p-3 w-full text-center grid grid-rows-3 place-items-center`}>
                <p className={`row-span-2`}>-</p>
                <p>-</p>
              </div>
              <div className={`bg-webxpay-table p-3 w-full text-center grid grid-rows-3 place-items-center`}>
                <p className={`row-span-2`}>4.85%</p>
                <p>Rs.5,000 for USD/GBP Activation</p>
              </div>
              <div className={`bg-webxpay-table p-3 w-full text-center grid grid-rows-3 place-items-center`}>
                <p className={`row-span-2`}>4.85%</p>
                <p>Rs.5,000 for USD/GBP Activation</p>
              </div>
            </div>
          </div>
          <div className={`grid grid-cols-10 items-center justify-between w-full`}>
            <div className={`col-span-3 bg-webxpay-table p-3`}>
              <p>Foreign card rates</p>
            </div>
            <div className={`col-span-7 flex flex-row items-center justify-between text-center space-x-2 pl-2`}>
              <div className={`bg-webxpay-table p-3 w-full text-center`}>
                <p>4.85%</p>
              </div>
              <div className={`bg-webxpay-table p-3 w-full text-center`}>
                <p>4.85%</p>
              </div>
              <div className={`bg-webxpay-table p-3 w-full text-center`}>
                <p>4.45%</p>
              </div>
            </div>
          </div>
          <div className={`grid grid-cols-10 items-center justify-between w-full`}>
            <div className={`col-span-3 bg-webxpay-table p-3 flex flex-col space-y-4`}>
              <p className={`font-bold`}>XSUPPLIER </p>
            </div>
            <div className={`col-span-7 flex flex-row items-center justify-between text-center space-x-2 pl-2`}>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p>-</p>
              </div>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p>2.90%</p>
              </div>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p>2.90%</p>
              </div>
            </div>
          </div>
          <div className={`grid grid-cols-10 items-center justify-between w-full`}>
            <div className={`col-span-3 bg-webxpay-table p-3 grid content-center h-full`}>
              <p className={`font-bold `}>XSPLIT </p>
            </div>
            <div className={`col-span-7 flex flex-row items-center justify-between text-center pl-2`}>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p>
                  XSPLIT Minimum transaction value is Rs, 10,000 with all banks except Rs 25,000 with Commercial Bank.
                  Rates and Tenors are published separately on regular basis*{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <h1 className={"font-semibold"}>Packages</h1>
        <div className={`w-[180px] pt-2.5 pb-6 lg:pb-12`}>
          <Image alt={"xgateway"} src={"/pricing/packages/xpos.svg"} width={600} height={300} />
        </div>

        <div className={`hidden text-sm lg:flex flex-col gap-y-2`}>
          <div className={`grid grid-cols-10 items-center justify-between text-center w-full`}>
            <div className={`col-span-3 p-1 invisible`}>Empty</div>
            <div className={`col-span-7 flex flex-row items-center justify-between text-center space-x-2 pl-2`}>
              <div className={`bg-webxpay-yellow rounded-t-xl p-3 w-full text-xl font-bold`}>Starter</div>
              <div className={`bg-webxpay-yellow rounded-t-xl p-3 w-full text-xl font-bold`}>Economy</div>
              <div className={`bg-webxpay-yellow rounded-t-xl p-3 w-full text-xl font-bold`}>Business</div>
            </div>
          </div>
          <div className={`grid grid-cols-10 items-center justify-between w-full`}>
            <div className={`col-span-3 bg-webxpay-table p-3 flex flex-col space-y-4`}>
              <p className={`font-bold`}>Package Inclusions</p>
              <p>Business-volume Commitment</p>
              {/*<p>Subscription Fee</p>*/}
              {/*<p className={`invisible`}>-</p>*/}
              <p>Settlement (LKR)</p>
              <p>24/7 Merchant & Tech Support</p>
              <p>Merchant Partner Portal</p>
              <p>Installation Fee</p>
            </div>
            <div className={`col-span-7 flex flex-row items-center justify-between text-center space-x-2 pl-2`}>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p className={`invisible`}>-</p>
                <p>None</p>
                {/*<p>Free</p>*/}
                {/*<p className={`invisible`}>-</p>*/}
                <p>T+1</p>
                <p>Free</p>
                <CheckIcon />
                <p>Rs 2,500</p>
              </div>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p className={`invisible`}>-</p>
                <p>Rs.10m–25m/month</p>
                {/*<p>Rs.29,940 for 6 months</p>*/}
                {/*<p>Rs.59,880 for 12 months</p>*/}
                <p>T+1</p>
                <p>Free</p>
                <CheckIcon />
                <p>Rs 2,500</p>
              </div>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p className={`invisible`}>-</p>
                <p>&gt; Rs.25m/month</p>
                {/*<p>Rs.53,940 for 6 months</p>*/}
                {/*<p>Rs.107,880 for 12 months</p>*/}
                <p>T+1</p>
                <p>Free</p>
                <CheckIcon />
                <p>Rs 2,500</p>
              </div>
            </div>
          </div>
          <div className={`grid grid-cols-10 items-center justify-between w-full`}>
            <div className={`col-span-3 bg-webxpay-table p-3 h-full`}>
              <p className={`font-bold`}>Paperless Terminal</p>
            </div>
            <div className={`col-span-7 flex flex-row items-center justify-between text-center space-x-2 pl-2`}>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p>Slip-print on request only</p>
                <p>A fee of Rs. 4,500 will be charged for volumes less than Rs. 500,000 a month </p>
                <p>
                  We generally provide slipless terminals as a green initiative but may occasionally offer slip-printing
                  terminals.
                </p>
              </div>
            </div>
          </div>
          <div className={`grid grid-cols-10 items-center justify-between w-full`}>
            <div className={`col-span-3 bg-webxpay-table p-3 flex flex-col space-y-4`}>
              <p className={`font-bold`}>Transaction Rates </p>
              <p>Visa / Master</p>
              <p>Visa / Master (Foreign)</p>
              <p>Amex</p>
              <p>Amex (Foreign)</p>
              <p>Diners Club</p>
              <p>LANKAQR</p>
              <p>DCC Rate</p>
              <p>UnionPay</p>
              <p>UnionPay (Foreign)</p>
            </div>
            <div className={`col-span-7 flex flex-row items-center justify-between text-center space-x-2 pl-2`}>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p className={`invisible`}>-</p>
                <p>3.00%</p>
                <p>3.90%</p>
                <p>3.90%</p>
                <p>3.90%</p>
                <p>3.90%</p>
                <p>1.00%</p>
                <p>3.00%</p>
                <p>3.80%</p>
                <p>3.90%</p>
              </div>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p className={`invisible`}>-</p>
                <p>2.80%</p>
                <p>3.70%</p>
                <p>3.70%</p>
                <p>3.70%</p>
                <p>3.70%</p>
                <p>1.00%</p>
                <p>2.75%</p>
                <p>3.20%</p>
                <p>3.70%</p>
              </div>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p className={`invisible`}>-</p>
                <p>2.50%</p>
                <p>3.50%</p>
                <p>3.50%</p>
                <p>3.50%</p>
                <p>3.50%</p>
                <p>1.00%</p>
                <p>2.50%</p>
                <p>2.90%</p>
                <p>3.50%</p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <h1 className={"font-semibold"}>Packages</h1>
        <div className={`w-[200px] pt-2.5 pb-6 lg:pb-12`}>
          <Image alt={"xgateway"} src={"/pricing/packages/xsplit.svg"} width={600} height={300} />
        </div>

        <div className={`hidden text-sm lg:flex flex-col gap-y-2`}>
          <div className={`grid grid-cols-12 items-center justify-between text-center w-full`}>
            <div className={`col-span-2 p-1 invisible`}>Empty</div>
            <div className={`col-span-10 flex flex-row items-center justify-between text-center space-x-2 pl-2`}>
              <div className={`bg-webxpay-yellow rounded-t-xl p-3 w-full text-xl font-bold`}>Union Bank</div>
              <div className={`bg-webxpay-yellow rounded-t-xl p-3 w-full text-xl font-bold`}>NDB</div>
              <div className={`bg-webxpay-yellow rounded-t-xl p-3 w-full text-xl font-bold`}>Commercial Bank</div>
              <div className={`bg-webxpay-yellow rounded-t-xl p-3 w-full text-xl font-bold`}>DFCC</div>
              <div className={`bg-webxpay-yellow rounded-t-xl p-3 w-full text-xl font-bold`}>Seylan</div>
            </div>
          </div>
          <div className={`grid grid-cols-12 items-center justify-between w-full`}>
            <div className={`col-span-2 bg-webxpay-table p-3 space-y-4`}>
              <p className={`font-bold`}>Tenor</p>
              <p>3</p>
              <p>6</p>
              <p>9</p>
              <p>12</p>
              <p>15</p>
              <p>18</p>
              <p>24</p>
              <p>36</p>
              <p>48</p>
              <p>60</p>
            </div>
            <div className={`col-span-10 flex flex-row items-center justify-between text-center space-x-2 pl-2`}>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p className={`invisible`}>-</p>
                <p>6.50%</p>
                <p>9.50%</p>
                <p>-</p>
                <p>14.75%</p>
                <p>-</p>
                <p>20.00%</p>
                <p>21.00%</p>
                <p>22.00%</p>
                <p>-</p>
                <p>-</p>
              </div>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p className={`invisible`}>-</p>
                <p>-</p>
                <p>8.00%</p>
                <p>10.00%</p>
                <p>11.00%</p>
                <p>-</p>
                <p>14.00%</p>
                <p>17.00%</p>
                <p>23.00%</p>
                <p>-</p>
                <p>-</p>
              </div>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p className={`invisible`}>-</p>
                <p>5.00%</p>
                <p>6.50%</p>
                <p>-</p>
                <p>9.00%</p>
                <p>-</p>
                <p>14.00%</p>
                <p>18.00%</p>
                <p>-</p>
                <p>-</p>
                <p>-</p>
              </div>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p className={`invisible`}>-</p>
                <p>7.00%</p>
                <p>9.00%</p>
                <p>10.00%</p>
                <p>12.00%</p>
                <p>13.00%</p>
                <p>14.00%</p>
                <p>19.00%</p>
                <p>24.00%</p>
                <p>34.00%</p>
                <p>40.00%</p>
              </div>
              <div
                className={`bg-webxpay-table p-3 w-full flex flex-col items-center justify-between text-center space-y-4`}
              >
                <p className={`invisible`}>-</p>
                <p>-</p>
                <p>7%</p>
                <p>-</p>
                <p>11%</p>
                <p>-</p>
                <p>-</p>
                <p>15%</p>
                <p>-</p>
                <p>-</p>
                <p>-</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className={"lg:hidden w-full font-light"}>
        <div className={`pb-6 lg:pb-12`}>
          <h1 className={"font-semibold pb-[5px] lg:pb-2.5"}>Packages</h1>
          <div className={`w-[200px]`}>
            <Image alt={"xgateway"} src={"/pricing/packages/xgateway.svg"} width={600} height={300} />
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1-1">
            <AccordionTrigger>Starter</AccordionTrigger>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Package Inclusions</h1>
                <p>Business-volume Commitment</p>
                <p className={`font-medium`}>None</p>
                <p>Subscription Fee</p>
                <p className={`font-medium`}>Rs.10,000 for 12 months</p>
                <p>Monthly Payment Limit</p>
                <p className={`font-medium`}>Unlimited</p>
                <p>Settlement (LKR)</p>
                <p className={`font-medium`}>T+1 (Next Business Day)</p>
                <p>Settlement (USD / GBP)</p>
                <p className={`font-medium`}>T+2 (NBD + 1)</p>
                <p>24/7 Merchant & Tech Support</p>
                <p className={`font-medium`}>Free</p>
                <p>Merchant Partner Portal</p>
                <CheckIcon />
                <p>Invoicing</p>
                <CheckIcon />
                <p>APIs & Plug-Ins</p>
                <CloseIcon />
                <p>Tokenization</p>
                <CloseIcon />
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Products Included</h1>
                <p className={`font-medium`}>XQR</p>
                <p className={`font-medium`}>XPAYLINK</p>
                <p className={`font-medium`}>XSPLIT</p>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Card &amp; Wallet Processing Rates</h1>
                <p>Visa / Master</p>
                <p className={`font-medium`}>3.80%</p>
                <p>Visa / Master (Foreign)</p>
                <p className={`font-medium`}>4.85%</p>
                <p>Amex</p>
                <p className={`font-medium`}>3.99%</p>
                <p>Tokenization - Visa / Master</p>
                <p className={`font-medium`}>-</p>
                <p>Tokenization - Visa / Master (Foreign)</p>
                <p className={`font-medium`}>-</p>
                <p>Foreign Amex / Discover / Diners Club</p>
                <p className={`font-medium`}>4.85%</p>
                <p>Tokenization - Amex</p>
                <p className={`font-medium`}>-</p>
                <p>Tokenization - Amex (Foreign)</p>
                <p className={`font-medium`}>-</p>
                <p>Discover</p>
                <p className={`font-medium`}>3.99%</p>
                <p>Foreign UnionPay</p>
                <p className={`font-medium`}>4.85%</p>
                <p>Diners Club</p>
                <p className={`font-medium`}>3.99%</p>
                <p>UnionPay</p>
                <p className={`font-medium`}>3.80%</p>
                <p>eZ Cash</p>
                <p className={`font-medium`}>2.65%</p>
                <p>Sampath Vishwa</p>
                <p className={`font-medium`}>Inactive</p>
                <p>mCash</p>
                <p className={`font-medium`}>2.65%</p>
                <p>FriMi</p>
                <p className={`font-medium`}>2.65%</p>
                <p>U Pay</p>
                <p className={`font-medium`}>Inactive</p>
                <p>Alipay+</p>
                <p className={`font-medium`}>1.80%</p>
                <p>LANKAQR</p>
                <p className={`font-medium`}>1.00%</p>
                <p>UPI</p>
                <p className={`font-medium`}>1.80%</p>
                <p>JustPay (Rs.1k–50k)</p>
                <p className={`font-medium`}>1.90%</p>
                <p>JustPay (Rs.250–1k)</p>
                <p className={`font-medium`}>2.50%</p>
                <p>JustPay (Rs.50–250)</p>
                <p className={`font-medium`}>6.00%</p>
                <p>KOKO</p>
                <p className={`font-medium`}>10.00%</p>
                <p>Foreign Google Pay</p>
                <p className={`font-medium`}>4.85%</p>
                <p>Google Pay</p>
                <p className={`font-medium`}>3.80%</p>
                <p>Pinelabs</p>
                <p className={`font-medium`}>-</p>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <p>Foreign card rates</p>
                <p className={`font-medium`}>4.85%</p>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>XSPLIT </h1>
                <p className={`font-medium`}>
                  XSPLIT Minimum transaction value is Rs, 10,000 with all banks except Rs 25,000 with Commercial Bank.
                  Rates and Tenors are published separately on regular basis*{" "}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1-2">
            <AccordionTrigger>Economy</AccordionTrigger>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Package Inclusions</h1>
                <p>Business-volume Commitment</p>
                <p className={`font-medium`}>None</p>
                <p>Subscription Fee</p>
                <p className={`font-medium`}>Rs.29,940 for 6 months</p>
                <p className={`font-medium`}>Rs.59,880 for 12 months</p>
                <p>Monthly Payment Limit</p>
                <p className={`font-medium`}>Unlimited</p>
                <p>Settlement (LKR)</p>
                <p className={`font-medium`}>T+1</p>
                <p>Settlement (USD / GBP)</p>
                <p className={`font-medium`}>T+2</p>
                <p>24/7 Merchant & Tech Support</p>
                <p className={`font-medium`}>Free</p>
                <p>Merchant Partner Portal</p>
                <CheckIcon />
                <p>Invoicing</p>
                <CheckIcon />
                <p>APIs & Plug-Ins</p>
                <CheckIcon />
                <p>Tokenization</p>
                <CheckIcon />
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Products Included</h1>
                <p className={`font-medium`}>XQR</p>
                <p className={`font-medium`}>XPAYLINK</p>
                <p className={`font-medium`}>XSPLIT</p>
                <p className={`font-medium`}>XSUPPLIER</p>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Card &amp; Wallet Processing Rates</h1>
                <p>Visa / Master</p>
                <p className={`font-medium`}>3.10%</p>
                <p>Visa / Master (Foreign)</p>
                <p className={`font-medium`}>4.85%</p>
                <p>Amex</p>
                <p className={`font-medium`}>3.75%</p>
                <p>Tokenization - Visa / Master</p>
                <p className={`font-medium`}>3.75%</p>
                <p>Tokenization - Visa / Master (Foreign)</p>
                <p className={`font-medium`}>4.85%</p>
                <p>Foreign Amex / Discover / Diners Club</p>
                <p className={`font-medium`}>4.85%</p>
                <p>Tokenization - Amex</p>
                <p className={`font-medium`}>3.75%</p>
                <p>Tokenization - Amex (Foreign)</p>
                <p className={`font-medium`}>4.85%</p>
                <p>Discover</p>
                <p className={`font-medium`}>3.75%</p>
                <p>Foreign UnionPay</p>
                <p className={`font-medium`}>4.85%</p>
                <p>Diners Club</p>
                <p className={`font-medium`}>3.75%</p>
                <p>UnionPay</p>
                <p className={`font-medium`}>3.20%</p>
                <p>eZ Cash</p>
                <p className={`font-medium`}>2.65%</p>
                <p>Sampath Vishwa</p>
                <p className={`font-medium`}>Inactive</p>
                <p>mCash</p>
                <p className={`font-medium`}>2.65%</p>
                <p>FriMi</p>
                <p className={`font-medium`}>2.65%</p>
                <p>U Pay</p>
                <p className={`font-medium`}>Inactive</p>
                <p>Alipay+</p>
                <p className={`font-medium`}>1.80%</p>
                <p>LANKAQR</p>
                <p className={`font-medium`}>1.00%</p>
                <p>UPI</p>
                <p className={`font-medium`}>1.80%</p>
                <p>JustPay (Rs.1k–50k)</p>
                <p className={`font-medium`}>1.90%</p>
                <p>JustPay (Rs.250–1k)</p>
                <p className={`font-medium`}>2.50%</p>
                <p>JustPay (Rs.50–250)</p>
                <p className={`font-medium`}>6.00%</p>
                <p>KOKO</p>
                <p className={`font-medium`}>10.00%</p>
                <p>Foreign Google Pay</p>
                <p className={`font-medium`}>4.85%</p>
                <p>Google Pay</p>
                <p className={`font-medium`}>3.10%</p>
                <p>Pinelabs</p>
                <p className={`font-medium`}>6.00%</p>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <p>Multi-Currency Processing (USD→LKR, USD→USD, GBP→GBP)</p>
                <p className={`font-medium`}>4.85%</p>
                <p>Multi-Currency One-Off Activation Fee</p>
                <p className={`font-medium`}>Rs.5,000 for USD/GBP Activation</p>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <p>Foreign card rates</p>
                <p className={`font-medium`}>4.85%</p>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>XSUPPLIER</h1>
                <p className={`font-medium`}>2.90%</p>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>XSPLIT</h1>
                <p className={`font-medium`}>
                  XSPLIT Minimum transaction value is Rs, 10,000 with all banks except Rs 25,000 with Commercial Bank.
                  Rates and Tenors are published separately on regular basis*{" "}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1-3">
            <AccordionTrigger>Business</AccordionTrigger>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Package Inclusions</h1>
                <p>Business-volume Commitment</p>
                <p className={`font-medium`}>None</p>
                <p>Subscription Fee</p>
                <p className={`font-medium`}>Rs.53,940 for 6 months</p>
                <p className={`font-medium`}>Rs.107,880 for 12 months</p>
                <p>Monthly Payment Limit</p>
                <p className={`font-medium`}>Unlimited</p>
                <p>Settlement (LKR)</p>
                <p className={`font-medium`}>T+1</p>
                <p>Settlement (USD / GBP)</p>
                <p className={`font-medium`}>T+2</p>
                <p>24/7 Merchant & Tech Support</p>
                <p className={`font-medium`}>Free</p>
                <p>Merchant Partner Portal</p>
                <CheckIcon />
                <p>Invoicing</p>
                <CheckIcon />
                <p>APIs & Plug-Ins</p>
                <CheckIcon />
                <p>Tokenization</p>
                <CheckIcon />
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Products Included</h1>
                <p className={`font-medium`}>XQR</p>
                <p className={`font-medium`}>XPAYLINK</p>
                <p className={`font-medium`}>XSPLIT</p>
                <p className={`font-medium`}>XSUPPLIER</p>
                <p className={`font-medium`}>XCOLLECTOR</p>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Card &amp; Wallet Processing Rates</h1>
                <p>Visa / Master</p>
                <p className={`font-medium`}>2.60%</p>
                <p>Visa / Master (Foreign)</p>
                <p className={`font-medium`}>4.45%</p>
                <p>Amex</p>
                <p className={`font-medium`}>3.50%</p>
                <p>Tokenization - Visa / Master</p>
                <p className={`font-medium`}>3.50%</p>
                <p>Tokenization - Visa / Master (Foreign)</p>
                <p className={`font-medium`}>4.45%</p>
                <p>Foreign Amex / Discover / Diners Club</p>
                <p className={`font-medium`}>4.45%</p>
                <p>Tokenization - Amex</p>
                <p className={`font-medium`}>3.50%</p>
                <p>Tokenization - Amex (Foreign)</p>
                <p className={`font-medium`}>4.45%</p>
                <p>Discover</p>
                <p className={`font-medium`}>3.50%</p>
                <p>Foreign UnionPay</p>
                <p className={`font-medium`}>4.45%</p>
                <p>Diners Club</p>
                <p className={`font-medium`}>3.50%</p>
                <p>UnionPay</p>
                <p className={`font-medium`}>2.90%</p>
                <p>eZ Cash</p>
                <p className={`font-medium`}>2.65%</p>
                <p>Sampath Vishwa</p>
                <p className={`font-medium`}>Inactive</p>
                <p>mCash</p>
                <p className={`font-medium`}>2.65%</p>
                <p>FriMi</p>
                <p className={`font-medium`}>2.65%</p>
                <p>U Pay</p>
                <p className={`font-medium`}>Inactive</p>
                <p>Alipay+</p>
                <p className={`font-medium`}>1.80%</p>
                <p>LANKAQR</p>
                <p className={`font-medium`}>1.00%</p>
                <p>UPI</p>
                <p className={`font-medium`}>1.80%</p>
                <p>JustPay (Rs.1k–50k)</p>
                <p className={`font-medium`}>1.90%</p>
                <p>JustPay (Rs.250–1k)</p>
                <p className={`font-medium`}>2.50%</p>
                <p>JustPay (Rs.50–250)</p>
                <p className={`font-medium`}>6.00%</p>
                <p>KOKO</p>
                <p className={`font-medium`}>10.00%</p>
                <p>Foreign Google Pay</p>
                <p className={`font-medium`}>4.45%</p>
                <p>Google Pay</p>
                <p className={`font-medium`}>2.60%</p>
                <p>Pinelabs</p>
                <p className={`font-medium`}>6.00%</p>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <p>Multi-Currency Processing (USD→LKR, USD→USD, GBP→GBP)</p>
                <p className={`font-medium`}>4.85%</p>
                <p>Multi-Currency One-Off Activation Fee</p>
                <p className={`font-medium`}>Rs.5,000 for USD/GBP Activation</p>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <p>Foreign card rates</p>
                <p className={`font-medium`}>4.45%</p>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>XSUPPLIER</h1>
                <p className={`font-medium`}>2.90%</p>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>XSPLIT</h1>
                <p className={`font-medium`}>
                  XSPLIT Minimum transaction value is Rs, 10,000 with all banks except Rs 25,000 with Commercial Bank.
                  Rates and Tenors are published separately on regular basis*{" "}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className={"lg:hidden w-full pt-2"}>
        <div className={`pb-6 lg:pb-12`}>
          <h1 className={"font-semibold pb-[5px] lg:pb-2.5"}>Packages</h1>
          <div className={`w-[110px]`}>
            <Image alt={"xgateway"} src={"/pricing/packages/xpos.svg"} width={600} height={300} />
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-2-1">
            <AccordionTrigger>Starter</AccordionTrigger>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Package Inclusions</h1>
                <p>Business-volume Commitment</p>
                <p className={`font-medium`}>None</p>
                {/*<p>Subscription Fee</p>*/}
                {/*<p className={`font-medium`}>Free</p>*/}
                <p>Settlement (LKR)</p>
                <p className={`font-medium`}>T+1 (Next Business Day)</p>
                <p>24/7 Merchant & Tech Support</p>
                <p className={`font-medium`}>Free</p>
                <p>Merchant Partner Portal</p>
                <CheckIcon />
                <p>Installation Fee</p>
                <p className={`font-medium`}>Rs 2,500</p>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Paperless Terminal</h1>
                <p className={`font-medium`}>Slip-print on request only</p>
                <p className={`font-medium`}>
                  A fee of Rs. 4,500 will be charged for volumes less than Rs. 500,000 a month{" "}
                </p>
                <p className={`font-medium`}>
                  We generally provide slipless terminals as a green initiative but may occasionally offer slip-printing
                  terminals.
                </p>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Card &amp; Wallet Processing Rates </h1>
                <p>Visa / Master</p>
                <p className={`font-medium`}>3.00%</p>
                <p>Visa / Master (Foreign)</p>
                <p className={`font-medium`}>3.90%</p>
                <p>Amex</p>
                <p className={`font-medium`}>3.90%</p>
                <p>Amex (Foreign)</p>
                <p className={`font-medium`}>3.90%</p>
                <p>Diners Club</p>
                <p className={`font-medium`}>3.90%</p>
                <p>LANKAQR</p>
                <p className={`font-medium`}>1.00%</p>
                <p>DCC Rate</p>
                <p className={`font-medium`}>3.00%</p>
                <p>UnionPay</p>
                <p className={`font-medium`}>3.80%</p>
                <p>UnionPay (Foreign)</p>
                <p className={`font-medium`}>3.90%</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2-2">
            <AccordionTrigger>Economy</AccordionTrigger>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Package Inclusions</h1>
                <p>Business-volume Commitment</p>
                <p className={`font-medium`}>Rs.10m–25m/month</p>
                {/*<p>Subscription Fee</p>*/}
                {/*<p className={`font-medium`}>Rs.29,940 for 6 months</p>*/}
                {/*<p className={`font-medium`}>Rs.59,880 for 12 months</p>*/}
                <p>Settlement (LKR)</p>
                <p className={`font-medium`}>T+1</p>
                <p>24/7 Merchant & Tech Support</p>
                <p className={`font-medium`}>Free</p>
                <p>Merchant Partner Portal</p>
                <CheckIcon />
                <p>Installation Fee</p>
                <p className={`font-medium`}>Rs 2,500</p>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Paperless Terminal</h1>
                <p className={`font-medium`}>Slip-print on request only</p>
                <p className={`font-medium`}>
                  A fee of Rs. 4,500 will be charged for volumes less than Rs. 500,000 a month{" "}
                </p>
                <p className={`font-medium`}>
                  We generally provide slipless terminals as a green initiative but may occasionally offer slip-printing
                  terminals.
                </p>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Card &amp; Wallet Processing Rates </h1>
                <p>Visa / Master</p>
                <p className={`font-medium`}>2.80%</p>
                <p>Visa / Master (Foreign)</p>
                <p className={`font-medium`}>3.70%</p>
                <p>Amex</p>
                <p className={`font-medium`}>3.70%</p>
                <p>Amex (Foreign)</p>
                <p className={`font-medium`}>3.70%</p>
                <p>Diners Club</p>
                <p className={`font-medium`}>3.70%</p>
                <p>LANKAQR</p>
                <p className={`font-medium`}>1.00%</p>
                <p>DCC Rate</p>
                <p className={`font-medium`}>2.75%</p>
                <p>UnionPay</p>
                <p className={`font-medium`}>3.20%</p>
                <p>UnionPay (Foreign)</p>
                <p className={`font-medium`}>3.70%</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2-3">
            <AccordionTrigger>Business</AccordionTrigger>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Package Inclusions</h1>
                <p>Business-volume Commitment</p>
                <p className={`font-medium`}>&gt; Rs.25m/month</p>
                {/*<p>Subscription Fee</p>*/}
                {/*<p className={`font-medium`}>Rs.29,940 for 6 months</p>*/}
                {/*<p className={`font-medium`}>Rs.59,880 for 12 months</p>*/}
                <p>Settlement (LKR)</p>
                <p className={`font-medium`}>T+1</p>
                <p>24/7 Merchant & Tech Support</p>
                <p className={`font-medium`}>Free</p>
                <p>Merchant Partner Portal</p>
                <CheckIcon />
                <p>Installation Fee</p>
                <p className={`font-medium`}>Rs 2,500</p>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Paperless Terminal</h1>
                <p className={`font-medium`}>Slip-print on request only</p>
                <p className={`font-medium`}>
                  A fee of Rs. 4,500 will be charged for volumes less than Rs. 500,000 a month{" "}
                </p>
                <p className={`font-medium`}>
                  We generally provide slipless terminals as a green initiative but may occasionally offer slip-printing
                  terminals.
                </p>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className={`flex flex-col items-center justify-center text-center space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Card &amp; Wallet Processing Rates </h1>
                <p>Visa / Master</p>
                <p className={`font-medium`}>2.50%</p>
                <p>Visa / Master (Foreign)</p>
                <p className={`font-medium`}>3.50%</p>
                <p>Amex</p>
                <p className={`font-medium`}>3.50%</p>
                <p>Amex (Foreign)</p>
                <p className={`font-medium`}>3.50%</p>
                <p>Diners Club</p>
                <p className={`font-medium`}>3.50%</p>
                <p>LANKAQR</p>
                <p className={`font-medium`}>1.00%</p>
                <p>DCC Rate</p>
                <p className={`font-medium`}>2.50%</p>
                <p>UnionPay</p>
                <p className={`font-medium`}>2.90%</p>
                <p>UnionPay (Foreign)</p>
                <p className={`font-medium`}>3.50%</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className={"lg:hidden w-full pt-2 font-[16px]"}>
        <div className={`pb-6 lg:pb-12`}>
          <h1 className={"font-semibold pb-[5px] lg:pb-2.5"}>Packages</h1>
          <div className={`w-[120px]`}>
            <Image alt={"xgateway"} src={"/pricing/packages/xsplit.svg"} width={600} height={300} />
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-3-1">
            <AccordionTrigger>Union Bank</AccordionTrigger>
            <AccordionContent>
              <div className={`flex flex-col text-left space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Tenor </h1>
                <div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>3</p>
                    <div className={`col-span-2 text-center`}>6.50%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>6</p>
                    <div className={`col-span-2 text-center`}>9.50%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>9</p>
                    <div className={`col-span-2 text-center`}>-</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>12</p>
                    <div className={`col-span-2 text-center`}>14.75%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>15</p>
                    <div className={`col-span-2 text-center`}>-</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>18</p>
                    <div className={`col-span-2 text-center`}>20.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>24</p>
                    <div className={`col-span-2 text-center`}>21.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>36</p>
                    <div className={`col-span-2 text-center`}>22.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>48</p>
                    <div className={`col-span-2 text-center`}>-</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>60</p>
                    <div className={`col-span-2 text-center`}>-</div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3-2">
            <AccordionTrigger>NDB</AccordionTrigger>
            <AccordionContent>
              <div className={`flex flex-col text-left space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Tenor </h1>
                <div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>3</p>
                    <div className={`col-span-2 text-center`}>-</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>6</p>
                    <div className={`col-span-2 text-center`}>8.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>9</p>
                    <div className={`col-span-2 text-center`}>10.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>12</p>
                    <div className={`col-span-2 text-center`}>11.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>15</p>
                    <div className={`col-span-2 text-center`}>-</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>18</p>
                    <div className={`col-span-2 text-center`}>14.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>24</p>
                    <div className={`col-span-2 text-center`}>17.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>36</p>
                    <div className={`col-span-2 text-center`}>23.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>48</p>
                    <div className={`col-span-2 text-center`}>-</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>60</p>
                    <div className={`col-span-2 text-center`}>-</div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3-3">
            <AccordionTrigger>Commercial Bank</AccordionTrigger>
            <AccordionContent>
              <div className={`flex flex-col text-left space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Tenor </h1>
                <div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>3</p>
                    <div className={`col-span-2 text-center`}>5.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>6</p>
                    <div className={`col-span-2 text-center`}>6.50%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>9</p>
                    <div className={`col-span-2 text-center`}>-</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>12</p>
                    <div className={`col-span-2 text-center`}>9.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>15</p>
                    <div className={`col-span-2 text-center`}>-</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>18</p>
                    <div className={`col-span-2 text-center`}>14.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>24</p>
                    <div className={`col-span-2 text-center`}>18.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>36</p>
                    <div className={`col-span-2 text-center`}>-</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>48</p>
                    <div className={`col-span-2 text-center`}>-</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>60</p>
                    <div className={`col-span-2 text-center`}>-</div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3-4">
            <AccordionTrigger>DFCC</AccordionTrigger>
            <AccordionContent>
              <div className={`flex flex-col text-left space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Tenor </h1>
                <div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>3</p>
                    <div className={`col-span-2 text-center`}>7.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>6</p>
                    <div className={`col-span-2 text-center`}>9.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>9</p>
                    <div className={`col-span-2 text-center`}>10.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>12</p>
                    <div className={`col-span-2 text-center`}>12.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>15</p>
                    <div className={`col-span-2 text-center`}>13.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>18</p>
                    <div className={`col-span-2 text-center`}>14.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>24</p>
                    <div className={`col-span-2 text-center`}>19.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>36</p>
                    <div className={`col-span-2 text-center`}>24.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>48</p>
                    <div className={`col-span-2 text-center`}>34.00%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>60</p>
                    <div className={`col-span-2 text-center`}>40.00%</div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3-5">
            <AccordionTrigger>Seylan</AccordionTrigger>
            <AccordionContent>
              <div className={`flex flex-col text-left space-y-4`}>
                <h1 className={`font-bold text-[16px]`}>Tenor </h1>
                <div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>3</p>
                    <div className={`col-span-2 text-center`}>-</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>6</p>
                    <div className={`col-span-2 text-center`}>7%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>9</p>
                    <div className={`col-span-2 text-center`}>-</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>12</p>
                    <div className={`col-span-2 text-center`}>11%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>15</p>
                    <div className={`col-span-2 text-center`}>-</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>18</p>
                    <div className={`col-span-2 text-center`}>-</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>24</p>
                    <div className={`col-span-2 text-center`}>15%</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>36</p>
                    <div className={`col-span-2 text-center`}>-</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>48</p>
                    <div className={`col-span-2 text-center`}>-</div>
                  </div>
                  <div className={`grid grid-cols-3 `}>
                    <p className={``}>60</p>
                    <div className={`col-span-2 text-center`}>-</div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Pricing;
