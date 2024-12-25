import React, { DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import cls from "classnames";

import styles from "./rating.module.scss";
import { Span } from '../texts/span';
import { textColor, textFamily, textSize } from '../texts/types';
import HumanIcon from "public/icons/ratingIcons/human.svg";
import StarIcon from "public/icons/ratingIcons/star.svg";

type RatingType = 'star' | 'human';

interface IRating extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    type: RatingType
    rating: number,
    size?: number,
    color?: string
}

export const Rating:React.FC<IRating> = ({rating, type, size = 18, color = 'white',  ...rest}) =>{

    let Icon = HumanIcon;

    if(type == 'star') {
        Icon = StarIcon;
    }

    let percentageRating = rating * 100 / 5;

    let ratingStyle = {
        width: size+'px',
        fill: color
    }

    return (
        <div className={styles.rating} {...rest}>
            <div 
                className={styles.icons}
                style={{width: percentageRating+'%'}}
            >
                <Icon style={ratingStyle}/>
                <Icon style={ratingStyle}/>
                <Icon style={ratingStyle}/>
                <Icon style={ratingStyle}/>
                <Icon style={ratingStyle}/>
            </div>

            <div className={styles.shadows}>
                <Icon style={ratingStyle}/>
                <Icon style={ratingStyle}/>
                <Icon style={ratingStyle}/>
                <Icon style={ratingStyle}/>
                <Icon style={ratingStyle}/>
            </div>
        </div>
    )
}