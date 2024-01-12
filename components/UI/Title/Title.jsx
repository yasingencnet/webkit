'use client';

import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './Title.module.scss';


export default function Title({heading, color, children}) {

    const textRef = useRef();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        const title = textRef.current;

        title.style.opacity = 1;

        const splitText = new SplitText(title, {
            type: 'words, chars',
            wordsClass: `${styles.splitLine}`,
        });

        const elements = splitText.chars;

        gsap.from(elements, {
            scrollTrigger: {
                trigger: title,
                toggleActions: "restart pause resume reverse",
                start: "top 90%",
            },
            duration: 0.4,
            opacity: 0,
            y: 120,
            ease: "power1.out",
            stagger: 0.01,
        });

    }, { scope: textRef });

    const HeadingElement = heading ? heading : "h2";
    const colorClass = color === 'white' ? styles.white : color === 'black' ? styles.black : '';

    return (
        <HeadingElement className={`${styles.title} ${colorClass}`} ref={textRef}>
            {children}
        </HeadingElement>
    );
}