'use client';

import React, { useRef } from 'react';
import styles from './Stats.module.scss';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getRandomValue } from "@/utils/utils";
import commonConfig from "@/database/config/metadata.json";

export default function Stats({className}) {
    const container = useRef();
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const yPercentValue = getRandomValue(20, 10);
        gsap.to(container.current, {
            yPercent: -yPercentValue,
            ease: 'Power2.out',
            scrollTrigger: {
                trigger: container.current,
                scrub: true,
            }
        });


        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
        });
        tl.from(`.statValue`, {
            innerText: 0,
            ease: "power1.out",
            snap : {
                innerText: 1
            },
            duration: 2,
        }, 0);
        tl.from(`.statValueV2`, {
            autoAlpha: 0,
            ease: "power1.out",
            duration: 2,
        }, 0);
    }, { scope: container })

    return (
        <div className={`${styles.stats} ${className}`} ref={container}>
            <div className={styles.stat}>
                <div className={`${styles.statValue}`}>
                    <span className={'statValue'}>{commonConfig.personal.experience}</span>+
                </div>
                <span className={styles.statDesc}>Years of <br/>
                            Experience
                        </span>
            </div>
            <div className={styles.stat}>
                <div className={`${styles.statValue}`}>
                    <span className={'statValue'}>35</span>+
                </div>
                <span className={styles.statDesc}>Projects <br/>
                            Delivered on Time</span>
            </div>
            <div className={styles.stat}>
                <div className={`${styles.statValue}`}>
                    <div className={'statValueV2'}>999999999999999999999999999999999999999999999</div>
                </div>
                <span className={styles.statDesc}>Consumed <br/>
                            Coffee & Tea</span>
            </div>
        </div>
    );
}