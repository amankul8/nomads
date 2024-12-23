import Image from "next/image";
import { useRouter } from "next/router";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import cls from "classnames";
import { useState } from "react";

import styles from "./tourSimpleCard.module.scss";
import { 
    Paragraph,
    textColor,
    textFamily,
    textSize,

    SimpleHeadline,
    headlineColorTypes,
    headlineFontFamilyTypes,
    headlineTagTypes,

    Rating
} from "@/ui";


interface ITTourSimpleCard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    title: string,
    text: string,
    link: string,
    rating: number,
    image: string,
    classnames?: string 
}

export const TourSimpleCard: React.FC<ITTourSimpleCard> = ({ title, text, link, rating, classnames, image, ...rest}) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);
    
    const handleMousOver = () =>{
        setIsHovered(true);
    }

    const handleMouseOut = () => {
        setIsHovered(false);
    }

    return (
        <div 
            style = {{ backgroundImage: 'url('+ image +')' }}
            className={cls(
                styles.tour, 
                classnames,
                { [styles.hovered]: isHovered }
            )} {...rest}
        >
            <div className={styles.content}>
                <Paragraph
                    size={textSize.m}
                    color={textColor.white}
                    fontFamily={textFamily.openSanse}

                >
                    {text}
                </Paragraph>
                <SimpleHeadline
                    color={headlineColorTypes.white}
                    fontFamily={headlineFontFamilyTypes.caveatBrush}
                    tag={headlineTagTypes.h2}
                >
                    {title}
                </SimpleHeadline>

                <Rating 
                    type = "human"
                    rating = {3}
                    size = {16}
                /> 
            </div>            
        </div>
    );
};