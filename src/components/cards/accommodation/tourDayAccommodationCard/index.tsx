import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import styles from "./tourDayAccommodationCard.module.scss";
import { Headline} from "@/ui";
import { AccommodationRoomCard } from "../accommodationRoomCard";

interface ITourDayAccommodationCard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

};

export const TourDayAccommodationCard:React.FC<ITourDayAccommodationCard> = () => {
    return (
        <div className={styles.card}>
            <div className={styles.topbar}>
                 <Headline color="black" type="subsection"> Day 1. Karakol </Headline>
            </div>

            <AccommodationRoomCard/>
            <AccommodationRoomCard/>
            <AccommodationRoomCard/>
        </div>
    )
}