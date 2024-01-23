import React  from 'react';
import styles from './Card1.module.scss';
import Image from "next/image";

export default function Card1({icon, title, subtitle, description}) {
    return(

        <div className={`${styles.card}`}>

            <div className={styles.icon}>
                <Image src={icon} alt={title} width={80} height={80} loading={'lazy'} />
            </div>
            <h2 className={styles.title}>
                {title} <br/> {subtitle}
            </h2>

            <p className={styles.description}>
                {description}
            </p>
        </div>

    );
}