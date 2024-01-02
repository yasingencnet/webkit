'use client'

import React, { useEffect } from 'react';
import gsap from 'gsap';
import styles from './Ticker.module.scss';

export default function Ticker({words}) {

    const elements = [];

    words.forEach((word, index) => {
        if(index <  words.length - 1) {
            elements.push(
                <span key={`word-${index}`} className={styles.ticker__text}>
                    {word}
                    <svg key={`svg-${index}`} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 15H4C2.34315 15 1 16.3431 1 18V30C1 31.6569 2.34315 33 4 33H11" stroke="#FFD600" strokeWidth="2"/>
                        <path d="M15 37V44C15 45.6569 16.3431 47 18 47H30C31.6569 47 33 45.6569 33 44V37" stroke="#FFD600" strokeWidth="2"/>
                        <path d="M15 11V4C15 2.34315 16.3431 1 18 1L30 1C31.6569 1 33 2.34315 33 4V11" stroke="#FFD600" strokeWidth="2"/>
                        <path d="M11 33H12C13.6569 33 15 34.3431 15 36V37" stroke="#FFD600" strokeWidth="2"/>
                        <path d="M24 23H18C16.3431 23 15 21.6569 15 20V11" stroke="#FFD600" strokeWidth="2"/>
                        <path d="M37 15H36C34.3431 15 33 13.6569 33 12V11" stroke="#FFD600" strokeWidth="2"/>
                        <path d="M24 23H30C31.6569 23 33 24.3431 33 26V37" stroke="#FFD600" strokeWidth="2"/>
                        <path d="M37 15H44C45.6569 15 47 16.3431 47 18V30C47 31.6569 45.6569 33 44 33H37" stroke="#FFD600" strokeWidth="2"/>
                    </svg>
                </span>
            );
        } else {
            elements.push(<span key={`word-${index}`} className={styles.ticker__text}>{word}</span>);
        }
    });

    return (
        <div className={styles.ticker}>
            <div className={styles.ticker__run}>
                {elements}
            </div>
        </div>
    )
}