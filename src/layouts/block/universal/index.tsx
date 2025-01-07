import { headlineColorTypes, headlineFontFamilyTypes, headlineTagTypes, UnderlineHeadLine } from "@/ui";
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
                <UnderlineHeadLine
                    color={headlineColorTypes.black}
                    fontFamily={headlineFontFamilyTypes.caveatBrush}
                    tag={headlineTagTypes.h2}
                    classname={styles.title}
                >
                    {title}
                </UnderlineHeadLine>:
                <></>
            }
            <div className={styles.content}>
                {children}
            </div>
        </section>
    )
}
