import React, { useRef, cloneElement } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FadeIn({ children, duration = 1, y = 10, autoAlpha = 0}) {
    const container = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (container.current) {

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                toggleActions: "restart pause resume reverse",
                start: "top 95%",
            }
        });

        tl.from(container.current, {
            autoAlpha: autoAlpha,
            duration: duration,
            y: y,
            ease: "power1.out",
        });
        }
    }, [container]);

    // Check if children is provided before attempting to clone
    return children && cloneElement(children, { ref: container });
}
