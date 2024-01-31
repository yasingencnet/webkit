'use client';

import React, {useRef} from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import styles from './Navigation.module.scss'
import Link from "next/link";
import PageList from '@/database/PageList.json';

export default function Navigation({ isMenuOpen, setMenuOpen }) {
    gsap.registerPlugin(ScrollToPlugin);

    const navigationRef = useRef();

    const { contextSafe } = useGSAP({scope: navigationRef});

    const doAnim = contextSafe((e) => {
        let height = e.target.offsetHeight;
        let width = e.target.offsetWidth;
        let x = e.target.offsetLeft;
        let y = e.target.offsetTop;
        let bg = e.target.parentNode.parentNode.parentNode.querySelector(`.${styles.bg}`);
        gsap.to(bg, {
            duration: 0.3,
            scale: 1,
            x: x,
            y: y,
            width: width,
            height: height,
            autoAlpha: 1,
        });
    });
    const resetAnim = contextSafe((e) => {
        let bg = e.target.parentNode.parentNode.parentNode.querySelector(`.${styles.bg}`);
        gsap.to(bg, {
            duration: 0.3,
            scale: 0,
            autoAlpha: 0
        });
    });

    const scrollToSection = contextSafe((e) => {
        setMenuOpen(false);
        gsap.to(window, {
            duration: 1,
            scrollTo: e
        });
    });

    return (
        <div className={`${styles.container} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <nav className={styles.navigation} ref={navigationRef}>
                <ul>
                    {Object.values(PageList)
                        .filter(item => item.showOnNavigation)
                        .filter(item => item.isActive)
                        .map((item, index) => (
                            <li key={index}>
                                {item.link.startsWith('#') ? (
                                    <button onMouseEnter={doAnim} onMouseLeave={resetAnim}
                                            onClick={() => scrollToSection(item.link)}>
                                        {item.title}
                                    </button>
                                ) : (
                                    <Link href={item.link} onMouseEnter={doAnim} onMouseLeave={resetAnim}>{item.title}</Link>
                                )}
                            </li>
                        ))}
                </ul>

                <span className={styles.bg}></span>
            </nav>
        </div>
    )
}