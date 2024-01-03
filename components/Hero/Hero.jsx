'use client';

import React, { useEffect, useState } from 'react';

import styles from './Hero.module.scss'
import Image from "next/image";
import Logo from '@/components/UI/Logo/Logo';
import FancyButton from '@/components/UI/Button/Button';
import Ticker from '@/components/UI/Ticker/Ticker';
import ImageTip from '@/components/UI/ImageTip/ImageTip';
import commonConfig from '@/database/config/metadata.json';
import Title from "@/components/UI/Title/Title";
export default function Hero() {

    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const visitorClock = new Date().getHours();

        if (visitorClock <= 12) {
            setGreeting("Good morning,");
        } else if (visitorClock <= 16) {
            setGreeting("Good afternoon,");
        } else {
            setGreeting("Good evening,");
        }
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.inner}>
                <Logo classVariable={styles.logo}></Logo>

                <p className={styles.description}>{greeting}</p>

                <div className={styles.title}>
                    <Title>I&apos;m {commonConfig.personal.name}. <br/>
                        Creating Web Apps.
                    </Title>
                </div>
                <p className={styles.description}>{commonConfig.metadata.description}</p>

                <FancyButton theme='button-2' link='/'>View Selected Works.</FancyButton>
            </div>

            <div className={styles.background}>
                <div className={styles.gradient}></div>
                <div className={styles.noise}></div>
            </div>
        </section>
    )
}