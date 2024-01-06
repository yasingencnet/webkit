import React  from 'react';
import styles from './Card2.module.scss';
import Link from "next/link";

export default function Card2({title, description, date, url}) {
    return(
        <article className={styles.card}>
            <span className={styles.date}>{date}</span>
            <Link href={url}><h2 className={styles.title}>{title}</h2></Link>
            <Link href={url}><p className={styles.description}>{description}</p></Link>
            <Link href={url} className={styles.cta}>
                <span>Read the article</span>
                <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="93" height="93" rx="46.5" fill="black"/>
                    <path d="M30.0541 60.6172C29.2717 61.3969 29.2717 62.6611 30.0541 63.4407C30.8365 64.2204 32.105 64.2204 32.8874 63.4407L30.0541 60.6172ZM64.56 31.0512C64.56 29.9486 63.663 29.0547 62.5565 29.0547H44.5252C43.4188 29.0547 42.5218 29.9486 42.5218 31.0512C42.5218 32.1538 43.4188 33.0477 44.5252 33.0477H60.553V49.0199C60.553 50.1225 61.45 51.0164 62.5565 51.0164C63.663 51.0164 64.56 50.1225 64.56 49.0199V31.0512ZM32.8874 63.4407L63.9732 32.463L61.1398 29.6395L30.0541 60.6172L32.8874 63.4407Z" fill="white"/>
                </svg>
            </Link>
        </article>
    );
}