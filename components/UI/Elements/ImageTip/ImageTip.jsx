import React  from 'react';
import styles from './ImageTip.module.scss';
import Image from "next/image";
import commonConfig from "@/database/config/metadata.json";

export default function ImageTip({date, children}) {
    return(
        <div className={styles.element}>
            <figure className={styles.figure}>
                <Image
                    src="/yasin-genc-photo.jpeg"
                    alt={commonConfig.metadata.title}
                    width={40}
                    height={40}
                    loading={'lazy'}
                />
            </figure>
            <div className={styles.detail}>
                <div className={styles.date}>{date}</div>
                <div className={styles.description}>{children}</div>
            </div>
        </div>
    );
}