import React  from 'react';
import styles from './Card2.module.scss';
import Link from "next/link";

export default function Card2({title, description, date, url}) {
    return(
        <article className={styles.card}>
            <span className={styles.date}>{date}</span>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <Link href={url} className={styles.cta}>Read the article</Link>
        </article>
    );
}