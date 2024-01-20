import React from 'react';

import styles from './NavDetailed.module.scss';
import Link from "next/link";
import PageList from '@/database/PageList.json';
import FadeIn from "@/components/UI/FadeIn/FadeIn";

export default function NavDetailed() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                {Object.values(PageList)
                    .filter(item => item.isActive)
                    .map((item, index) => (
                    <li key={index}>
                        <FadeIn y={35} duration={0.4}>
                            <Link href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined}>
                            <span className={styles.title}>
                                <span data-text={item.title}>{item.title}</span>
                            </span>
                                <span className={styles.description}>{item.description}</span>
                            </Link>
                        </FadeIn>
                    </li>
                ))}
            </ul>
        </nav>
    )
}