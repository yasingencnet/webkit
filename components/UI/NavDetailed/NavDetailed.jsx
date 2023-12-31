import React from 'react';

import styles from './NavDetailed.module.scss';
import Link from "next/link";
import PageList from '@/database/PageList.json';

export default function NavDetailed() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                {Object.values(PageList).map((item, index) => (
                    <li key={index}>
                        <Link href={item.link}>
                            <span className={styles.title}>
                                <span data-text={item.title}>{item.title}</span>
                            </span>
                            <span className={styles.description}>{item.description}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}