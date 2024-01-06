import React from 'react';
import styles from './Header.module.scss'
import Logo from '@/components/UI/Logo/Logo';
import FancyButton from '@/components/UI/Button/Button';
import Navigation from '@/components/Layout/Navigation/Navigation';
export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Logo classVariable={styles.logo}></Logo>
                <FancyButton theme='button-3' target="_blank" link={'/'}>Contact</FancyButton>
            </div>
            <Navigation></Navigation>
        </header>
    )
}