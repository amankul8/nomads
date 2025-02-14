import { Headline } from "@/ui";
import React, { ReactNode } from "react";
import styles from "./universal.module.css";
import cn from "classnames";

interface IAttainment{
    children: ReactNode,
    title?: string,
    isBg?: boolean,
    classname?: string
}

    export const UniversalBlock:React.FC<IAttainment> = ({children, isBg, title, classname}) => {

    return (

        <section 
            className={cn(styles.wrapper, {
                    [styles.bg]:isBg
                },
                classname
            )}
        >
            <div className={cn('container')}>
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
                
                {children}
                
            </div>
        </section>
    )
}
