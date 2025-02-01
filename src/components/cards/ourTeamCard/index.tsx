import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from './ourTeamCard.module.scss';
import cls from "classnames";
 
interface IOurTeamCard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    classname?: string
}

export const OurTeamCard:React.FC<IOurTeamCard> = ({classname, ...props}) => {
    return (
        <div className={styles.card}>   
            Our team
        </div>
    )
}