'use client';

import React, { useEffect, useState, useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import styles from './Hero.module.scss'
import Image from "next/image";
import Title from "@/components/UI/Title/Title";
import commonConfig from '@/database/config/metadata.json';
export default function Hero() {
    const container = useRef();

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

    // GSAP Icon Slider
    useGSAP(() => {
        gsap.from(".icon", {
            scale: 1.5,
            stagger: 0.1
        });
    }, { scope: container });

    return (
        <section className={styles.hero} ref={container}>
            <div className={styles.inner}>
                <p className={styles.description}>{greeting}</p>

                <div className={styles.title}>
                    <Title heading={'h1'}>I&apos;m {commonConfig.personal.name}.
                        <span className={`${styles.icon} ${styles['icon--v1']}`}>
                            <Image
                                src="/hero-image-v2.jpg"
                                alt={commonConfig.metadata.title}
                                width={600}
                                height={280}
                                priority
                            />
                        </span>
                        {commonConfig.metadata.description}
                        <span className={`${styles.icon} ${styles['icon--v2']}`}>
                            <Image
                                className={'icon'}
                                src="icon/icon-a11y.svg"
                                alt={commonConfig.metadata.title}
                                width={80} height={80} priority
                            />
                            <Image
                                className={'icon'}
                                src="icon/icon-css.svg"
                                alt={commonConfig.metadata.title}
                                width={80} height={80} priority
                            />
                            <Image
                                className={'icon'}
                                src="icon/icon-figma.svg"
                                alt={commonConfig.metadata.title}
                                width={80} height={80} priority
                            />
                            <Image
                                className={'icon'}
                                src="icon/icon-gsap.svg"
                                alt={commonConfig.metadata.title}
                                width={80} height={80} priority
                            />
                            <Image
                                className={'icon'}
                                src="icon/icon-html.svg"
                                alt={commonConfig.metadata.title}
                                width={80} height={80} priority
                            />
                        </span>
                    </Title>
                </div>
            </div>

            <div className={styles.background}>
                <div className={styles.gradient}></div>
                <div className={styles.noise}></div>
            </div>
        </section>
    )
}