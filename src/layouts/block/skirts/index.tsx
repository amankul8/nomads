import React, { ReactNode } from "react";

import styles from "./skirt.module.scss";

interface IBlockWithSkirt{
    image: string,
    classname?: string,
    children: ReactNode,
}

export const BlockWithSkirt:React.FC<IBlockWithSkirt> = ({image, children, classname})=>{

    return(
        <section className={styles.wrapper+' '+classname}>
            <img src='/icons/blockSkirts/blockSkirt.svg' className={styles.upSkirt} alt="" />
            {children}
            <img src='/icons/blockSkirts/blockSkirt.svg' className={styles.downSkirt} alt="" />
        </section>
    )
}