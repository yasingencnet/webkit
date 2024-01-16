'use client';

import React, { useEffect, useRef } from 'react';

export default function Template({ children }) {
    const styles = {
        loader: {
            height: 'calc(100vh + 200px)',
            width: '100%',
            position: 'fixed',
        },
        svg: {
            height: '100%',
            width: '100%',
        },
        path: {
            stroke: 'black',
            strokeWidth: '1px'
        }
    }

    const loader = useRef(null);
    const path = useRef(null);
    const initialCurve = 200;
    const duration = 600;
    const startRef = useRef(); // Create a useRef for 'start'

    useEffect(() => {
        const animate = (timestamp) => {
            if (startRef.current === undefined) {
                startRef.current = timestamp; // Update 'start' using the useRef
            }
            const elapsed = timestamp - start;

            const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration);
            setPath(newCurve);

            loader.current.style.top = easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";

            if (elapsed < duration) {
                requestAnimationFrame(animate);
            }
        }

        const setPath = (curve) => {
            const width = window.innerWidth
            const height = loaderHeight();
            path.current.setAttributeNS(null, "d",
                `M0 0
                L${width} 0
                L${width} ${height}
                Q${width / 2} ${height - curve} 0 ${height}
                L0 0`
            );
        }

        setPath(initialCurve);
        setTimeout(() => {
            requestAnimationFrame(animate);
        }, 500);
    }, []); // Include 'animate' and 'setPath' in the dependency array

    const easeOutQuad = (time, start, end, duration) => {
        return -end * (time /= duration) * (time - 2) + start;
    }

    const loaderHeight = () => {
        const loaderBounds = loader.current.getBoundingClientRect();
        return loaderBounds.height;
    }

    return (
        <div>
            <div ref={loader} className={styles.loader}>
                <svg className={styles.svg}>
                    <path className={styles.path} ref={path}></path>
                </svg>
            </div>

            {children}
        </div>
    )
}