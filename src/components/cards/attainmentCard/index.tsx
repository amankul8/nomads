import { SubHeaderContent } from "@/components/content";
import { Paragraph, Headline } from "@/ui";
import React, { ReactElement } from "react";
import styles from './AttainmentCard.module.css';

interface IAttainmentBlock{
    title: string,
    description: string,
    Icon: ReactElement<any, any>
}

export const AttainmentCard=({Icon, description, title}:IAttainmentBlock):JSX.Element=>{

    return (
        <section className={styles.card_wrapper}>
            {Icon}
            <Headline
                type='normal'
                color='black'
                classname={styles.title}
            >
                {title}
            </Headline>
            <Paragraph
                classname={styles.destination}
            >
                {description}
            </Paragraph>
        </section>
    )
}