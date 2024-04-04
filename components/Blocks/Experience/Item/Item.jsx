'use client';
import React from 'react'
import styles from './Item.module.scss';
export default function Item({position, company, duration, location, image, url, responsibilities, color}) {

    return (
        <div className={styles.item} style={{'--h': color.h, '--s': color.s, '--l': color.l}}>
          <div className={styles.left}>
            <div className={styles.title}>
              <h3 data-text={position}>{position}</h3>
            </div>
            <span className={`${styles.info}`}>{company}</span>
          </div>
          <div className={styles.right}>
            <span className={styles.info}>{duration}</span>
            <span className={styles.info}>{location}</span>
          </div>
        </div>
    )
}