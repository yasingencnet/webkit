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
        const images = gsap.utils.toArray(".icon");
        let currentIndex = 0;

        gsap.set(".icon", {
            y: "100%"
        });

        const showImages = () => {
            gsap.set(images[currentIndex], {
                autoAlpha: 1
            });
            gsap.to(images[currentIndex], {
                y: 0,
                duration: 1,
                ease: "bounce.out",
                onComplete: () => {
                    gsap.to(images[currentIndex], {
                        y: "-100%",
                        duration: 1,
                        delay: 0.5,
                        onComplete: () => {
                            gsap.set(images[currentIndex], {
                                y: "100%",
                                autoAlpha: 0
                            });
                            currentIndex = (currentIndex + 1) % images.length;
                            showImages();
                        }
                    });
                }
            })
        };

        showImages();

    }, { scope: container });

    return (
        <section className={styles.hero}>
            <div className={styles.inner}>
                <p className={styles.description}>{greeting}</p>

                <div className={styles.title} ref={container}>
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
                            <Image className={'icon'} width={80} height={80} priority src="icon/icon-a11y.svg" alt={commonConfig.metadata.title} />
                            <Image className={'icon'} width={80} height={80} priority src="icon/icon-css.svg" alt={commonConfig.metadata.title} />
                            <Image className={'icon'} width={80} height={80} priority src="icon/icon-figma.svg" alt={commonConfig.metadata.title} />
                            <Image className={'icon'} width={80} height={80} priority src="icon/icon-gsap.svg" alt={commonConfig.metadata.title} />
                            <Image className={'icon'} width={80} height={80} priority src="icon/icon-html.svg" alt={commonConfig.metadata.title} />
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