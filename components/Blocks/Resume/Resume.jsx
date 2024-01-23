'use client';

import React, { useRef } from 'react';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import styles from './Resume.module.scss';

import Image from "next/image";
import Container from "@/components/UI/Layout/Layout";
import FancyButton from "@/components/UI/Elements/Button/Button";
import commonConfig from "@/database/config/metadata.json";
import Link from "next/link";
import {getRandomValue} from "@/utils/utils";

export default function Resume() {
    const container = useRef();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 50%',
                end: 'top 25%',
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
        tl.to(`.${styles.cardV1}`, {
            rotate: '-6deg',
            scale: 1.05,
        }, 0);
        tl.to(`.${styles.cardV2}`, {
            rotate: '6deg',
            scale: 1.05,
            x: '5%'
        }, 0);

    }, { scope: container })


    return (
        <section className={styles.section} ref={container} id={'resume'}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.cardGroup}>
                        <div className={`${styles.card} ${styles.cardV1}`}>
                            <div className={styles.cardInner}>
                                <h4>YASIN GENC</h4>
                                <h6>Senior Frontend Developer</h6>
                                <hr/>
                                <p>I am Yasin, a senior frontend developer with over 7 years of professional experience.
                                    Successfully building user-friendly websites with ReactJS & NextJS. I pay attention to
                                    small details, enjoy technical problems, and work well in teams. I like learning new
                                    technologies and always aim to improve my skills.
                                </p>
                                <div>
                                    <Link href={`mailto:${commonConfig.personal.email}`} target={'_blank'}>
                                        {commonConfig.personal.email}
                                    </Link>
                                    <Link href={`tel:${commonConfig.personal.phone}`} target={'_blank'}>
                                        {commonConfig.personal.phone}
                                    </Link>
                                    <span>{commonConfig.personal.city}, {commonConfig.personal.state}</span>
                                </div>
                                <hr/>
                                <h5>WORK EXPERIENCE</h5>
                                <div className={styles.pseudo}>
                                    <span></span><span></span><span></span>
                                    <span></span><span></span><span></span>
                                    <span></span><span></span><span></span>
                                    <span></span><span></span><span></span>
                                    <span></span><span></span><span></span>
                                    <span></span><span></span><span></span>
                                    <span></span><span></span><span></span>
                                    <span></span><span></span><span></span>
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                            <figure className={styles.figure}>
                                <Image src="/yasin-genc-photo.jpeg" alt="Yasin Genc" width={150} height={150}/>
                            </figure>
                        </div>
                        <div className={`${styles.card} ${styles.cardV2}`}>
                            <div className={styles.cardInner}>
                                <Image src="/code-snippet.svg" alt="Code Snippet" width={330} height={480}/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cta}>
                        <FancyButton theme='button-1' target={'_blank'} link={commonConfig.personal.resumeURL}>View Resume</FancyButton>
                    </div>
                    <div className={styles.links}>
                        <Link href={`${commonConfig.social.linkedin}`} target={'_blank'}>LinkedIn</Link>
                        <Link href={`${commonConfig.social.github}`} target={'_blank'}>GitHub</Link>
                        <Link href={`${commonConfig.social.codepen}`} target={'_blank'}>CodePen</Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}