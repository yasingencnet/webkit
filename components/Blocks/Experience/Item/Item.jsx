'use client';
import React from 'react'
import styles from './Item.module.scss';
import FadeIn from "@/components/UI/FadeIn/FadeIn";

export default function Item({index, setModal, position, company, duration, location, image, url, responsibilities, color}) {

    return (
        <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={styles.item} style={{'--h': color.h, '--s': color.s, '--l': color.l}}>
            <FadeIn y={35} duration={0.8}>
            <div className={styles.left}>
                <div className={styles.title}>
                    <h3 data-text={position}>{position}</h3>
                </div>
                <span className={`${styles.info}`}>{company}</span>
            </div>
            </FadeIn>
            <FadeIn y={35} duration={0.8}>
                <div className={styles.right}>
                    <span className={styles.info}>{duration}</span>
                    <span className={styles.info}>{location}</span>
                </div>
            </FadeIn>
        </div>
    )
}