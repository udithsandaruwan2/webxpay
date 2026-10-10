import React from 'react';
import Image from 'next/image';
import bgImage from '@/public/home/productSuite/bg.png';

const ProductSuite = () => {
    return (
        <div className="relative w-full min-h-max">
            <Image
                src={bgImage}
                alt="Product Suite Background"
                fill
                className="object-cover z-0 hidden md:block"
            />
            <div className="absolute inset-0 bg-black/90 md:bg-black/35 "/>
            <div className="relative pt-4 pb-16 md:pb-20 max-w-7xl mx-auto md:px-5">
                <div className={`text-center pt-12 md:pb-2 px-5 md:px-0 pb-10`}>
                    <h1 className={`text-white text-3xl font-bold`}>Our Product Suite</h1>
                    <p className={`text-white max-w-4xl mx-auto pt-5`}>Mix and match our range of products to match your customer needs. No forced bundles—just plug-in and power-up with WEBXPAY.</p>
                </div>
                <div className={`flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-4 items-center justify-between w-full px-10 md:px-0 space-y-6 md:space-y-0 pt-4 pb-12 md:py-12`}>
                    <div className={`bg-webxpay-yellow w-full rounded-3xl h-full`}>
                        <div className={'flex flex-col items-center justify-center p-2 pb-4'}>
                            <Image alt={'xsplit'} src={'/home/productSuite/xsplit.png'} width={1000} height={1000}/>
                            <p className={`w-full text-center pt-4 pb-2 px-1`}>Offer instalments plans so customers can afford bigger purchases, both online and in-store.</p>
                        </div>
                    </div>
                    <div className={`bg-webxpay-yellow w-full rounded-3xl h-full md:mt-24`}>
                        <div className={'flex flex-col items-center justify-center p-2 pb-4'}>
                            <Image alt={'xqr'} src={'/home/productSuite/xqr.png'} width={1000} height={1000}/>
                            <p className={`w-full text-center pt-4 pb-2 px-1`}>Seamless QR payments, bridging LankaQR, UPI, and Alipay+ for local + international convenience.</p>
                        </div>
                    </div>
                    <div className={`bg-webxpay-yellow w-full rounded-3xl h-full md:mt-24`}>
                        <div className={'flex flex-col items-center justify-center p-2 pb-4'}>
                            <Image alt={'xcollector'} src={'/home/productSuite/xcollector.png'} width={1000} height={1000}/>
                            <p className={`w-full text-center pt-4 pb-2 px-1`}>Empower field agents with door-to-door payment acceptance and real-time tracking.</p>
                        </div>
                    </div>
                    <div className={`bg-webxpay-yellow w-full rounded-3xl h-full`}>
                        <div className={'flex flex-col items-center justify-center p-2 pb-4'}>
                            <Image alt={'xsupplier'} src={'/home/productSuite/xsupplier.png'} width={1000} height={1000}/>
                            <p className={`w-full text-center pt-4 pb-2 px-1`}>Extend 50–80 day credit lines to buyers, ensure instant payouts for suppliers—optimizing your supply chain.</p>
                        </div>
                    </div>
                </div>
                <div className={`text-center text-sm mt-4 text-white`}>
                    <p>Plus more..</p>
                </div>
            </div>
        </div>
    );
};

export default ProductSuite;