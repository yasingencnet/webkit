"use client";

import React, {useState} from 'react';
import styles from './Experience.module.scss';
import Item from "@/components/Blocks/Experience/Item/Item";
import Modal from "@/components/Blocks/Experience/Modal/Modal";
import Title from "@/components/UI/Elements/Title/Title";
import Companies from '@/database/Companies.json';
import Blobs from "@/components/UI/Elements/Blobs/Blobs";

export default function ExperienceBlock() {
    const [modal, setModal] = useState({active: false, index: 0});

    return (
        <section className={styles.section} id={'experience'}>
            <Blobs type={'v1'} classVariable={styles.blob} />
            <header className={styles.header}>
                <Title color={'white'}><span>Experience</span> <br/>History</Title>
            </header>
            {Companies.map((item, index) => {
                return (
                    <Item index={index}
                          company={item.company}
                          position={item.position}
                          duration={item.duration}
                          location={item.location}
                          image={item.image}
                          url={item.url}
                          responsibilities={item.responsibilities}
                          color={item.color}
                          setModal={setModal}
                          key={index} />
                );
            })}
            <Modal modal={modal} companies={Companies} />
        </section>
    );
}