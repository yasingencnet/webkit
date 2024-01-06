"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from 'swiper/modules';

import Image from "next/image";

import styles from './Gallery.module.scss';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/free-mode';

import Title from "@/components/UI/Title/Title";
import ImageTip from "@/components/UI/ImageTip/ImageTip";
import FancyButton from "@/components/UI/Button/Button";

import commonConfig from '@/database/config/metadata.json';
import ImageVideo from '@/database/ImageVideo.json';
import ImageReveal from "@/components/UI/ImageReveal/ImageReveal";
import Container from "@/components/UI/Layout/Layout";
export default function Gallery() {

    return (
        <section className={styles.section}>
            <Container>
                <header className={styles.header}>
                    <Title color="white">Photos & <br/><span>Maybe</span> Videos</Title>
                    <FancyButton theme='button-2' target="_blank" link={commonConfig.social.instagram}>Follow on Instagram</FancyButton>
                </header>
            </Container>

            <Swiper
                slidesPerView={'auto'}
                speed={1200}
                spaceBetween={90}
                slidesOffsetAfter={90}
                slidesOffsetBefore={90}
                touchEventsTarget={'container'}
                pagination={{
                    type: 'fraction',
                }}
                freeMode={{
                    enabled: true,
                }}
                modules={[Pagination, FreeMode]}
                className={`${styles.slider} gallery-slider`}
            >
                {ImageVideo.map((item, index) => (
                    <SwiperSlide key={index} className={`${styles.sliderItem}`}>
                        <ImageReveal>
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
                        </ImageReveal>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}