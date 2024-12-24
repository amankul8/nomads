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
    textSize,
    TourProperty,
    TourPropertyType,
} from "@/ui";
import Trekking from "public/icons/tour/properties/trekking.svg";
import Ticket from "public/icons/tour/properties/ticket.svg";

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
            className={ cls(styles.card, {
                [styles.hovered]: !isList && hovered,
                [styles.list]: isList
            }) }
            
            {...rest}
            
            onMouseOver={()=>{
                setHovered(true);
            }}

            onMouseOut={()=>{
                setHovered(false);
            }}
        >
            <div 
                className={styles.image}
                style={{backgroundImage: 'url(' + image + ')'}}
            />

            <div className={styles.info}>
                <div className={styles.curcle}>
                    <Trekking/>
                </div>

                <div className={styles.price}>
                    <Ticket/> 
                    { price + ' USD'}
                </div>

                <div className={styles.content}>
                    <div className={styles.content_info}>
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

                    <div className={styles.properties}>
                        <TourProperty 
                            color="var(--blue)" 
                            type={TourPropertyType.cycle} 
                        />
                        <TourProperty 
                            color="var(--blue)" 
                            type={TourPropertyType.family} 
                        />
                        <TourProperty 
                            color="var(--blue)" 
                            type={TourPropertyType.horse_ridding} 
                        />
                        <TourProperty 
                            color="var(--blue)" 
                            type={TourPropertyType.multiactive} 
                        />
                        <TourProperty 
                            color="var(--blue)" 
                            type={TourPropertyType.jeep} 
                        />
                        <TourProperty 
                            color="var(--blue)" 
                            type={TourPropertyType.paragliding} 
                        />
                        <TourProperty 
                            color="var(--blue)" 
                            type={TourPropertyType.photo} 
                        />
                    </div>

                    <div className={styles.icons_wrapper}>
                        <Rating
                            rating={4}
                            type="human"
                            color="var(--blue)"
                            size={20}
                        />
                        <div className={styles.days}>
                            <TourProperty 
                                color="var(--blue)" 
                                type={TourPropertyType.day} 
                                days={12}
                            />
                            <TourProperty 
                                color="var(--blue)" 
                                type={TourPropertyType.night} 
                                days={11}
                            />
                        </div> 
                    </div>
                </div>   

                <div className={styles.btn}>
                    Discover This Trip
                </div>
            </div>

            <div className={styles.promotion_ticket}>
                {promotion+'%'}
            </div>
        </div>
    )
}
