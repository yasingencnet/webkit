'use client';

import React, {useRef} from 'react';

import styles from './SkillSet.module.scss';

import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import Container from "@/components/UI/Layout/Layout";
import Ticker from '@/components/UI/Elements/Ticker/Ticker';
import Card1 from "@/components/UI/Cards/Card1/Card1";
import Title from "@/components/UI/Elements/Title/Title";
import Skills from '@/database/Skills.json';

import {IconA11Y, IconCSS, IconFigma, IconGSAP, IconHTML, IconJS, IconReact, IconWebpack, IconAPI} from "@/components/UI/Icons/Icons";
import Blobs from "@/components/UI/Elements/Blobs/Blobs";

export default function SkillSet() {
    const container = useRef();
    const getIconFromName = (iconName) => {
        switch (iconName) {
            case 'IconJS':
                return <IconJS></IconJS>;
            case 'IconReact':
                return <IconReact></IconReact>;
            case 'IconCSS':
                return <IconCSS></IconCSS>;
            case 'IconGSAP':
                return <IconGSAP></IconGSAP>;
            case 'IconHTML':
                return <IconHTML></IconHTML>;
            case 'IconA11Y':
                return <IconA11Y></IconA11Y>;
            case 'IconFigma':
                return <IconFigma></IconFigma>;
            case 'IconWebpack':
                return <IconWebpack></IconWebpack>;
            case 'IconAPI':
                return <IconAPI></IconAPI>;
        }
    }

    // GSAP Animations
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        /*gsap.to(`.${styles.title}`, {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 20%',
                end: 'bottom 50%',
                toggleActions: 'play none none reverse',
                pin: true,
                scrub: true,
                markers: true,
            },
            scale: 2,
        });*/
    });

    return (
        <section className={styles.section} id={'skills'}>
            <Blobs type={'v2'} />
            <Container>
                <div className={styles.wrapper}>
                    <Title className={styles.title} color={'white'}>My <br/>Skillset</Title>
                <div className={styles.grid}>
                    {Skills.map((skill, index) => (
                        <Card1
                            key={index}
                            title={skill.title}
                            subtitle={skill.subtitle}
                            description={skill.description}
                            icon={skill.image}
                        >
                        </Card1>
                    ))}
                </div>
                </div>
            </Container>

            <div className={styles.ticker}>
                <Ticker words={['accessibility', 'responsiveness', 'interactive', 'performance']}></Ticker>
            </div>
        </section>
    )
}