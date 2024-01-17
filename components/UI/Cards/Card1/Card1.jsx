import React  from 'react';
import styles from './Card1.module.scss';
import commonConfig from "@/database/config/metadata.json";
import TextReveal from "@/components/UI/Elements/TextReveal/TextReveal";
import Image from "next/image";

export default function Card1({icon, title, subtitle, description}) {
    return(
        <div className={`${styles.card}`}>
            <div className={styles.icon}>
                {/*{icon}*/}
                <Image src={icon} alt={title} width={80} height={80} loading={'lazy'} />
            </div>
            <h2 className={styles.title}>
                {title} <br/> {subtitle}
            </h2>
            <TextReveal className={styles.description}>
                {description}
            </TextReveal>
        </div>
    );
}