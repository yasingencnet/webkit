'use client';

import React, { useState } from 'react';
import styles from './Header.module.scss'
import Logo from '@/components/UI/Elements/Logo/Logo';
import Navigation from '@/components/Layout/Navigation/Navigation';
export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`${styles.header} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <div className={styles.inner}>
                <Logo classVariable={styles.logo}></Logo>
                <div className={styles.openToWork}><span></span> Open To Work</div>
                <Navigation isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}></Navigation>
                <button type={'button'} className={styles.menuToggle} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}