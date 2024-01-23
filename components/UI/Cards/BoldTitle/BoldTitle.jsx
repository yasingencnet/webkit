'use client';

import React, { useRef } from 'react';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import styles from './BoldTitle.module.scss';
import Container from "@/components/UI/Layout/Layout";

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
            <Container>
                <h2 className={styles.boldTitle} ref={boldTitle}>
                    <span className={styles.boldTitleLeft}>Creative</span>
                    <span>Frontend</span>
                    <span className={styles.boldTitleRight}>Developer</span>
                </h2>
            </Container>
        </section>

    );
}