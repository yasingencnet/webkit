"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

import styles from './Gallery.module.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import Title from "@/components/UI/Title/Title";
import ImageTip from "@/components/UI/ImageTip/ImageTip";
import FancyButton from "@/components/UI/Button/Button";

import commonConfig from '@/database/config/metadata.json';
import ImageVideo from '@/database/ImageVideo.json';
export default function Gallery() {

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <Title color="white">Photos & <br/><span>Maybe</span> Videos</Title>
                    <FancyButton theme='button-2' target="_blank" link={commonConfig.social.instagram}>Follow on Instagram</FancyButton>
                </header>
            </div>

            <Swiper
                slidesPerView={'auto'}
                speed={1200}
                spaceBetween={90}
                slidesOffsetAfter={90}
                slidesOffsetBefore={90}
                touchEventsTarget={'container'}
                className={styles.slider}
            >
                {ImageVideo.map((item, index) => (
                    <SwiperSlide key={index} className={`${styles.sliderItem}`}>
                        <figure className={styles.figure}>
                            <Image
                                src={item.url}
                                quality={90}
                                alt={`An image from ${item.location}`}
                                width={1400}
                                height={1600}
                                loading={"lazy"}
                                className={`${styles.image} ${styles[item.direction]}`}
                            />
                            <ImageTip date={item.date}>{item.location}</ImageTip>
                        </figure>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}