import styles from './Button.module.scss';
import Link from "next/link";

export default function FancyButton({element, type, link, target, theme, isEnabled, children, onClick}) {
    const btnClass = styles[theme];

    if(element === 'button'){
        return (
            <button className={`${styles.button} ${btnClass}`} type={type} onClick={onClick}>
                <span className={styles.border}></span>
                <span className={styles.ripple}>
                    <span></span>
                </span>
                <span className={styles.title}>
                    <span data-text={children}>{children}</span>
                </span>
            </button>
        )
    } else {
        return (
            <Link href={link} target={target} className={`${styles.button} ${btnClass}`} disabled={!isEnabled}>
                <span className={styles.border}></span>
                <span className={styles.ripple}>
                    <span></span>
                </span>
                <span className={styles.title}>
                    <span data-text={children}>{children}</span>
                </span>
            </Link>
        )
    }
}