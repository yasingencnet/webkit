'use client';

import React, {useEffect, useState, useRef} from 'react';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {SplitText} from "gsap/SplitText";

import styles from './Hero.module.scss'
import Image from "next/image";
import commonConfig from '@/database/config/metadata.json';
import FadeIn from "@/components/UI/FadeIn/FadeIn";
import PreLoader from "@/components/Blocks/PreLoader/PreLoader";
import Blobs from "@/components/UI/Elements/Blobs/Blobs";
import Particles from "@/components/UI/Cards/Particles/Particles";

export default function Hero() {
    const [preloaderComplete, setPreloaderComplete] = useState(false);
    const container = useRef();
    const fakeContainer = useRef();
    const textRef = useRef(null);
    const descRef = useRef();
    const {contextSafe} = useGSAP({scope: container});

    const handlePreloaderComplete = () => {
        setPreloaderComplete(true);
    };

    // GSAP Animations
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, SplitText);
        gsap.set(`.${styles.line} svg path`, {
            drawSVG: '0%',
        });
        gsap.set(descRef.current, {
            autoAlpha: 0,
        })

        if (preloaderComplete) {
            // Line Animation
            gsap.to(`.${styles.lineRight} svg path`, {
                drawSVG: '100%',
                duration: 1,
                stagger: 0.1
            });
            gsap.to(`.${styles.lineLeft} svg path`, {
                drawSVG: '100%',
                duration: 1,
                stagger: 0.1
            });

            // Hero Title
            textRef.current.style.opacity = 1;
            const splitText = new SplitText(textRef.current, {
                type: 'words, lines',
                linesClass: `${styles.splitLine}`,
                wordsClass: `${styles.splitWords}`,
            });
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: textRef.current,
                    toggleActions: "restart pause resume reverse",
                    start: "top 90%",
                },
            });
            tl.from(splitText.words, {
                duration: 0.4,
                autoAlpha: 0,
                y: 120,
                ease: "power1.out",
                stagger: 0.08,
            });

            // Description
            gsap.to(descRef.current, {
                autoAlpha: 1,
                duration: 3,
                ease: "power1.out",
            })

            // Image Reveal
            gsap.to(`.${styles.reveal}`, {
                x: '-100%',
                delay: 0.5,
                duration: 1,
                onComplete: () => {
                    gsap.to(`.${styles.heroImg}`, {
                        x: '-30%',
                        scale: 1.3,
                        scrollTrigger: {
                            trigger: fakeContainer.current,
                            scrub: true,
                            start: 'top top',
                            end: 'bottom 50%'
                        }
                    });
                }
            });

            // Scale Content
            gsap.to(`.${styles.inner}`, {
                scale: 0.8,
                scrollTrigger: {
                    trigger: fakeContainer.current,
                    scrub: true,
                    start: 'top top',
                    end: 'bottom top',
                }
            });

            // Container Animation
            gsap.to(container.current, {
                scrollTrigger: {
                    trigger: container.current,
                    pin: true,
                    toggleActions: "restart pause resume reverse",
                    start: "top top",
                    end: "bottom top",
                    pinSpacing: false,
                },
            });
        }

    }, [preloaderComplete]);


    return (
        <>
            <PreLoader onComplete={handlePreloaderComplete}/>
            <section className={styles.hero}>
                <div ref={container}>
                    <div className={styles.inner}>
                        <div className={styles.title}>
                            <h1 ref={textRef}>
                                I&apos;m Yasin <span className={`${styles.icon}`}>
                                    <span className={styles.reveal}></span>
                                    <Image
                                        src="/hero-image.jpg"
                                        alt={commonConfig.metadata.title}
                                        width={640}
                                        height={300}
                                        priority
                                        className={styles.heroImg}
                                    />
                                </span> <br/> Creative Frontend Developer.
                            </h1>
                            <p ref={descRef}>{commonConfig.metadata.description}</p>
                        </div>
                    </div>
                    <div className={styles.background}>

                        <div className={styles.noise}></div>
                        <div className={`${styles.line} ${styles.lineLeft}`}>
                            <svg width="962" height="995" viewBox="0 0 962 995" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M961 995L0 1.00093" stroke="url(#paint0_linear_2321_30777)"/>
                                <path d="M961 994.807L0 139.055" stroke="url(#paint1_linear_2321_30777)"/>
                                <path d="M961 995L0 268.279" stroke="url(#paint2_linear_2321_30777)"/>
                                <path d="M961 994.998L0 388.092" stroke="url(#paint3_linear_2321_30777)"/>
                                <path d="M961 995L0 498.692" stroke="url(#paint4_linear_2321_30777)"/>
                                <path d="M961 995L0 600.073" stroke="url(#paint5_linear_2321_30777)"/>
                                <path d="M961 994.998L0 692.236" stroke="url(#paint6_linear_2321_30777)"/>
                                <path d="M961 994.998L0 775.185" stroke="url(#paint7_linear_2321_30777)"/>
                                <path d="M961 994.998L0 851.682" stroke="url(#paint8_linear_2321_30777)"/>
                                <path d="M961 994.998L0 916.197" stroke="url(#paint9_linear_2321_30777)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_2321_30777" x1="960.499" y1="992.187"
                                                    x2="-6.38836"
                                                    y2="985.916" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_2321_30777" x1="960.499" y1="992.385"
                                                    x2="-6.37415"
                                                    y2="985.101" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_2321_30777" x1="960.499" y1="992.944"
                                                    x2="-6.35294"
                                                    y2="984.366" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_2321_30777" x1="960.499" y1="993.281"
                                                    x2="-6.31993"
                                                    y2="983.01" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_2321_30777" x1="960.499" y1="993.596"
                                                    x2="-6.26589"
                                                    y2="981.037" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_2321_30777" x1="960.499" y1="993.883"
                                                    x2="-6.17141"
                                                    y2="978.102" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint6_linear_2321_30777" x1="960.499" y1="994.141"
                                                    x2="-5.99077"
                                                    y2="973.56" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint7_linear_2321_30777" x1="960.499" y1="994.376"
                                                    x2="-5.59793"
                                                    y2="966.04" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint8_linear_2321_30777" x1="960.499" y1="994.593"
                                                    x2="-4.47619"
                                                    y2="951.182" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint9_linear_2321_30777" x1="960.499" y1="994.775"
                                                    x2="0.00045284"
                                                    y2="916.191" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className={`${styles.line} ${styles.lineRight}`}>
                            <svg width="962" height="995" viewBox="0 0 962 995" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 995L962 1.00093" stroke="url(#paint0_linear_2321_30690)"/>
                                <path d="M1 994.807L962 139.055" stroke="url(#paint1_linear_2321_30690)"/>
                                <path d="M1 995L962 268.279" stroke="url(#paint2_linear_2321_30690)"/>
                                <path d="M1 994.998L962 388.092" stroke="url(#paint3_linear_2321_30690)"/>
                                <path d="M1 995L962 498.692" stroke="url(#paint4_linear_2321_30690)"/>
                                <path d="M1 995L962 600.073" stroke="url(#paint5_linear_2321_30690)"/>
                                <path d="M1 994.998L962 692.236" stroke="url(#paint6_linear_2321_30690)"/>
                                <path d="M1 994.998L962 775.185" stroke="url(#paint7_linear_2321_30690)"/>
                                <path d="M1 994.998L962 851.682" stroke="url(#paint8_linear_2321_30690)"/>
                                <path d="M1 994.998L962 916.197" stroke="url(#paint9_linear_2321_30690)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_2321_30690" x1="1.50051" y1="992.187" x2="968.388"
                                                    y2="985.916" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_2321_30690" x1="1.50051" y1="992.385" x2="968.374"
                                                    y2="985.101" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_2321_30690" x1="1.50051" y1="992.944" x2="968.353"
                                                    y2="984.366" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_2321_30690" x1="1.50051" y1="993.281" x2="968.32"
                                                    y2="983.01" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_2321_30690" x1="1.50051" y1="993.596" x2="968.266"
                                                    y2="981.037" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_2321_30690" x1="1.50051" y1="993.883" x2="968.171"
                                                    y2="978.102" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint6_linear_2321_30690" x1="1.50051" y1="994.141" x2="967.991"
                                                    y2="973.56" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint7_linear_2321_30690" x1="1.50051" y1="994.376" x2="967.598"
                                                    y2="966.04" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint8_linear_2321_30690" x1="1.50051" y1="994.593" x2="966.476"
                                                    y2="951.182" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint9_linear_2321_30690" x1="1.50051" y1="994.775" x2="962"
                                                    y2="916.191" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <Particles className={styles.particlesBG}/>

                        <Blobs type={'v1'}/>
                        <Blobs type={'v2'}/>
                        <Blobs type={'v3'}/>
                    </div>
                </div>
                <div className={styles.fakeContainer} ref={fakeContainer}></div>
            </section>
        </>
    )
}