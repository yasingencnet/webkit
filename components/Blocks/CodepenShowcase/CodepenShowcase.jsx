'use client';
import React from "react";
import styles from './CodepenShowcase.module.scss';

import Title from "@/components/UI/Elements/Title/Title";
import Container from "@/components/UI/Layout/Layout";
import Codepen from "@/components/UI/Cards/Codepen/Codepen";
export default function CodepenShowcase() {

    return (
        <section className={styles.section}>
            <Container>
                <header className={styles.header}>
                    <Title color="white">Codepen</Title>
                </header>
            </Container>

            <Container>
                <div className={styles.grid}>
                    <Codepen url={'https://codepen.io/yasingencnet/pen/Yzgyzdw'}></Codepen>
                    <Codepen url={'https://codepen.io/yasingencnet/pen/abMOZez'}></Codepen>
                    <Codepen url={'https://codepen.io/yasingencnet/pen/dywRwXz'}></Codepen>
                    <Codepen url={'https://codepen.io/yasingencnet/pen/jOXwmbV'}></Codepen>
                    <Codepen url={'https://codepen.io/yasingencnet/pen/Vwqpovd'}></Codepen>
                    <Codepen url={'https://codepen.io/yasingencnet/pen/WNLREGG'}></Codepen>
                    <Codepen url={'https://codepen.io/yasingencnet/pen/qBLaWeo'}></Codepen>
                    <Codepen url={'https://codepen.io/yasingencnet/pen/mdaEGqW'}></Codepen>
                    <Codepen url={'https://codepen.io/yasingencnet/pen/dygaeeN'}></Codepen>
                    <Codepen url={'https://codepen.io/yasingencnet/pen/LYBBgZR'}></Codepen>
                    <Codepen url={'https://codepen.io/yasingencnet/pen/RwJoQox'}></Codepen>
                </div>
            </Container>
        </section>
    );
}