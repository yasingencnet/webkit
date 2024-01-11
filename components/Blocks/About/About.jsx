"use client";

import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";

import styles from './About.module.scss';

import Title from "@/components/UI/Title/Title";
import ImageTip from "@/components/UI/ImageTip/ImageTip";
import FancyButton from "@/components/UI/Button/Button";

import commonConfig from '@/database/config/metadata.json';
import ImageVideo from '@/database/ImageVideo.json';
import Container from "@/components/UI/Layout/Layout";
export default function About() {
    const container = useRef();
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, {scope: container});

    return (
        <section className={styles.section} ref={container}>
            <Container>
                <div className={styles.grid}>
                    <header className={styles.header}>
                        <Title color="black"><span>My</span> Photo <br/>Journal</Title>
                        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolorem dolores eligendi error.</p>
                    </header>
                    {ImageVideo.map((item, index) => (
                        <figure key={index}
                                className={`${styles.figure} ${styles[item.direction]}`}>
                            <Image
                                src={item.url}
                                quality={90}
                                alt={`An image from ${item.location}`}
                                width={1400}
                                height={1600}
                                loading={"lazy"}
                                className={`${styles.image}`}
                            />
                            <ImageTip date={item.date}>{item.location}</ImageTip>
                        </figure>
                    ))}
                </div>
            </Container>

        </section>
    );
}