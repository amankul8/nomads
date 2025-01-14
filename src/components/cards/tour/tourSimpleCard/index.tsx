import Image from "next/image";
import { useRouter } from "next/router";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import cls from "classnames";
import { useState } from "react";

import styles from "./tourSimpleCard.module.scss";

import { 
    Paragraph,
    Headline,
    Rating
} from "@/ui";


interface ITTourSimpleCard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    name: string,
    description: string,
    link: string,
    complexity: number,
    image: string,
    classnames?: string 
}

export const TourSimpleCard: React.FC<ITTourSimpleCard> = ({ name, description, link, complexity, classnames, image, ...rest}) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);
    
    const handleMousOver = () =>{
        setIsHovered(true);
    }

    const handleMouseOut = () => {
        setIsHovered(false);
    }

    return (
        <div 
            style = {{ backgroundImage: 'url('+ image +')' }}
            className={cls(
                styles.card, 
                classnames,
                { [styles.hovered]: isHovered }
            )} {...rest}
        >
            <div className={styles.content}>
                <Paragraph>
                    {description}
                </Paragraph>
                <Headline
                    color='white'
                    type='subsection'
                >
                    {name}
                </Headline>

                <Rating 
                    type = "human"
                    rating = {complexity}
                    size = {16}
                /> 
            </div>            
        </div>
    );
};