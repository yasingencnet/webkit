'use client';

import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './Title.module.scss';


export default function Title({heading, color, children, className}) {
    const textRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        if(textRef.current){

            textRef.current.style.opacity = 1;

            const splitText = new SplitText(textRef.current, {
                type: 'words, chars',
                wordsClass: `${styles.splitLine}`,
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: textRef.current,
                    toggleActions: "restart pause resume reverse",
                    start: "top 90%",
                },
            });

            tl.from(splitText.chars, {
                duration: 0.4,
                opacity: 0,
                y: 120,
                ease: "power1.out",
                stagger: 0.01,
                onComplete: () => {
                    textRef.current.classList.add(`animated`);
                }
            });
        }

    }, { scope: textRef });

    const HeadingElement = heading ? heading : "h2";
    const colorClass = color === 'white' ? styles.white : color === 'black' ? styles.black : '';

    return (
        <HeadingElement className={`${styles.title} ${colorClass}`} ref={textRef}>
            {children}
        </HeadingElement>
    );
}