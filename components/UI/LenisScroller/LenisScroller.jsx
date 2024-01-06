'use client';

import React, { useEffect } from 'react';
import Lenis from "@studio-freight/lenis";

export default function LenisScroller() {

    useEffect(() => {
        const lenisScroll = new Lenis({
            lerp: 0.1
        });

        lenisScroll.on("scroll", (e) => {
            // console.log(e);
        });

        function raf(time) {
            lenisScroll.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenisScroll.destroy();
        };
    }, []);

    return <></>;
}
