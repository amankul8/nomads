import React, { DetailedHTMLProps, HTMLAttributes, useState } from "react";
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
import Star from "@/components/icons/rating/star.svg";
import { Link } from "@mui/material";

interface ITourInfoCard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    tourId: number,
    name: string,
    description: string,
    image: string,
    days: number | undefined,
    price: number | null,
    promotion: number | null,
    countries: String[],
    complexity: number | null,
    rating: number | null,
    reviewsCount: number | null,
    classname?: string,

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
    tourId,
    name,
    description,
    image,
    days,
    price,
    promotion,
    countries,
    complexity,
    rating,
    reviewsCount,
    classname,

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
                }, 
                classname
            )}
            
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
                        {name}
                    </Headline>

                    <div className={styles.card_subtitle}>
                        <div className={styles.review}>
                            <Star/> <span> {rating} </span>
                            {'(' + rating + ' reviews' + ')'}
                        </div>
                        <div className={styles.countries}>
                            {countries.join(', ')}
                        </div>
                    </div>

                    <Paragraph classname={styles.text}>
                        {description}
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
                                days={days}
                            />
                            <TourActivity
                                type={TourActivityType.night}
                                color="blue"
                                days={days! - 1}
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

                <Link href="/tours/1" className={cls('btn', styles.card_btn)}>
                        Discover This Trip
                </Link>
            </div>
        </div>
    )
}
