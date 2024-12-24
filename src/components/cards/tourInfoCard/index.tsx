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
import Star from "public/icons/ratingIcons/star.svg";

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
                [styles.list_card]: isList
            }) }
            
            {...rest}
            
            onMouseOver={()=>{
                setHovered(true);
            }}

            onMouseOut={()=>{
                setHovered(false);
            }}
        >
            <div className={styles.card_promotion}>
                {promotion + '%'}
            </div>
            <div className={styles.card_price}>
                <Ticket/>
                {price + " USD"}
            </div>

            <div 
                className={styles.card_image}
                style={{backgroundImage: 'url('+ image +')'}}
            />

            <div className={styles.card_content}>
                <div className={styles.curcle}>
                    <Trekking/>
                </div>

                <div className={styles.card_info}>
                    <SimpleHeadline
                        color={headlineColorTypes.black}
                        fontFamily={headlineFontFamilyTypes.montserrat}
                        tag={headlineTagTypes.h4}
                    >
                        Card title
                    </SimpleHeadline>

                    <div className={styles.card_subtitle}>
                        <div className={styles.review}>
                            <Star/> <span> {rating} </span>
                            {'(' + reviewsCount + 'reviews' + ')'}
                        </div>
                        <div className={styles.countries}>
                            {countries.join(', ')}
                        </div>
                    </div>

                    <Paragraph
                        color={textColor.black}
                        fontFamily={textFamily.openSanse}
                        size={textSize.m}
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </Paragraph>

                    <div className={styles.card_proporties}>
                        <TourProperty
                            type={TourPropertyType.culture}
                            color="var(--blue)"
                        />
                        <TourProperty
                            type={TourPropertyType.cycle}
                            color="var(--blue)"
                        />
                        <TourProperty
                            type={TourPropertyType.family}
                            color="var(--blue)"
                        />
                        <TourProperty
                            type={TourPropertyType.horse_ridding}
                            color="var(--blue)"
                        />
                        <TourProperty
                            type={TourPropertyType.jeep}
                            color="var(--blue)"
                        />
                        <TourProperty
                            type={TourPropertyType.multiactive}
                            color="var(--blue)"
                        />
                        <TourProperty
                            type={TourPropertyType.paragliding}
                            color="var(--blue)"
                        />
                        <TourProperty
                            type={TourPropertyType.rafting}
                            color="var(--blue)"
                        />
                    </div>

                    <Rating
                        rating={4}
                        color="var(--blue)"
                        type="human"
                        size={20}
                    />

                    <div className={styles.card_days}>
                        <TourProperty
                            type={TourPropertyType.day}
                            color="var(--blue)"
                            days={12}
                        />
                        <TourProperty
                            type={TourPropertyType.night}
                            color="var(--blue)"
                            days={11}
                        />
                    </div>
                </div>

                <div className={styles.list_card_proporties}>
                    <TourProperty
                        type={TourPropertyType.culture}
                        color="var(--blue)"
                    />
                    <TourProperty
                        type={TourPropertyType.cycle}
                        color="var(--blue)"
                    />
                    <TourProperty
                        type={TourPropertyType.family}
                        color="var(--blue)"
                    />
                    <TourProperty
                        type={TourPropertyType.horse_ridding}
                        color="var(--blue)"
                    />
                    <TourProperty
                        type={TourPropertyType.jeep}
                        color="var(--blue)"
                    />
                    <TourProperty
                        type={TourPropertyType.multiactive}
                        color="var(--blue)"
                    />
                    <TourProperty
                        type={TourPropertyType.paragliding}
                        color="var(--blue)"
                    />
                    <TourProperty
                        type={TourPropertyType.rafting}
                        color="var(--blue)"
                    />
                </div>

                <div className={styles.card_btn}>
                    Discover This Trip
                </div>
            </div>
        </div>
    )
}
