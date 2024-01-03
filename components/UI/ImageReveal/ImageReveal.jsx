import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ImageReveal({ children }) {
    const containerRef = useRef(null);

    useGSAP( () => {
        gsap.registerPlugin(ScrollTrigger);

        const containerElement = containerRef.current;
        const imgElement = containerElement.children[0];

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerElement,
                toggleActions: "restart none none reset"
            }
        });

        tl.set(containerElement, { autoAlpha: 1 });
        tl.from(containerElement, {
            xPercent: -100,
            duration: 1.5
        });
        tl.from(imgElement, {
            xPercent: 100,
            scale: 1.3,
            delay: -1.5,
            duration: 1.5
        });

    }, [])


    return (
        React.cloneElement(children, { ref: containerRef })
    )
}