"use client";

import React from "react";

import Image from "next/image";
import styles from './About.module.scss';
import Title from "@/components/UI/Title/Title";
import Paragraph from "@/components/UI/Paragraph/Paragraph";
import SeattleMap from "@/components/UI/SeattleMap/SeattleMap";
import commonConfig from '@/database/config/metadata.json';
import ParallaxImage from "@/components/UI/ParallaxImage/ParallaxImage";

export default function About() {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                <header className={styles.header}>
                    <Title heading={'h3'} color="black"><span>I’m</span> <br/>
                        Creative Web Developer
                    </Title>
                    <Paragraph className={styles.description}>
                        I would describe myself as a creative web developer with over {commonConfig.personal.experience} years of experience in development.
                    </Paragraph>
                    {/*<p className={styles.description}>I would describe myself as a creative web developer with over {commonConfig.personal.experience} years of experience in development.</p>*/}
                </header>

                <ParallaxImage src={"/gallery/IMG-20190712-WA0010.jpg"} alt={`An image`} width={800} height={1200} />
                <ParallaxImage src={"/gallery/IMG_20210713_103018.jpg"} alt={`An image`} width={800} height={1200} />
                <ParallaxImage src={"/gallery/IMG_20200720_191527.jpg"} alt={`An image`} width={800} height={1200} />
                <ParallaxImage src={"/gallery/IMG_20200720_191527.jpg"} alt={`An image`} width={800} height={1200} />
            </div>

            <div className={styles.grid}>
                <header className={styles.header}>
                    <Title heading={'h3'} color="black"><span>I’m</span> <br/>
                        Creative Web Developer
                    </Title>
                    <Paragraph className={styles.description}>
                        I have experience in UI design and front-end development. It makes me understand the design correctly and builds effective communication between team members.
                    </Paragraph>
                    {/*<p className={styles.description}>I have experience in UI design and front-end development. It makes me understand the design correctly and builds effective communication between team members.</p>*/}
                </header>
                <ParallaxImage src={"/gallery/IMG_20200720_191527.jpg"} alt={`An image`} width={800} height={1200} />
                <ParallaxImage src={"/gallery/IMG_20200720_191527.jpg"} alt={`An image`} width={800} height={1200} />
                <ParallaxImage src={"/gallery/IMG_20200720_191527.jpg"} alt={`An image`} width={800} height={1200} />
                <ParallaxImage src={"/gallery/IMG_20200720_191527.jpg"} alt={`An image`} width={800} height={1200} />
            </div>

            <div className={styles.grid}>
                <header className={styles.header}>
                    <Title heading={'h3'} color="black"><span>I’m</span> <br/>
                        Creative Web Developer
                    </Title>
                    <Paragraph className={styles.description}>
                        Currently, I live in Seattle. In my personal life, I love to travel with my backpack, watch documentaries about geography, and explore new traditional music.
                    </Paragraph>
                    {/*<p className={styles.description}>Currently, I live in Seattle. In my personal life, I love to travel with my backpack, watch documentaries about geography, and explore new traditional music.</p>*/}
                </header>
                <ParallaxImage src={"/gallery/IMG_20200720_191527.jpg"} alt={`An image`} width={800} height={1200} />
                <SeattleMap></SeattleMap>
                <ParallaxImage src={"/gallery/IMG_20200720_191527.jpg"} alt={`An image`} width={800} height={1200} />
                <ParallaxImage src={"/gallery/IMG_20200720_191527.jpg"} alt={`An image`} width={800} height={1200} />
            </div>
        </section>
    );
}