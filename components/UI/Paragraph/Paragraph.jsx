'use client';

import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import styles from './Paragraph.module.scss';


export default function Paragraph({className, children}) {
    const textRef = useRef();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        const splitText = new SplitText(textRef.current, {
            type: 'words, lines',
            linesClass: `${styles.splitLine}`,
        });

        const elements = splitText.words;

        gsap.from(elements, {
            scrollTrigger: {
                trigger: textRef.current,
                toggleActions: "restart pause resume reverse",
                start: "top 90%",
            },
            duration: 0.8,
            opacity: 0,
            ease: "power1.out",
            stagger: 0.02,
        });

    }, { scope: textRef });

    return (
        <p className={`${styles.description} ${className}`} ref={textRef}>
            {children}
        </p>
    );
}