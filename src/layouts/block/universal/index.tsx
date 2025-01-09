import { Headline } from "@/ui";
import React, { ReactNode } from "react";
import styles from "./universal.module.css";
import cn from "classnames";

interface IAttainment{
    children: ReactNode,
    title?: string,
    isBg?: boolean
}

    export const UniversalBlock=({children, isBg, title}: IAttainment):JSX.Element=>{

    return (

        <section 
            className={cn(styles.wrapper, {
                [styles.bg]:isBg
            })}
        >
            {
                title?
                <Headline
                    color='black'
                    type='section'
                    underline={true}
                    classname={styles.title}
                >
                    {title}
                </Headline>:
                <></>
            }
            <div className={styles.content}>
                {children}
            </div>
        </section>
    )
}
