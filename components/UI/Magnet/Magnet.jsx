import React, { useRef, cloneElement } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Magnet({ children }) {
    const magnetic = useRef(null);

    useGSAP(() => {
        const xTo = gsap.quickTo(magnetic.current, "x", {
            duration: 1,
            ease: "elastic.out(1, 0.3)",
        });
        const yTo = gsap.quickTo(magnetic.current, "y", {
            duration: 1,
            ease: "elastic.out(1, 0.3)",
        });

        if (magnetic.current) {
            magnetic.current.addEventListener("mousemove", (e) => {
                const { clientX, clientY } = e;
                const { height, width, left, top } = magnetic.current.getBoundingClientRect();
                const x = clientX - (left + width / 2);
                const y = clientY - (top + height / 2);
                xTo(x);
                yTo(y);
            });

            magnetic.current.addEventListener("mouseleave", () => {
                xTo(0);
                yTo(0);
            });
        }
    }, [magnetic]);

    // Check if children is provided before attempting to clone
    return children && cloneElement(children, { ref: magnetic });
}
