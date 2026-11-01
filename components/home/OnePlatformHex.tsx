import React from 'react';
import Image from 'next/image';

const OnePlatformHex = () => {
    const iconsList = [
        {id: 1, src: '/home/oneplatform/icon_1.svg', details: 'Global & Local<br/> Payment Methods'},
        {id: 2, src: '/home/oneplatform/icon_2.svg', details: 'Fast T+1<br/> Settlements'},
        {id: 3, src: '/home/oneplatform/icon_3.svg', details: 'ISO 27001 &<br/> PCI DSS'},
        {id: 4, src: '/home/oneplatform/icon_4.svg', details: '24/7 Merchant<br/> Support'},
        {id: 5, src: '/home/oneplatform/icon_5.svg', details: '8+ Local Bank<br/> Partnerships'},
        {id: 6, src: '/home/oneplatform/icon_6.svg', details: 'Developer<br/> Friendly'},
    ]


    return (
        <div className={`max-w-7xl mx-auto pt-20 lg:pt-24 px-5 md:px-0`}>
            <h1 className={`text-center text-[31px] lg:text-4xl font-bold lg:py-10 leading-[40.7px] `}>One
                Platform.
                <br/>
                All the Ways to Get Paid.</h1>
            <p className={`text-center max-w-xl lg:max-w-3xl mx-auto text-base text-[14px] pt-6 lg:pt-0`}>
                WEBXPAY unifies transactions across online and offline touchpoints. From T+1
                settlements to
                developer-friendly integrations, we remove complexity so you can focus on your true strengths—scaling
                your business.</p>
            <div
                className={`w-full grid grid-cols-1 lg:grid-cols-6 gap-x-2 items-center justify-center py-12 lg:max-w-5xl mx-auto`}>
                {iconsList.map((icon) => (
                    <div
                        key={icon.id}
                        className={`flex flex-col gap-y-2 items-center justify-center`}>
                        <div className={`relative h-16 w-16 grid place-items-center md:scale-90`}>
                            <Image
                                className={`absolute`}
                                src="/home/oneplatform/hexagon.svg" alt="Feature icon" width={1000} height={1000}/>
                            <Image
                                className={`z-10`}
                                src={icon.src} alt="Feature icon" width={25} height={25}/>
                        </div>
                        <div className={`block pb-4 lg:hidden text-base/6`}>
                            {icon.details && <p className={`text-center`}
                                                dangerouslySetInnerHTML={{__html: icon.details.replace('<br/>', ' ')}}></p>}
                        </div>
                        <div className={`hidden lg:block text-base/6`}>
                            {icon.details &&
                                <p className={`text-center`} dangerouslySetInnerHTML={{__html: icon.details}}></p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OnePlatformHex;