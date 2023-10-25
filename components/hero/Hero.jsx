import styles from './Hero.module.scss'
import Image from "next/image";
import Logo from '@/components/logo/Logo';
import FancyButton from '@/components/button/Button';
import commonConfig from '@/config/metadata.json';
export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.inner}>
                <figure className={styles.figure}>
                    <Image
                        src="/hero-image.jpg"
                        alt={commonConfig.metadata.title}
                        width={1720}
                        height={1680}
                        priority
                    />
                </figure>
                <div className={styles.content}>
                    <h1>Hi, <br />
                        I&apos;m Yasin.</h1>
                    <p>I develop accessible, responsive, interactive, and animated websites with a strong focus on performance.</p>
                    <FancyButton element='button' type='button' theme='button-1'>View Selected Works</FancyButton>
                    <Logo classVariable={styles.badge}></Logo>
                </div>
            </div>
        </section>
    )
}