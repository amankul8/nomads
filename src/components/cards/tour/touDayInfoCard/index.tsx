import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import styles from "./touDayCard.module.scss";
import { Headline, Paragraph } from "@/ui";
import Image from "next/image";
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import HikingIcon from '@mui/icons-material/Hiking';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import SailingIcon from '@mui/icons-material/Sailing';
import { TourDayType } from "@/store/models/tours/types";
import { Box } from "@mui/material";
import { useAppSelector } from "@/store/hooks";
import { selectDestinationsByIds } from "@/store/slices/destinations.slice";
import { selectActivitiesByIds } from "@/store/slices/activities.slice";
import { selectAccommodationsByIds } from "@/store/slices/accommodations";

interface ITourDayInfoCard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    day: TourDayType
};

const mealsMatch: Record<number, string> = {
    1: 'Breakfast',
    2: 'Lunch',
    3: 'Dinner',
}

export const TourDayInfoCard: React.FC<ITourDayInfoCard> = ({ day }) => {

    const destinations = useAppSelector(selectDestinationsByIds(day.destinations));
    const enterainments = useAppSelector(selectActivitiesByIds(day.entertainments));
    const accommodations = useAppSelector(selectAccommodationsByIds(day.accommodations));

    return (
        <div className={styles.card}>
            <Headline color="blue" type="subsection" classname={styles.head}> {day.name} </Headline>
            <div className={styles.left_side}>
                <div className={styles.info}>
                    <Paragraph>
                        {day.description}
                    </Paragraph>
                </div>

                <div className={styles.more}>
                    <Box
                        sx={{ display: 'flex', gap: 2 }}
                    >
                        <span> Meals: </span>
                        {day.meals.map((item, index) => (
                            <Box key={index}>
                                {mealsMatch[item]}
                            </Box>
                        ))}
                    </Box>
                    <Box
                        sx={{ display: 'flex', gap: 2 }}
                    >
                        <span> Accommodation: </span>
                        {
                            accommodations
                            &&
                            accommodations.map((item, index) => {
                                return (
                                    <Box key={index}>
                                        {item.name}
                                    </Box>
                                )
                            })
                        }
                    </Box>

                    <Box
                        sx={{ display: 'flex', gap: 2 }}
                    >
                        <span> Destinations: </span>
                        {
                            destinations && destinations.length > 0
                                ?
                                destinations.map((item, index) => {
                                    return (
                                        <Box key={index}>
                                            {item.title}
                                        </Box>
                                    )
                                })
                                : null

                        }
                    </Box>

                    <Box
                        sx={{ display: 'flex', gap: 2 }}
                    >
                        <span> Entertainment: </span>
                        {
                            enterainments && enterainments.length > 0
                                ?
                                enterainments.map((item, index) => {
                                    return (
                                        <Box key={index}>
                                            {item.title}
                                        </Box>
                                    )
                                })
                                : null

                        }
                    </Box>
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
                    {day.details.car_range && (
                        <div className={styles.detail}>
                            <AirportShuttleIcon />
                            <span>{day.details.car_range} km</span>
                        </div>
                    )}

                    {day.details.foot_range && (
                        <div className={styles.detail}>
                            <HikingIcon />
                            <span>{day.details.foot_range} km</span>
                        </div>
                    )}

                    {day.details.horse_time && (
                        <div className={styles.detail}>
                            <BedroomBabyIcon />
                            <span>{day.details.horse_time} km</span>
                        </div>
                    )}

                    {day.details.ski_range && (
                        <div className={styles.detail}>
                            <DownhillSkiingIcon />
                            <span>{day.details.ski_range} km</span>
                        </div>
                    )}

                    {day.details.cycle_range && (
                        <div className={styles.detail}>
                            <DirectionsBikeIcon />
                            <span>{day.details.cycle_range} km</span>
                        </div>
                    )}

                    {day.details.boat_range && (
                        <div className={styles.detail}>
                            <SailingIcon />
                            <span>{day.details.boat_range} km</span>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

