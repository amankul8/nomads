import React, { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import {animate, motion} from 'framer-motion';
import cls from "classnames";

import styles from "./tourInfoCard.module.scss";
import { 
    CustomButton,
    Paragraph, 
    Rating, 
    Headline, 
    TourActivity,
    TourActivityType,
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
                    <Headline
                        color='black'
                        type='normal'
                    >
                        Card title
                    </Headline>

                    <div className={styles.card_subtitle}>
                        <div className={styles.review}>
                            <Star/> <span> {rating} </span>
                            {'(' + reviewsCount + 'reviews' + ')'}
                        </div>
                        <div className={styles.countries}>
                            {countries.join(', ')}
                        </div>
                    </div>

                    <Paragraph classname={styles.text}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </Paragraph>

                    <div className={styles.card_proporties}>
                        <TourActivity
                            type={TourActivityType.culture}
                            color="blue"
                        />
                        <TourActivity
                            type={TourActivityType.cycle}
                            color="blue"
                        />
                        <TourActivity
                            type={TourActivityType.family}
                            color="blue"
                        />
                        <TourActivity
                            type={TourActivityType.horse_ridding}
                            color="blue"
                        />
                        <TourActivity
                            type={TourActivityType.jeep}
                            color="blue"
                        />
                        <TourActivity
                            type={TourActivityType.multiactive}
                            color="blue"
                        />
                        <TourActivity
                            type={TourActivityType.paragliding}
                            color="blue"
                        />
                        <TourActivity
                            type={TourActivityType.rafting}
                            color="blue"
                        />
                    </div>

                    <div className={styles.footer}>
                        <div className={styles.card_days}>
                            <TourActivity
                                type={TourActivityType.day}
                                color="blue"
                                days={12}
                            />
                            <TourActivity
                                type={TourActivityType.night}
                                color="blue"
                                days={11}
                            />
                        </div>
                        <Rating
                            rating={3}
                            color="blue"
                            type="human"
                            size={16}
                        />
                    </div>
                </div>

                <div className={styles.list_card_proporties}>
                    <TourActivity
                        type={TourActivityType.culture}
                        color="blue"
                    />
                    <TourActivity
                        type={TourActivityType.cycle}
                        color="blue"
                    />
                    <TourActivity
                        type={TourActivityType.family}
                        color="blue"
                    />
                    <TourActivity
                        type={TourActivityType.horse_ridding}
                        color="blue"
                    />
                    <TourActivity
                        type={TourActivityType.jeep}
                        color="blue"
                    />
                    <TourActivity
                        type={TourActivityType.multiactive}
                        color="blue"
                    />
                    <TourActivity
                        type={TourActivityType.paragliding}
                        color="blue"
                    />
                    <TourActivity
                        type={TourActivityType.rafting}
                        color="blue"
                    />

                    <CustomButton 
                        color="blue"
                        handler={()=>{}}
                        classname={styles.btn}
                    >
                        Discover
                    </CustomButton>
                </div>

                <div className={cls('btn', styles.card_btn)}>
                    Discover This Trip
                </div>
            </div>
        </div>
    )
}
