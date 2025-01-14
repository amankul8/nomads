import { SubHeaderContent } from "@/components/content";
import { Paragraph, Headline } from "@/ui";
import React, { ReactElement } from "react";
import styles from './AttainmentCard.module.css';
import Icon1 from "@/components/icons/attainment/icon_1.svg";
import Icon2 from "@/components/icons/attainment/icon_2.svg";
import Icon3 from "@/components/icons/attainment/icon_3.svg";
import Icon4 from "@/components/icons/attainment/icon_4.svg";

interface IAttainmentCard{
    id: number
    title: string,
    description: string,
}

export const AttainmentCard=({id, description, title}:IAttainmentCard):JSX.Element=>{

    let Icon = Icon1;

    switch(id) {
        case 1: 
            Icon = Icon1;
            break;
        case 2: 
            Icon = Icon2;
            break;
        case 3: 
            Icon = Icon3;
            break;
        case 4: 
            Icon = Icon4;
            break;    
    }

    return (
        <section className={styles.card_wrapper}>
            <Icon/>
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