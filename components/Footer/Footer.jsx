'use client';

import React from 'react';

import styles from './Footer.module.scss'
import Image from "next/image";
import Link from "next/link";
import Logo from '@/components/UI/Logo/Logo';
import Title from "@/components/UI/Title/Title";
import commonConfig from '@/database/config/metadata.json';
import {getCurrentYear } from "@/utils/utils.js";
import SocialLinks from "@/components/UI/SocialLinks/SocialLinks";
import NavDetailed from "@/components/NavDetailed/NavDetailed";

export default function Footer() {
    const currentYear = getCurrentYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.connect}>
                    <div className={styles.title}>
                        <Title color="white"><span>Let’s</span>  <br/>Connect.</Title>
                    </div>
                    <Link className={styles.email} href={`mailto:${commonConfig.personal.email}`}>{commonConfig.personal.email}</Link>
                    <SocialLinks></SocialLinks>
                </div>

                <div className={styles.nav}>
                    <NavDetailed></NavDetailed>
                </div>

                <div className={styles.bottom}>
                    <Logo classVariable={styles.badge}></Logo>
                    <div className={styles.copyright}>&copy; {currentYear} {commonConfig.personal.name} {commonConfig.personal.surname} <br/>
                        Powered by &nbsp;
                        <Link href="https://vercel.com/">Vercel</Link>,&nbsp;
                        <Link href="https://nextjs.org/">Next.js</Link>, and &nbsp;
                        <Link href="https://github.com/yasingencnet/webkit">GitHub</Link>.
                    </div>
                    <div className={styles.verse}>{commonConfig.content.verse}</div>
                </div>
            </div>

            <figure className={styles.skeleton}>
                <Image src="/skeleton.png" alt={commonConfig.metadata.title} width={379} height={259} loading={"lazy"} />
                <span className={`${styles.eyeball} ${styles.left}`}></span>
                <span className={`${styles.eyeball} ${styles.right}`}></span>
            </figure>
            <div className={styles.capillaryContainer}>
                <svg width="1688" height="1769" xmlns="http://www.w3.org/2000/svg" className={`${styles.capillary} ${styles.capillary1}`}>
                    <path d="M900.4 1490c-249.6 158.3-536.8 246-858.5 278L0 1741.8c40.8-9.7 71-2.2 234-40 163.2-37.8 290.4-74.5 427.2-163.5C864.7 1398.2 946 1193.2 717 852.7c-145.1-195.4-157-400.2-26.5-609.4C836.5 9.1 1181.2-78 1440.4 83.7c234 146.2 321.1 491 175 725.3-96 172.7-199.2 375.4-715 681z" stroke="white" strokeWidth="2.5" fill="none" fillRule="evenodd"></path>
                </svg>
                <svg width="2145" height="2248" xmlns="http://www.w3.org/2000/svg" className={`${styles.capillary} ${styles.capillary2}`}>
                    <path d="M1000.7 354.3C1317.8 153 1682.9 41.6 2091.7 1l53.3 33.3c-51.9 12.3-90.2 2.8-297.5 50.9-207.3 48-369 94.7-542.9 207.8-258.5 178.1-361.9 438.7-70.8 871.4 184.4 248.4 199.4 508.7 33.7 774.6-185.6 297.7-623.7 408.4-953 202.8C17 1956.1-93.7 1517.7 91.9 1220c122-219.6 253.3-477.2 908.8-865.7z" stroke="white" strokeWidth="2.5" fill="none" fillRule="evenodd"></path>
                </svg>
            </div>
        </footer>
    )
}