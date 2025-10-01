import React, { useEffect } from "react";
import styles from "./tourDayAccommodationCard.module.scss";
import { Headline } from "@/ui";
import { AccommodationRoomCard } from "../accommodationRoomCard";
import { useAppSelector } from "@/store/hooks";
import { selectAccommodationsByIds } from "@/store/slices/accommodations";

interface ITourDayAccommodationCard extends React.HTMLAttributes<HTMLDivElement> {
  accommodationsIds: number[];
  day: number;
}

export const TourDayAccommodationCard: React.FC<ITourDayAccommodationCard> = React.memo(({ accommodationsIds, day }) => {
  const accommodations = useAppSelector(selectAccommodationsByIds(accommodationsIds));

  if (!accommodations?.length) return null;

  return (
    <div className={styles.card}>
      <div className={styles.topbar}>
        <Headline color="black" type="subsection"> Day {day}. </Headline>
      </div>

      {accommodations.map((accommodation) => (
        <AccommodationRoomCard accommodation={accommodation} key={accommodation.id} />
      ))}
    </div>
  );
});
