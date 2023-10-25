import styles from './Button.module.scss';
import Link from "next/link";

export default function FancyButton({element, type, link, children, theme}) {
    const btnClass = styles[theme];

    if(element === 'button'){
        return (
            <button className={btnClass} type={type}>
                <span>{children}</span>
            </button>
        )
    } else {
        return (
            <Link href={link} className={btnClass}>
                <span>{children}</span>
            </Link>
        )
    }
}