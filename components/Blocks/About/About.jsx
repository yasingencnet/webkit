"use client";

import React from 'react';
import styles from './About.module.scss';
import Title from "@/components/UI/Elements/Title/Title";
import Paragraph from "@/components/UI/Elements/Paragraph/Paragraph";
import SeattleMap from "@/components/UI/Cards/SeattleMap/SeattleMap";
import Stats from "@/components/UI/Cards/Stats/Stats";
import commonConfig from '@/database/config/metadata.json';
import ParallaxImage from "@/components/UI/ParallaxImage/ParallaxImage";

export default function About() {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>

                <header className={styles.header}>
                    <Title heading={'h3'} color="black"><span>I’m a</span> <br/>
                        Creative Frontend Developer
                    </Title>
                    <Paragraph className={styles.description}>
                        I would describe myself as a creative web developer with over {commonConfig.personal.experience} years of experience in development.
                    </Paragraph>
                </header>

                <ParallaxImage src={"/gallery/IMG-20190712-WA0010.jpg"} alt={`An image`} width={800} height={1200} />
                <ParallaxImage src={"/gallery/IMG_20210713_103018.jpg"} alt={`An image`} width={800} height={1200} />
                <ParallaxImage src={"/gallery/IMG_20200720_191527.jpg"} alt={`An image`} width={800} height={1200} />

                <Stats />

            </div>

            <div className={styles.grid}>
                <header className={styles.header}>
                    <Paragraph className={styles.description}>
                        I&apos;ve worked in UI design and front-end development, so I can understand designs well and help the team communicate effectively.
                    </Paragraph>
                </header>
                <ParallaxImage src={"/gallery/IMG_20230325_154428.jpg"} alt={`An image`} width={800} height={1200} />
                <ParallaxImage src={"/gallery/G0062517.JPG"} alt={`An image`} width={800} height={1200} />
                <ParallaxImage src={"/gallery/IMG_20220129_133838.jpg"} alt={`An image`} width={800} height={1200} />
                <ParallaxImage src={"/gallery/IMG_20220821_193826.jpg"} alt={`An image`} width={800} height={1200} />
            </div>

            <div className={styles.grid}>
                <header className={styles.header}>
                    <Paragraph className={styles.description}>
                        Currently, I live in Seattle. In my personal life, I love to travel with my backpack, watch documentaries about geography, and explore new traditional music.
                    </Paragraph>
                </header>
                <ParallaxImage src={"/gallery/IMG_20231225_165326.jpg"} alt={`An image`} width={800} height={1200} />
                <SeattleMap />
                <ParallaxImage src={"/gallery/IMG_20231210_140134.jpg"} alt={`An image`} width={800} height={1200} />
                <ParallaxImage src={"/gallery/IMG_20230420_161256.jpg"} alt={`An image`} width={800} height={1200} />
            </div>
        </section>
    );
}