import React, { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";
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
import { useRouter } from "next/navigation";
import { type TourType } from "@/store/models/tours/types";
import { DEFAULT_IMAGE_URL } from "@/config";
import { validateImgUrlHelper } from "@/helpers";
import Link from "next/link";

interface ITourInfoCard {
    tour: TourType,
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


export const TourInfoCard: React.FC<ITourInfoCard> = ({
    tour,
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

    const router = useRouter();
    const [hovered, setHovered] = useState<boolean>(false);
    const [cardImg, setCardImg] = useState<string>();

    useEffect(() => {
        if (tour?.images?.[0]?.url) {
            const url = tour.images[0].url;

            validateImgUrlHelper(url, DEFAULT_IMAGE_URL)
                .then((validUrl) => {
                    setCardImg(validUrl);
                })
                .catch(() => {
                    setCardImg(DEFAULT_IMAGE_URL);
                });
        } else {
            setCardImg(DEFAULT_IMAGE_URL);
        }
    }, [tour]);

    return (
        <div
            className={cls(styles.card, {
                [styles.hovered]: !isList && hovered,
                [styles.list_card]: isList
            },
                classname
            )}

            {...rest}

            onMouseOver={() => {
                setHovered(true);
            }}

            onMouseOut={() => {
                setHovered(false);
            }}
        >
            <div className={styles.card_promotion}>
                {tour.promotion + '%'}
            </div>
            <div className={styles.card_price}>
                <Ticket />
                {tour.price + " USD"}
            </div>

            <div
                className={styles.card_image}
                style={{ backgroundImage: 'url(' + cardImg + ')' }}
            />

            <div className={styles.card_content}>
                <div className={styles.curcle}>
                    <Trekking />
                </div>

                <div className={styles.card_info}>
                    <Headline
                        color='black'
                        type='normal'
                    >
                        {tour.name}
                    </Headline>

                    <div className={styles.card_subtitle}>
                        <div className={styles.review}>
                            <Star /> <span> {tour.avg_reviews.avg} </span>
                            {'(' + tour.avg_reviews.avg + ' reviews' + ')'}
                        </div>
                        <div className={styles.countries}>
                            {tour.countries.join(', ')}
                        </div>
                    </div>

                    <Paragraph classname={styles.text}>
                        {tour.description}
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
                    </div>

                    <div className={styles.footer}>
                        <div className={styles.card_days}>
                            <TourActivity
                                type={TourActivityType.day}
                                color="blue"
                                days={tour.days.length}
                            />
                            <TourActivity
                                type={TourActivityType.night}
                                color="blue"
                                days={tour.days.length - 1}
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

                    <CustomButton
                        color="blue"
                        handler={() => router.push(`/tours/${tour.id}`)}
                        classname={styles.btn}
                    >
                        Discover
                    </CustomButton>
                </div>

                <Link href={`/tours/${tour.id}`} className={cls('btn', styles.card_btn)}>
                    Discover This Trip
                </Link>
            </div>
        </div>
    )
}
