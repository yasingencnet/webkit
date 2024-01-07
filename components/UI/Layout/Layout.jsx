import React from "react";

import styles from './Layout.module.scss';
export default function Container({children, className=''}) {

    return (
        <div className={`${styles.container} ${className}`}>
            {children}
        </div>
    );
}