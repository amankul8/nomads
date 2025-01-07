import React, { ReactNode } from "react";

import styles from "./skirt.module.scss";

interface IBlockWithSkirt{
    image: string,
    children: ReactNode,
}

export const BlockWithSkirt:React.FC<IBlockWithSkirt> = ({image, children})=>{

    return(
        <section className={styles.wrapper}>
            <img src='/icons/blockSkirts/blockSkirt.svg' className={styles.upSkirt} alt="" />
            {children}
            <img src='/icons/blockSkirts/blockSkirt.svg' className={styles.downSkirt} alt="" />
        </section>
    )
}