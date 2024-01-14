"use client";
import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getRandomValue } from "@/utils/utils.js";

import Image from "next/image";
import styles from './ParallaxImage.module.scss';
export default function ParallaxImage({ src, alt, width, height, className}) {
    const container = useRef();
    const image = useRef();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        let tlParallaxImg = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                scrub: true,
                start: "top bottom",
                end: "bottom center",
                toggleActions: "restart none none reset",
            }
        });
        tlParallaxImg.set(image.current, {
            scale: 1.6,
        });

        tlParallaxImg.from(image.current, {
            yPercent: -25,
            stagger: 0.1,
            ease: 'Power2.out',
        });
    }, {scope: container});

    return (
        <figure ref={container} className={`${styles.figure} ${className}`}>
            <Image ref={image} src={src} alt={alt} width={width} height={height} loading="lazy" className={`${styles.image}`}/>
        </figure>
    );
}