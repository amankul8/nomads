import React, { ReactNode, useEffect, useState } from 'react';
import styles from "./StarRating.module.css";
import cn from "classnames";
import Star from "public/icons/ratingIcons/star.svg";
import { Span } from '../texts/span';
import { textColor, textFamily, textSize } from '../texts/types';

interface IGrade{
    className?: string,
    grade: number
}

export const StarRating = ({grade, className}:IGrade):JSX.Element =>{

    const numArr = [1,2,3,4,5] 
    const whole = Math.ceil(grade);
    const remainder = grade % 1;

    return(
        <div className={cn(styles.grade_wrapper, className)}>
            {
                numArr.map((item)=>{
                    return(
                        <Star 
                            key={item}
                            className={cn(styles.star)}
                            style={{
                                fill:item < whole?'white': 
                                item === whole? `rgba(255,255,255, ${remainder})`:''
                            }}
                        />
                    )
                })
            }
            <Span
                color={textColor.white}
                fontFamily={textFamily.montserrat}
                size={textSize.l}
                classname={styles.grade}
            >
                {grade}
            </Span>
        </div>
    )
}