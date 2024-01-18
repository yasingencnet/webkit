'use client';
import React from 'react'
import styles from './Item.module.scss';

export default function Item({index, setModal, position, company, duration, location, image, url, responsibilities, color}) {

    return (
        <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={styles.item} style={{'--h': color.h, '--s': color.s, '--l': color.l}}>
            <div className={styles.left}>
                <div className={styles.title}>
                    <h3 data-text={position}>{position}</h3>
                </div>
                <span className={`${styles.info}`}>{duration}</span>
            </div>
            <div className={styles.right}>
                <span className={styles.info}>{company}</span>
                <span className={styles.info}>{location}</span>
            </div>
        </div>
    )
}