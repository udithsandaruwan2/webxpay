'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const slides = [
    { desktop: '/media/hero_new.png',       mobile: '/media/hero_new_mobile_01.svg' },
    { desktop: '/media/hero_new_2.jpg',         mobile: '/media/hero_new_mobile_02.svg' },
    { desktop: '/media/hero_new_5.jpeg',     mobile: '/media/hero_new_mobile_05.png' },
    { desktop: '/media/hero_new_6_v2.jpg',     mobile: '/media/hero_new_mobile_06.svg' },
    { desktop: '/media/hero_new_3.jpeg',        mobile: '/media/hero_new_mobile_07.svg' },
];

const SLIDE_DURATION = 5000; // ms per slide

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [progressKey, setProgressKey] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const goTo = useCallback((index: number) => {
        setCurrentIndex(index);
        setProgressKey((k) => k + 1);
    }, []);

    const goNext = useCallback(() => {
        setCurrentIndex((prev) => {
            const next = (prev + 1) % slides.length;
            setProgressKey((k) => k + 1);
            return next;
        });
    }, []);

    const goPrev = useCallback(() => {
        setCurrentIndex((prev) => {
            const next = (prev - 1 + slides.length) % slides.length;
            setProgressKey((k) => k + 1);
            return next;
        });
    }, []);

    // Auto-advance timer
    useEffect(() => {
        if (isPaused) {
            if (timerRef.current) clearInterval(timerRef.current);
            return;
        }
        timerRef.current = setInterval(goNext, SLIDE_DURATION);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isPaused, goNext]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [goNext, goPrev]);

    const currentSlide = slides[currentIndex];

    return (
        <section className="min-h-fit relative w-full mx-auto bg-white z-0 pt-[88px] md:pt-[144px] pb-10 px-5 lg:px-8">
            {/* Slider container */}
            <div
                className="relative w-full max-w-7xl mx-auto h-[62svh] min-h-[360px] max-h-[560px] md:h-[500px] md:max-h-none lg:h-[600px] rounded-lg overflow-hidden shadow-2xl group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Slides — crossfade via AnimatePresence */}
                <AnimatePresence mode="sync">
                    <motion.div
                        key={currentIndex}
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                    >
                        {/* Mobile image (shown only on < md) */}
                        {currentSlide.mobile && (
                            <Image
                                src={currentSlide.mobile}
                                alt={`Home Header Slide ${currentIndex + 1}`}
                                fill
                                className="object-cover object-center block md:hidden"
                                priority={currentIndex === 0}
                                quality={90}
                            />
                        )}
                        {/* Desktop image (always shown; on mobile falls back if no mobile image) */}
                        <Image
                            src={currentSlide.desktop}
                            alt={`Home Header Slide ${currentIndex + 1}`}
                            fill
                            className={`object-cover object-center ${currentSlide.mobile ? 'hidden md:block' : 'block'}`}
                            priority={currentIndex === 0}
                            quality={90}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Gradient overlay — bottom fade for dot readability */}
                <div
                    className="absolute inset-x-0 bottom-0 h-28 z-20 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.50) 0%, transparent 100%)',
                    }}
                />

                {/* Prev arrow */}
                <button
                    onClick={goPrev}
                    aria-label="Previous slide"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white
                               opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/55 hover:scale-110 active:scale-95"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                {/* Next arrow */}
                <button
                    onClick={goNext}
                    aria-label="Next slide"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white
                               opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/55 hover:scale-110 active:scale-95"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>

                {/* Dot indicators with progress fill on active */}
                <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center gap-x-2 z-30">
                    {slides.map((_, index) => {
                        const isActive = index === currentIndex;
                        return (
                            <button
                                key={index}
                                onClick={() => goTo(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                                    isActive
                                        ? 'w-8 h-2.5 bg-white/35'
                                        : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
                                }`}
                            >
                                {isActive && (
                                    <span
                                        key={progressKey}
                                        className="absolute left-0 top-0 h-full bg-white rounded-full"
                                        style={{
                                            animation: isPaused
                                                ? 'none'
                                                : `bannerProgress ${SLIDE_DURATION}ms linear forwards`,
                                        }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Banner;