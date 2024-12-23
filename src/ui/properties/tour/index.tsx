import { extend } from "leaflet";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import styles from "./tourProperties.module.scss";

export enum TourPropertyType {
    day,
    night,
    trekking,
    horse_ridding,
    jeep,
    paragliding,
    photo,
    family,
    culture,
    show_shoes,
    cycle,
    wild,
    multiactive,
    rafting,
    sightseen
}

interface ITourProperty extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    type: TourPropertyType,
    color: string,

}

export const TourProperty: React.FC<ITourProperty> = ({type, color}) => {
    return (
        <div className={styles.wrapper}>
            
        </div>
    )
}

