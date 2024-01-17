"use client";

import React, { useRef, useEffect  } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import Link from "next/link";

import Works from '@/database/Works.json';

import styles from './SelectedWorks.module.scss';

import Title from "@/components/UI/Elements/Title/Title";
import Magnet from "@/components/UI/Magnet/Magnet";
import FancyButton from "@/components/UI/Elements/Button/Button";
import TextReveal from "@/components/UI/Elements/TextReveal/TextReveal";
import Ticker from "@/components/UI/Elements/Ticker/Ticker";
export default function SelectedWorks() {
    const galleryContainer = useRef();
    const container = useRef();
    const bg = useRef();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const gallery = galleryContainer.current;

        // BG Animation
        gsap.to(bg.current, {
            scrollTrigger: {
                trigger: container.current,
                start: 'top bottom',
                end: 'top 80%',
                scrub: true,
            },
            clipPath: 'inset(0px 0px round 3rem 3rem 0rem 0rem)',
        });

        // Horizontal Scroll
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: gallery,
                start: 'top top',
                end: () => {
                    return `+=${(gallery?.clientWidth) - window.innerWidth}`;
                },
                pin: true,
                scrub: true,
                invalidateOnRefresh: true,
            }
        });
        let mm = gsap.matchMedia();
        mm.add("(max-width: 991px)", () => {
            tl.to(gallery, {
                ease: 'none',
            });

        });
        mm.add("(min-width: 992px)", () => {
            tl.to(gallery, {
                x: () => {
                    return `-${(gallery?.clientWidth) - window.innerWidth}`;
                },
                ease: 'none',
            });

        });

    }, { scope: galleryContainer });

    return (
        <section className={styles.section} id={'selectedWorks'} ref={container}>
            <div className={styles.bg} ref={bg}>
                <Ticker className={styles.showcase} words={['showcase', 'showcase', 'showcase', 'showcase', 'showcase', 'showcase', 'showcase', 'showcase', 'showcase', 'showcase', 'showcase']}></Ticker>
            </div>
            {/*<div className={styles.ear}></div>*/}

            <div className={styles.xScrollContainer} ref={galleryContainer}>
                <header className={styles.header}>
                    <Title color="white">Selected <br/>Works</Title>
                    <TextReveal className={styles.description}>
                        I&apos;ve played a key role in developing impactful projects. Here&apos;s a curated selection
                        showcasing my expertise and the achieved results.
                    </TextReveal>
                    <FancyButton theme='button-2' link={'/contact'}>Contact</FancyButton>
                </header>

                {Works.map((work, index) => {
                    const lightness = parseFloat(work.bgColor.l);
                    return (
                        <div key={index} className={`${styles.browser}`}
                             style={{'--h': work.bgColor.h, '--s': work.bgColor.s, '--l': work.bgColor.l}}>
                            <div className={`${styles.browserHeader} ${lightness >= 50 ? styles.dark : ''}`}>
                                <h3 className={styles.title}>{work.title}</h3>
                                <span className={styles.date}>{work.date}</span>

                                {work.url && work.url.trim() !== '' && (
                                    <Magnet>
                                        <Link target={'_blank'} className={styles.redirect} href={work.url}>
                                            <span>Visit</span>
                                            <svg width="93" height="93" viewBox="0 0 93 93" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <rect width="93" height="93" rx="46.5" fill="white"/>
                                                <path
                                                    d="M30.0541 60.6172C29.2717 61.3969 29.2717 62.6611 30.0541 63.4407C30.8365 64.2204 32.105 64.2204 32.8874 63.4407L30.0541 60.6172ZM64.56 31.0512C64.56 29.9486 63.663 29.0547 62.5565 29.0547H44.5252C43.4188 29.0547 42.5218 29.9486 42.5218 31.0512C42.5218 32.1538 43.4188 33.0477 44.5252 33.0477H60.553V49.0199C60.553 50.1225 61.45 51.0164 62.5565 51.0164C63.663 51.0164 64.56 50.1225 64.56 49.0199V31.0512ZM32.8874 63.4407L63.9732 32.463L61.1398 29.6395L30.0541 60.6172L32.8874 63.4407Z"
                                                    fill="black"/>
                                            </svg>
                                        </Link>
                                    </Magnet>
                                )}
                            </div>
                            <div className={styles.browserBody}>
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    width={1920}
                                    height={1080}
                                    className={styles.image}
                                    loading={'lazy'}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}