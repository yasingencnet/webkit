import React, {useRef} from 'react';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import styles from './NavDetailed.module.scss';
import Link from "next/link";
import PageList from '@/database/PageList.json';
import FadeIn from "@/components/UI/FadeIn/FadeIn";

export default function NavDetailed() {
    gsap.registerPlugin(ScrollToPlugin);
    const navigationRef = useRef();
    const { contextSafe } = useGSAP({scope: navigationRef});

    const scrollToSection = contextSafe((e) => {
        gsap.to(window, {
            duration: 1,
            scrollTo: e
        });
    });

    return (
        <nav className={styles.nav} ref={navigationRef}>
            <ul className={styles.ul}>

                {Object.values(PageList)
                    .filter(item => item.showOnFooter)
                    .filter(item => item.isActive)
                    .map((item, index) => (
                    <li key={index}>
                        {item.link.startsWith('#') ? (
                            <button onClick={() => scrollToSection(item.link)}>
                                <span className={styles.title}>
                                    <span data-text={item.title}>{item.title}</span>
                                </span>
                                <span className={styles.description}>{item.description}</span>
                            </button>
                        ) : (
                            <Link href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined}>
                                    <span className={styles.title}>
                                        <span data-text={item.title}>{item.title}</span>
                                    </span>
                                <span className={styles.description}>{item.description}</span>
                            </Link>
                        )}


                    </li>
                ))}
            </ul>
        </nav>
    )
}