'use client';

import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from './CustomCursor.module.scss';

export default function CustomCursor() {
    const container = useRef();

    useGSAP(() => {
        const cursor = `.${styles.customCursor}`;

        // Handle mousemove event
        const handleMouseMove = (event) => {
            const {clientX, clientY} = event;

            // Update cursor position
            gsap.to(cursor, {
                x: clientX - 6,
                y: clientY - 6,
                duration: 0.3,
                ease: 'power2.out'
            });
        };

        // Animate on Click
        const handleClick = () => {
            gsap.to(cursor, {
                scale: 1.8,
                duration: 0.2,
                onComplete: () => {
                    gsap.to(cursor, {
                        scale: 1,
                        duration: 0.2,
                    });
                }
            });
        };

        // Attach event listener
        window.addEventListener('pointermove', handleMouseMove);
        window.addEventListener('click', handleClick);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('pointermove', handleMouseMove);
            window.removeEventListener('click', handleClick);
        };
    }, {scope: container});
    return (
        <div ref={container}>
            <div className={`${styles.customCursor}`}></div>
        </div>
    );
}