import React, { ReactNode } from "react";
import styles from "./BlockLayout.module.css";

interface IBlockLayout{
    children: ReactNode,
}

export const BlockLayout = ({children}: IBlockLayout)=>{

    return(
        <section className={styles.wrapper}>
            <img src='/icons/blockSkirts/blockSkirt.svg' className={styles.upSkirt} alt="" />
            {children}
            <img src='/icons/blockSkirts/blockSkirt.svg' className={styles.downSkirt} alt="" />
        </section>
    )
}