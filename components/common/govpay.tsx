import React from 'react';
import Image from "next/image";
import Link from "next/link";

const circleBaseClassName =
    "h-[72px] w-[72px] md:h-[72px] md:w-[72px] rounded-full cursor-pointer flex items-center justify-center shadow-xs drop-shadow-xs overflow-hidden transition-all duration-300 hover:scale-[1.04] max-md:h-[60px] max-md:w-[60px]";
const billPaymentClassName =
    `${circleBaseClassName} bill-payments-button flex-col bg-white px-2 text-center text-[#1f1f1f] leading-none shadow-[0_10px_24px_rgba(0,0,0,0.10),0_0_0_0_rgba(59,59,59,0.42),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-300 hover:scale-[1.04] hover:bg-white hover:shadow-[0_14px_28px_rgba(0,0,0,0.14),0_0_0_8px_rgba(59,59,59,0)] max-md:px-1`;
const bankTransferClassName =
    `${circleBaseClassName} bank-transfer-button bg-white shadow-[0_10px_24px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.92)] hover:bg-white hover:shadow-[0_14px_28px_rgba(0,0,0,0.14)]`;
const cryptoButtonClassName =
    `${circleBaseClassName} crypto-button bg-white shadow-[0_10px_24px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.92)] hover:bg-white hover:shadow-[0_14px_28px_rgba(0,0,0,0.14)]`;

const Govpay = () => {
    return (
        <div className="floating-icons-stack">
            <Link
                href="https://outpay.webxpay.com/fund-transfer/2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Crypto to LKR Transfer"
                className={cryptoButtonClassName}
            >
                <Image
                    alt="Crypto Transfer"
                    src={'/common/crypto-logo.webp'}
                    width={100}
                    height={58}
                    className="object-contain"
                />
            </Link>
            <Link
                href="https://outpay.webxpay.com/fund-transfer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Bank Transfer"
                className={bankTransferClassName}
            >
                <Image
                    alt={'Bank Transfer'}
                    src={'/common/bank-transfer-icon.png'}
                    width={852}
                    height={329}
                    className="h-auto w-[54px] object-contain max-md:w-[44px]"
                />
            </Link>
            <Link
                href="https://outpay.webxpay.com/bill-payment/create"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Bill Payments"
                className={billPaymentClassName}
            >
                <Image
                    alt={'Bill Payments'}
                    src={'/common/bill-pay-icon.png'}
                    width={1214}
                    height={338}
                    className="h-[12px] w-[40px] object-contain md:h-[16px] md:w-[48px]"
                />
            </Link>
            <Link
                href="https://govpay.webxpay.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GovPay"
                className={`${circleBaseClassName} govpay-button bg-white`}
            >
                <Image
                    alt={'govpay'}
                    src={'/common/govpay.png'}
                    width={58}
                    height={58}
                    className="object-contain"
                />
            </Link>
        </div>
    );
};

export default Govpay;
