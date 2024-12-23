import React, { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import {animate, motion} from 'framer-motion';
import cls from "classnames";

import styles from "./tourInfoCard.module.scss";
import { 
    headlineColorTypes, 
    headlineFontFamilyTypes, 
    headlineTagTypes, 
    Paragraph, 
    Rating, 
    SimpleHeadline, 
    textColor,
    textFamily,
    textSize
} from "@/ui";

interface ITourInfoCard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    name: string,
    description: string,
    image: string,
    days: number,
    price: number,
    promotion: number,
    link: string,
    countries: String[],
    complexity: number,
    rating: number,
    reviewsCount: number

    isList?: boolean,
    isTrekking?: boolean,
    isSkiing?: boolean,
    isKayak?: boolean,
    isWild?: boolean,
    isHorsebackRiding?: boolean,
    isJeep?: boolean,
    isCyrcle?: boolean,
    isMotosycling?: boolean,
    isShowWalking?: boolean,
    isParagryiding?: boolean,
    isFamily?: boolean,
    isMultiactive?: boolean,
    isRafting?: boolean,
    isPhoto?: boolean,
    isCulture?: boolean,
    isSkating?: boolean,
}


export const TourInfoCard:React.FC<ITourInfoCard> = ({
    name,
    description,
    image,
    days,
    price,
    promotion,
    link,
    countries,
    complexity,
    rating,
    reviewsCount,

    isList,
    isTrekking,
    isSkiing,
    isKayak,
    isWild,
    isHorsebackRiding,
    isJeep,
    isCyrcle,
    isMotosycling,
    isShowWalking,
    isParagryiding,
    isFamily,
    isMultiactive,
    isRafting,
    isPhoto,
    isCulture,
    isSkating,
    ...rest
}) => {

    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div 
            className={
                styles.card
            }
            {...rest}
        >
            <div 
                className={styles.image}
                style={{backgroundImage: 'url(' + image + ')'}}
            />

            <div className={styles.info}>
                <div className={styles.curcle}>
                    {0}
                </div>

                <div className={styles.price}>
                    {price + ' USD'}
                </div>

                <div className={styles.content}>
                    <div>
                        <SimpleHeadline
                            color={headlineColorTypes.black}
                            fontFamily={headlineFontFamilyTypes.montserrat}
                            tag={headlineTagTypes.h4}
                        >
                            Title text
                        </SimpleHeadline> 

                        <Paragraph
                            color={textColor.black}
                            fontFamily={textFamily.openSanse}
                            size={textSize.m}
                        >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </Paragraph>
                    </div>

                    <Rating
                        rating={4}
                        type="human"
                        color="var(--blue)"
                        size={20}
                    />
                </div>   

                <div className={styles.btn}>

                </div>
            </div>

            <div className={styles.promotion_ticket}>
                {promotion+'%'}
            </div>
        </div>
    )
}
