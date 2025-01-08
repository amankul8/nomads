import React, { DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import cls from "classnames";
import styles from "./rating.module.scss";
import HumanIcon from "public/icons/ratingIcons/human.svg";
import StarIcon from "public/icons/ratingIcons/star.svg";

type RatingType = 'star' | 'human';

interface IRating extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    type: RatingType
    rating: number,
    size?: number,
    color?: 'white' | 'blue' | 'red'
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
                className={cls(styles.icons, {
                    [styles.blue]: color == 'blue',
                    [styles.white]: color == 'white',
                    [styles.red]: color == 'red',
                })}
                style={{width: percentageRating+'%'}}
            >
                <Icon/>
                <Icon/>
                <Icon/>
                <Icon/>
                <Icon/>
            </div>

            <div className={cls(styles.shadows, {
                [styles.blue]: color == 'blue',
                [styles.white]: color == 'white',
                [styles.red]: color == 'red',
            })}>
                <Icon/>
                <Icon/>
                <Icon/>
                <Icon/>
                <Icon/>
            </div>
        </div>
    )
}