"use client";

import React, {useEffect, useState} from 'react';
import pressData from "@/app/media/pressData";
import {usePathname} from "next/navigation";
import LatestSingle, {PressProps} from "@/components/press/latestSingle";

const MoreWebxpayPress = () => {
    const [otherPressData, setOtherPressData] = useState<PressProps[]>([]);
    const [noOtherPress, setNoOtherPress] = useState<boolean>(false);

    const location = usePathname();
    useEffect(() => {
        // Get the last part of the URL path
        let lastPart = location.split('/').pop();
        if (!lastPart) return;

        lastPart = `/media/${lastPart}`

        // Find the corresponding media item
        const pressItem = pressData.find(item => item.url === lastPart);

        let availableItems: PressProps[] = [];

        if (!pressItem) {
            // Skip first 2 items, get remaining items
            availableItems = pressData.slice(2);
        } else {
            // Filter out the current media item from the data
            const filteredData = pressData.filter(item => item.url !== lastPart);
            // Skip first 2 items from filtered data
            availableItems = filteredData.slice(2);
        }

        // Handle dynamic item count: 3 → 2 → 1 → []
        if (availableItems.length >= 3) {
            setOtherPressData(availableItems.slice(0, 3));
            setNoOtherPress(false);
        } else if (availableItems.length === 2) {
            setOtherPressData(availableItems.slice(0, 2));
            setNoOtherPress(false);
        } else if (availableItems.length === 1) {
            setOtherPressData(availableItems.slice(0, 1));
            setNoOtherPress(false);
        } else {
            setOtherPressData([]);
            setNoOtherPress(true);
        }

    }, [location]);

    return (
        <div className={`max-w-7xl mx-auto px-5 py-5`}>
            <h2 className={`text-2xl font-bold mb-4`}>More from WEBXPAY</h2>
            {noOtherPress ? (
                <div className="text-gray-500 text-center w-full">
                    No other press items available
                </div>
            ) : (
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4`}>
                    {
                        otherPressData.map((item, index) => (
                            <LatestSingle
                                key={index}
                                imagePath={item.imagePath}
                                title={item.title}
                                description={item.description}
                                url={item.url}
                            />
                        ))}
                </div>
            )}
        </div>
    );
};

export default MoreWebxpayPress
