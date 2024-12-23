import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import {animate, motion} from 'framer-motion';

interface ITourInfoCard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    name: string,
    description: string,
    image: string,
    days: number,
    price: number,
    promotion: number,
    link: string,
    countries: String[],
    rating: number,
    review: {
        rating: number,
        reviewsCount: number
    }

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
    rating,
    review,

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
}) => {

    return (
        <motion.div>
            
        </motion.div>
    )
}
