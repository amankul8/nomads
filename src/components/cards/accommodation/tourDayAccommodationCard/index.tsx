import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import styles from "./tourDayAccommodationCard.module.scss";
import { Headline, Paragraph } from "@/ui";

import HotelIcon from '@mui/icons-material/Hotel';
import Image from "next/image";

interface ITourDayAccommodationCard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

};

export const TourDayAccommodationCard:React.FC<ITourDayAccommodationCard> = () => {
    return (
        <div className={styles.card}>
            <div className={styles.topbar}>
                 <Headline color="black" type="subsection"> Day 1. Karakol </Headline>
            </div>

            <div className={styles.subcard}>
                <Headline color="black" type="normal"> Economy: </Headline>
                <Paragraph classname={styles.bread_crumbs}> Karagat Karakol / Karagat Karakol / Karagat Karakol / Karagat Karakol </Paragraph>
                <div className={styles.includes}> 
                    <div className={styles.include}>
                        <HotelIcon/>
                        Share room
                    </div>
                    <div className={styles.include}>
                        <HotelIcon/>
                        Share room
                    </div>
                    <div className={styles.include}>
                        <HotelIcon/>
                        Share room
                    </div>
                    <div className={styles.include}>
                        <HotelIcon/>
                        Share room
                    </div>
                </div> 
                <div className={styles.images}>
                    <Image
                        src=""
                        width={300}
                        height={200}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}