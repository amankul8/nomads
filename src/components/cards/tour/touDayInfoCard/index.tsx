import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import styles from "./touDayCard.module.scss";
import cls from "classnames";
import { Headline, Paragraph } from "@/ui";
import Image from "next/image";
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

interface ITourDayInfoCard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

};


export const TourDayInfoCard:React.FC<ITourDayInfoCard> = () => {

    return (
        <div className={styles.card}>
            <Headline color="blue" type="subsection" classname={styles.head}> Day 1: Bishkek – Ala Archa – Koi Tash  </Headline>
            <div className={styles.left_side}>
                <div className={styles.info}>
                    <Paragraph> After breakfast transfer to the Ala-Archa National Park. In an hour you will be in the alpine gorge through which the fast flowing Ala-Archa River runs, flanked by tall, snow-covered peaks, steep-sided, fir - forested mountain slopes and alpine meadows cowered with flowers. You will start your walk from the alpine camp to Ak-Sai waterfall–the height is 35 m. The path goes through conifer forest and alpine meadows. Return back to the alpine camp. Transfer to Koi Tash. Overnight in Jannat Resort.  </Paragraph>
                </div>

                <div className={styles.more}>
                    <Paragraph> <span> Meals: </span> Breakfast, lunch, dinner </Paragraph>
                    <Paragraph> <span> Accommodation: </span> Hotel </Paragraph>
                    <Paragraph> <span> Destinations: </span>  Karakol, Hotel, Hotel </Paragraph>
                    <Paragraph> <span> Entertainment: </span> Eagle show </Paragraph>
                </div>
            </div>
            <div className={styles.right_side}>
                <figure className={styles.image}>
                    <Image
                        src={'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg'}
                        width={1920}
                        height={1080}
                        alt=""
                    />
                </figure>
                <div className={styles.details}>
                    <div className={styles.detail}> 
                        <AirportShuttleIcon/> 
                        <span> 40km 2hr </span>     
                    </div>
                    <div className={styles.detail}> 
                        <AirportShuttleIcon/> 
                        <span> 40km 2hr </span>     
                    </div>

                    <div className={styles.detail}> 
                        <AirportShuttleIcon/> 
                        <span> 40km 2hr </span>     
                    </div>
                    <div className={styles.detail}> 
                        <AirportShuttleIcon/> 
                        <span> 40km 2hr </span>     
                    </div>
                </div>
            </div>
        </div>
    )
}

