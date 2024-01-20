"use client";

import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from 'swiper/modules';

import Image from "next/image";

import styles from './Gallery.module.scss';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/free-mode';

import Title from "@/components/UI/Elements/Title/Title";
import ImageTip from "@/components/UI/Elements/ImageTip/ImageTip";
import FancyButton from "@/components/UI/Elements/Button/Button";

import commonConfig from '@/database/config/metadata.json';
import ImageVideo from '@/database/ImageVideo.json';
import Container from "@/components/UI/Layout/Layout";
import FadeIn from "@/components/UI/FadeIn/FadeIn";
export default function Gallery() {
    const container = useRef();
    const { contextSafe } = useGSAP({scope: container});

    const onEnterAnim = contextSafe((e) => {
        let imageElement = e.currentTarget.querySelector(`.${styles.image}`);

        let rect = e.target.getBoundingClientRect();

        let mouse = {x: 0, y: 0, moved: false};

        mouse.moved = true;
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;

        gsap.to(imageElement, {
            duration: 0.5,
            x: (mouse.x - rect.width / 2) / rect.width * -100,
            y: (mouse.y - rect.height / 2) / rect.height * -100
        });
    });
    const onLeaveAnim = contextSafe((e) => {
        let imageElement = e.currentTarget.querySelector(`.${styles.image}`);
        gsap.to(imageElement, {
            x: 0,
            y: 0,
            duration: 0.5,
        });
    });

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        /*gsap.from(`.${styles.sliderItem}`, {
            x: '-50%',
            stagger: 0.1,
            duration: 1,
            scrollTrigger: {
                trigger: `.${styles.sliderItem}`,
                start: 'top 80%',
            }
        });*/
    }, {scope: container});

    return (
        <section className={styles.section} ref={container}>
            <Container>
                <header className={styles.header}>
                    <Title><span>My</span> Photo <br/>Journal</Title>
                    <FancyButton theme='button-1' target="_blank" link={commonConfig.social.instagram}>Follow on Instagram</FancyButton>
                </header>
            </Container>

            <Swiper
                slidesPerView={1.2}
                spaceBetween={30}
                slidesOffsetAfter={30}
                slidesOffsetBefore={30}
                freeMode={true}
                breakpoints={{
                    768: {
                        slidesPerView: 1.8,
                        spaceBetween: 60,
                        slidesOffsetAfter: 60,
                        slidesOffsetBefore: 60,
                    },
                    992: {
                        slidesPerView: 2.5,
                        spaceBetween: 60,
                        slidesOffsetAfter: 60,
                        slidesOffsetBefore: 60,
                    },
                    1600: {
                        slidesPerView: 'auto',
                        spaceBetween: 90,
                        slidesOffsetAfter: 90,
                        slidesOffsetBefore: 90,
                    },
                }}
                touchEventsTarget={'container'}
                pagination={{
                    type: 'fraction',
                }}

                modules={[Pagination, FreeMode]}
                className={`${styles.slider} gallerySlider`}
            >
                {ImageVideo.map((item, index) => (
                    <SwiperSlide key={index} className={`${styles.sliderItem}`}>
                        <figure
                            className={styles.figure}
                            onPointerMove={onEnterAnim}
                            onPointerLeave={onLeaveAnim}>
                            <FadeIn y={50} duration={1.6} autoAlpha={1}>

                            <Image
                                src={item.url}
                                quality={90}
                                alt={`An image from ${item.location}`}
                                width={1400}
                                height={1600}
                                loading={"lazy"}
                                className={`${styles.image} ${styles[item.direction]}`}
                            />
                            </FadeIn>
                            <ImageTip date={item.date}>{item.location}</ImageTip>
                        </figure>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}