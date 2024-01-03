'use client';

import React from 'react';

import styles from './Hero.module.scss'
import Image from "next/image";
import Logo from '@/components/UI/Logo/Logo';
import FancyButton from '@/components/UI/Button/Button';
import Ticker from '@/components/UI/Ticker/Ticker';
import ImageTip from '@/components/UI/ImageTip/ImageTip';
import commonConfig from '@/database/config/metadata.json';
import Title from "@/components/UI/Title/Title";
export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.inner}>
                <figure className={styles.figure}>
                    <Image
                        className={styles.img}
                        src="/hero-image.jpg"
                        alt={commonConfig.metadata.title}
                        width={1720}
                        height={1680}
                        priority
                    />
                    <ImageTip date="August, 2012">Oludeniz, Turkiye</ImageTip>
                </figure>
                <div className={styles.content}>
                    <Title>Hi, <br /> I&apos;m {commonConfig.personal.name}.</Title>
                    <p>{commonConfig.metadata.description}</p>
                    <FancyButton theme='button-2' link='/'>View Selected Works.</FancyButton>
                    <Logo classVariable={styles.badge}></Logo>
                </div>
            </div>
            <div className={styles.pattern}>
                <Ticker words={['accessibility', 'responsiveness', 'interactive', 'performance']}></Ticker>
                <Ticker speed={'20'} direction={'left'} words={['gsap', 'animation', 'three.js', 'lottie']}></Ticker>
                <Ticker speed={'60'} words={['webpack', 'parcel', 'vite', 'gulp']}></Ticker>
                <Ticker speed={'40'} direction={'left'} words={['html', 'a11y', 'react.js', 'next.js', 'css']}></Ticker>
                <Ticker speed={'70'} words={['responsiveness', 'performance', 'accessibility', 'interactive']}></Ticker>
                <Ticker speed={'30'} direction={'left'} words={['html', 'a11y', 'react.js', 'next.js', 'css']}></Ticker>

                <Ticker speed={'20'} direction={'left'} words={['gsap', 'animation', 'three.js', 'lottie']}></Ticker>
                <Ticker speed={'60'} words={['webpack', 'parcel', 'vite', 'gulp']}></Ticker>
                <Ticker words={['accessibility', 'responsiveness', 'interactive', 'performance']}></Ticker>
                <Ticker speed={'30'} direction={'left'} words={['html', 'a11y', 'react.js', 'next.js', 'css']}></Ticker>
                <Ticker speed={'70'} words={['responsiveness', 'performance', 'accessibility', 'interactive']}></Ticker>
                <Ticker speed={'40'} direction={'left'} words={['html', 'a11y', 'react.js', 'next.js', 'css']}></Ticker>
            </div>
        </section>
    )
}