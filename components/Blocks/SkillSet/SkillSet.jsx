import React from 'react';

import styles from './SkillSet.module.scss';

import Container from "@/components/UI/Layout/Layout";
import Ticker from '@/components/UI/Ticker/Ticker';
import Card1 from "@/components/UI/Card1/Card1";
import Title from "@/components/UI/Title/Title";
import Skills from '@/database/Skills.json';

export default function SkillSet() {

    return (
        <section className={styles.section}>
            <div className={styles.decor}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 25.8L52.1 61.4L58.6 3L5 25.8Z" stroke="#FFD600" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            <Container>
                <div className={styles.grid}>
                    <Title>My <br/>Skillset</Title>

                    {Skills.map((skill, index) => (
                        <Card1
                            key={index}
                            title={skill.title}
                            subtitle={skill.subtitle}
                            description={skill.description}
                            image={skill.image}>
                        </Card1>
                    ))}
                </div>
            </Container>

            <div className={styles.ticker}>
                <Ticker words={['accessibility', 'responsiveness', 'interactive', 'performance']}></Ticker>
            </div>
        </section>
    )
}