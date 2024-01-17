'use client';

import React, { useEffect, useRef } from 'react';
import styles from './template.module.scss';

export default function Template({ children }) {
    /*const loader = useRef(null);
    const path = useRef(null);
    const initialCurve = 200;
    const duration = 600;
    let start;

    useEffect(() => {
        const easeOutQuad = (time, start, end, duration) => {
            return -end * (time /= duration) * (time - 2) + start;
        }

        const loaderHeight = () => {
            const loaderBounds = loader.current.getBoundingClientRect();
            return loaderBounds.height;
        }
        
        const animate = (timestamp) => {
            if(start === undefined){
                start = timestamp
            }
            const elapsed = timestamp - start;

            const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration)
            setPath(newCurve);

            loader.current.style.top = easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";

            if(elapsed < duration){
                requestAnimationFrame(animate)
            }
        }

        const setPath = (curve) => {
            const width = window.innerWidth
            const height = loaderHeight();
            path.current.setAttributeNS(null, "d",
                `M0 0
    L${width} 0
    L${width} ${height}
    Q${width/2} ${height - curve} 0 ${height}
    L0 0`
            )
        }

        setPath(initialCurve)
        setTimeout( () => {
            requestAnimationFrame(animate)
        }, 500)
    }, []);*/



    return (
        <div>
            {/*<div ref={loader} className={styles.loader}>
                <svg>
                    <path ref={path}></path>
                </svg>
            </div>*/}
            {children}
        </div>
    )
}