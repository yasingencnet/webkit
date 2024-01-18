import {useRef, useEffect} from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import styles from './Modal.module.scss';
import gsap from 'gsap';

const scaleAnimation = {
    initial: {scale: 0, x: "-50%", y: "-50%"},
    enter: {scale: 1, x: "-50%", y: "-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x: "-50%", y: "-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Modal({modal, companies}) {

    const {active, index} = modal;
    const modalContainer = useRef(null);
    const cursor = useRef(null);
    /*const cursorLabel = useRef(null);*/

    useEffect(() => {
        //Move Container
        let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"});
        let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"});

        //Move cursor
        /*let xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"});
        let yMoveCursor = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"});*/

        //Move cursor label
        /*let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
        let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})*/

        window.addEventListener('mousemove', (e) => {
            const {pageX, pageY} = e;
            xMoveContainer(pageX)
            yMoveContainer(pageY)
            /*xMoveCursor(pageX)
            yMoveCursor(pageY)*/
            /*xMoveCursorLabel(pageX)*/
            /*yMoveCursorLabel(pageY)*/
        })
    }, [])

    return (
        <>
            <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial"
                        animate={active ? "enter" : "closed"} className={styles.modalContainer}>
                <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
                    {
                        companies.map((item, index) => {
                            return (
                                <div className={styles.modal} key={`modal_${index}`} style={{'--h': item.color.h, '--s': item.color.s, '--l': item.color.l}}>
                                    <Image
                                        src={item.image}
                                        width={150}
                                        height={150}
                                        alt={item.position}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </motion.div>
            {/*<motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial"
                        animate={active ? "enter" : "closed"}></motion.div>*/}
            {/*<motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial"
                        animate={active ? "enter" : "closed"}>View
            </motion.div>*/}
        </>
    )
}