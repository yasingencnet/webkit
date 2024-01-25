'use client';

import React, { useRef } from 'react';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import styles from './BoldTitle.module.scss';
import Container from "@/components/UI/Layout/Layout";
import TextReveal from "@/components/UI/Elements/TextReveal/TextReveal";
import Blobs from "@/components/UI/Elements/Blobs/Blobs";

export default function BoldTitle() {
    const container = useRef();
    const boldTitle = useRef();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const boldTitleTL = gsap.timeline({
            scrollTrigger: {
                trigger: boldTitle.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });

        // BoldText
        boldTitleTL.fromTo(`.${styles.boldTitleLeft}`, {
            xPercent: -50,
        }, {
            xPercent: -10,
        }, 0);
        boldTitleTL.fromTo(`.${styles.boldTitleRight}`, {
            xPercent: 50,
        }, {
            xPercent: 10,
        }, 0);

    }, { scope: container });

    return(

        <section className={styles.section} ref={container}>
            <Container className={styles.grid}>
                <TextReveal className={styles.paragraph}>
                    I&apos;ve worked in UI design and front-end development, so I can
                    understand designs well and builds effective communication between team members.
                </TextReveal>
                <h2 className={styles.boldTitle} ref={boldTitle}>
                    <span className={styles.boldTitleLeft}>Creative</span>
                    <span>Frontend</span>
                    <span className={styles.boldTitleRight}>Developer</span>
                </h2>
                <TextReveal className={`${styles.paragraph} ${styles.paragraphAlt}`}>
                    Currently, I live in Seattle. In my personal life, I love to travel with
                    my backpack, watch documentaries about geography, and explore new traditional music.
                </TextReveal>

                <Blobs type={'v3'} classVariable={styles.blob} />
            </Container>
        </section>

    );
}