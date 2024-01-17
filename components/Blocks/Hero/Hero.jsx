'use client';

import React, {useEffect, useState, useRef} from 'react';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

import styles from './Hero.module.scss'
import Image from "next/image";
import Title from "@/components/UI/Elements/Title/Title";
import commonConfig from '@/database/config/metadata.json';
import Magnet from "@/components/UI/Magnet/Magnet";

export default function Hero() {
    const container = useRef();
    const {contextSafe} = useGSAP({scope: container});

    // Scroll to Selected Works
    const scrollTo = contextSafe(() => {
        const selectedWorksElement = document.getElementById('selectedWorks');
        if (selectedWorksElement) {
            selectedWorksElement.scrollIntoView({
                behavior: 'smooth',
            });
        }
    });

    // Greeting Message
    const [greeting, setGreeting] = useState('');
    useEffect(() => {
        const visitorClock = new Date().getHours();

        const greetingMessage =
            visitorClock >= 5 && visitorClock <= 12 ? 'Good morning,' :
                visitorClock > 12 && visitorClock <= 17 ? 'Good afternoon,' :
                    'Good evening,';

        setGreeting(greetingMessage);

    }, []);

    // GSAP Animations
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(DrawSVGPlugin);

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
                        trigger: container.current,
                        scrub: true,
                        start: 'top top',
                        end: 'bottom 50%'
                    }
                });
            }
        })

        // Draw ScrollDown
        gsap.from(`.${styles.scroll} svg path`, {
            drawSVG: '0',
            delay: 1,
        });
        gsap.from(`.${styles.scroll} svg rect`, {
            drawSVG: '0',
            delay: 0.5,
            duration: 1.5
        });

        // Pin Hero
/*
        gsap.to(container.current, {
            scrollTrigger: {
                trigger: container.current,
                start: 'top top',
                end: 'bottom top',
                pin: true,
                pinSpacing: false,
                scrub: true,
                onUpdate: (scrollTrigger) => {
                    if(scrollTrigger.progress >0.05){
                        gsap.to(`.${styles.heroImg}`, {
                            x: '-30%',
                            scale: 1.3,
                            duration: 1.5,
                        });
                    } else {
                        gsap.to(`.${styles.heroImg}`, {
                            x: '0',
                            scale: 1.6,
                            duration: 1.5,
                        });
                    }
                },
            },
        });
*/

    }, {scope: container});


    return (
        <section className={styles.hero} ref={container}>
            <div className={styles.inner}>
                <p className={styles.description}>{greeting}</p>
                <div className={styles.title}>
                    <Title heading={'h1'}>
                        I&apos;m Yasin
                        <span className={`${styles.icon}`}>
                            <span className={styles.reveal}></span>
                            <Image
                                src="/hero-image.jpg"
                                alt={commonConfig.metadata.title}
                                width={640}
                                height={300}
                                priority
                                className={styles.heroImg}
                            />
                        </span>
                        {commonConfig.metadata.description}
                    </Title>
                </div>
            </div>

            <div className={styles.background}>
                <div className={styles.gradient}></div>
                {/*<div className={styles.noise}></div>*/}
            </div>

            <Magnet>
                <button type={'button'} onClick={scrollTo} className={styles.scroll} aria-label="Scroll Down">
                    <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="62" height="62" rx="31" fill="transparent" stroke="black"
                              strokeWidth={1}/>
                        <path d="M34.1371 35.1502L29.0686 40.2187L24 35.1502" stroke="#000000" strokeWidth="1.39444"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M40.2194 23.9993L33.1234 23.9993C32.048 23.9993 31.0166 24.4265 30.2562 25.1869C29.4957 25.9474 29.0685 26.9787 29.0685 28.0542L29.0685 40.2187"
                            stroke="#000000" strokeWidth="1.39444" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </Magnet>
        </section>
    )
}