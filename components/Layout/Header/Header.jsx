import React from 'react';
import styles from './Header.module.scss'
import Logo from '@/components/UI/Elements/Logo/Logo';
import FancyButton from '@/components/UI/Elements/Button/Button';
import Navigation from '@/components/Layout/Navigation/Navigation';

import PageList from '@/database/PageList.json';
export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Logo classVariable={styles.logo}></Logo>
                <Navigation></Navigation>
                {/*<FancyButton theme='button-3' link={PageList.contact.link}>Contact</FancyButton>*/}
            </div>
        </header>
    )
}