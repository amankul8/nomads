import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from "./skirt.module.scss";
import Image from "next/image";

interface IBlockWithSkirt extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    image: string,
    classname?: string,
    children: ReactNode,
}

export function BlockWithSkirt ({image, children, classname}: IBlockWithSkirt) {

    return(
        <section className={styles.wrapper+' '+classname}>
            <img
                src='/images/blockSkirts/blockSkirt.svg' 
                className={styles.upSkirt} alt=""
            />
            
            {children}

            <img 
                src='/images/blockSkirts/blockSkirt.svg' 
                className={styles.downSkirt} alt="" 
            />
        </section>
    )
}