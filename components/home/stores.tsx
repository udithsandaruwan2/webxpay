import React from 'react';
import Image from 'next/image';
import { Marquee } from "@/components/ui/marquee";

interface Icon {
    id: number;
    src: string;
    alt: string;
    height: number;
    width: number;
}

const icons: Icon[] = [
    {id: 5, src: '/home/storesSlider/icon_5.png', alt: 'spring and summer', width: 84, height: 51},
    {id: 1, src: '/home/storesSlider/icon_1.png', alt: 'elephant', width: 60, height: 53},
    {id: 2, src: '/home/storesSlider/icon_2.png', alt: 'dilmah', width: 58, height: 54},
    {id: 3, src: '/home/storesSlider/icon_3.png', alt: 'anim8', width: 98, height: 56},
    {id: 6, src: '/home/storesSlider/icon_6.png', alt: 'thilakawardana', width: 100, height: 61},
    {id: 4, src: '/home/storesSlider/icon_4.png', alt: 'esthara', width: 140, height: 50},
    {id: 7, src: '/home/storesSlider/icon_7.png', alt: 'envoy', width: 65, height: 68},
    {id: 8, src: '/home/storesSlider/icon_8.png', alt: 'amante', width: 68, height: 20},
];

const StoresSlider = () => {
    return (
        <section className="overflow-hidden w-full">
            <div className="flex flex-row justify-center items-center mx-auto">
                <div className="relative max-w-screen">
                    <Marquee className="max-w-screen [--duration:40s] bg-webxpay-yellow">
                        {icons.map((icon, idx) => (
                            <Image
                                key={idx}
                                height={icon.height}
                                width={icon.width}
                                src={icon.src}
                                alt={icon.alt}
                                className="object-contain pointer-events-none mr-5 md:mr-10 lg:mr-15 xl:mr-20"
                            />
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default StoresSlider;
