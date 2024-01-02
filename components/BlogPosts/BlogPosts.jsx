import React from "react";

import styles from './BlogPosts.module.scss';

import Title from "@/components/UI/Title/Title";
import Card2 from "@/components/UI/Card2/Card2";
import FancyButton from "@/components/UI/Button/Button";
import Logo from "@/components/UI/Logo/Logo";
export default function BlogPosts() {

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.header}>
                        <Title>From the <br/> Blog</Title>
                        <FancyButton theme='button-1' link='/'>See All</FancyButton>
                    </div>

                    <Logo classVariable={styles.badge}></Logo>

                    <Card2
                        title="Web Development"
                        description="I have been working as a web developer for 3 years. I have experience in developing web applications using React, Vue, Angular, Node, Express, MongoDB, MySQL, PostgreSQL, etc."
                        date="1 January 2024"
                        url="/">
                    </Card2>
                    <Card2
                        title="Web Development"
                        description="I have been working as a web developer for 3 years. I have experience in developing web applications using React, Vue, Angular, Node, Express, MongoDB, MySQL, PostgreSQL, etc."
                        date="1 January 2024"
                        url="/">
                    </Card2>
                    <Card2
                        title="Web Development"
                        description="I have been working as a web developer for 3 years. I have experience in developing web applications using React, Vue, Angular, Node, Express, MongoDB, MySQL, PostgreSQL, etc."
                        date="1 January 2024"
                        url="/">
                    </Card2>
                    <Card2
                        title="Web Development"
                        description="I have been working as a web developer for 3 years. I have experience in developing web applications using React, Vue, Angular, Node, Express, MongoDB, MySQL, PostgreSQL, etc."
                        date="1 January 2024"
                        url="/">
                    </Card2>
                    <Card2
                        title="Web Development"
                        description="I have been working as a web developer for 3 years. I have experience in developing web applications using React, Vue, Angular, Node, Express, MongoDB, MySQL, PostgreSQL, etc."
                        date="1 January 2024"
                        url="/">
                    </Card2>
                </div>
            </div>
        </section>
    );
}