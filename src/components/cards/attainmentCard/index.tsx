import { SubHeaderContent } from "@/components/content";
import { headlineColorTypes, headlineFontFamilyTypes, headlineTagTypes, Paragraph, SimpleHeadline, textColor, textFamily, textSize } from "@/ui";
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
            <SimpleHeadline
                color={headlineColorTypes.black}
                fontFamily={headlineFontFamilyTypes.montserrat}
                tag={headlineTagTypes.h3}
                classname={styles.title}
            >
                {title}
            </SimpleHeadline>
            <Paragraph
                color={textColor.black}
                fontFamily={textFamily.openSanse}
                size={textSize.m}
                classname={styles.destination}
            >
                {description}
            </Paragraph>
        </section>
    )
}