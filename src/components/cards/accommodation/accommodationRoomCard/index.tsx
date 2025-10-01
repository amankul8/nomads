'use client';

import React, { useEffect, useState } from "react";
import styles from "./accommodationRoomCard.module.scss";
import { Headline, Paragraph } from "@/ui";
import { AccommodationType } from "@/store/models/accommodations/type";
import { housingTypeMap } from "@/store/models/accommodations";
import {FallbackImage} from "../../image/FallbackImage";

// Icons
import BathtubIcon from '@mui/icons-material/Bathtub';
import IronIcon from '@mui/icons-material/Iron';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import WcIcon from '@mui/icons-material/Wc';

interface IAccommodationRoomCard {
  accommodation: AccommodationType;
}

export const AccommodationRoomCard: React.FC<IAccommodationRoomCard> = ({ accommodation }) => {
  const [images, setImages] = useState(accommodation.images || []);

  // Responsive image limit
  useEffect(() => {
    const updateImages = () => {
      const isDesktop = window.innerWidth > 768;
      const maxCount = isDesktop ? 4 : 2;
      const allImages = accommodation.images || [];

      setImages(allImages.slice(0, maxCount));
    };

    window.addEventListener("resize", updateImages);
    updateImages();

    return () => window.removeEventListener("resize", updateImages);
  }, [accommodation.images]);

  // Features config
  const features = [
    { key: "bath", label: "Bath", icon: <BathtubIcon /> },
    { key: "restaurant", label: "Restaurant", icon: <RestaurantIcon /> },
    { key: "laundry_ironing_services", label: "Laundry ironing services", icon: <IronIcon /> },
    { key: "shared_room", label: "Shared room", icon: <ConnectWithoutContactIcon /> },
    { key: "wifi", label: "Wifi", icon: <NetworkWifiIcon /> },
    { key: "toilet", label: "WC", icon: <WcIcon /> },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <Headline color="black" type="normal">
          {accommodation.name} ({housingTypeMap[accommodation.type]})
        </Headline>

        {accommodation.type === 1 && accommodation.stars && (
          <div className={styles.star}>{accommodation.stars}</div>
        )}
      </div>

      <Paragraph classname={styles.bread_crumbs}>
        {accommodation.description}
      </Paragraph>

      <div className={styles.includes}>
        {features.map(({ key, label, icon }) =>
          (accommodation.details as any)[key] ? (
            <div className={styles.include} key={key}>
              {icon}
              {label}
            </div>
          ) : null
        )}
      </div>

      <div className={styles.images}>
        {images.map((image, index) => {
          const isLast = index === images.length - 1;

          return (
            <figure className={styles.image} key={index}>
              <FallbackImage
                src={image.url}
                width={300}
                height={200}
                alt={image.alt || ""}
              />
              {isLast && (
                <div className={styles.text_layer}>+ 32 more</div>
              )}
            </figure>
          );
        })}
      </div>
    </div>
  );
};
