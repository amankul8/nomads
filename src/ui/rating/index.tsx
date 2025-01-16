import React, { DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import cls from "classnames";
import styles from "./rating.module.scss";
import HumanIcon from "@/components/icons/rating/human.svg";
import StarIcon from "@/components/icons/rating/star.svg";

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
                <Icon style={{width: size}}/>
                <Icon style={{width: size}}/>
                <Icon style={{width: size}}/>
                <Icon style={{width: size}}/>
                <Icon style={{width: size}}/>
            </div>

            <div className={cls(styles.shadows, {
                [styles.blue]: color == 'blue',
                [styles.white]: color == 'white',
                [styles.red]: color == 'red',
            })}>
                <Icon style={{width: size}}/>
                <Icon style={{width: size}}/>
                <Icon style={{width: size}}/>
                <Icon style={{width: size}}/>
                <Icon style={{width: size}}/>
            </div>
        </div>
    )
}