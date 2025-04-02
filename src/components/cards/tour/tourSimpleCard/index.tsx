import React, { HTMLProps } from "react";
import cls from "classnames";
import { useState } from "react";

import styles from "./tourSimpleCard.module.scss";

import { 
    Paragraph,
    Headline,
    Rating
} from "@/ui";
import Link from "next/link";


interface ITTourSimpleCard extends Omit<HTMLProps<HTMLDivElement>, 'id'> {
    id: number,
    name: string,
    description: string,
    link: string,
    complexity: number,
    image: string,
    classnames?: string 
}

export const TourSimpleCard: React.FC<ITTourSimpleCard> = ({id, name, description, link, complexity, classnames, image, ...rest}) => {

    return (
        <Link href={`/tours/${id}`}>
            <div 
                style = {{ backgroundImage: 'url('+ image +')' }}
                className={cls(
                    styles.card, 
                    classnames,
                )} {...rest}
            >
                <div className={styles.content_layout}>
                    <div className={styles.content}>
                        <Paragraph classname={styles.text}>
                            {description}
                        </Paragraph>
                        <Headline
                            color='white'
                            type='subsection'
                            classname={styles.title}
                        >
                            {name}
                        </Headline>

                        <Rating 
                            type = "human"
                            rating = {complexity}
                            size = {16}
                        /> 
                    </div> 
                </div>           
            </div>
        </Link>
    );
};