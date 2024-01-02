"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';

import Image from "next/image";

import styles from './SelectedWorks.module.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import Title from "@/components/UI/Title/Title";
import Works from '@/database/Works.json';
export default function SelectedWorks() {

    return (
        <section className={styles.section}>
            <Title color="white">Selected <br/>Works</Title>

            <Swiper
                slidesPerView={'auto'}
                spaceBetween={90}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={styles.slider}
            >
                {Works.map((work, index) => (
                    <SwiperSlide key={index} className={styles.sliderItem}>
                        <Image
                            src={work.image}
                            alt={work.title}
                            width={800}
                            height={1080}
                            priority
                            className={styles.image}
                        />
                        <h5 className={styles.title}>{work.title}</h5>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}