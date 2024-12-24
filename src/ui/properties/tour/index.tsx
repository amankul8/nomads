import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import styles from "./tourProperties.module.scss";

import Day from "public/icons/tour/properties/day.svg";
import Night from "public/icons/tour/properties/night.svg";
import Trekking from "public/icons/tour/properties/trekking.svg";
import Horse_ridding from "public/icons/tour/properties/horseRiding.svg";
import Jeep from "public/icons/tour/properties/jeep.svg";
import Paragliding from "public/icons/tour/properties/paragliding.svg";
import Photo from "public/icons/tour/properties/photo.svg";
import Family from "public/icons/tour/properties/family.svg";
import Culture from "public/icons/tour/properties/culture.svg";
import Show_shoes from "public/icons/tour/properties/showShoes.svg";
import Cycle from "public/icons/tour/properties/cycle.svg";
import Wild from "public/icons/tour/properties/wild.svg";
import Multiactive from "public/icons/tour/properties/multiactive.svg";
import Rafting from "public/icons/tour/properties/rafting.svg";
import Sightseen from "public/icons/tour/properties/sightseen.svg";

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
    days?: number
}

export const TourProperty: React.FC<ITourProperty> = ({type, color, days}) => {

    let Icon = Day;
    let name = 'Days';
    let dayCount =  days? days: '';

    switch( type ) {
        case TourPropertyType.night:
            Icon = Night;
            name = 'Nights';
            break;
        case TourPropertyType.trekking:
            Icon = Trekking;
            name = 'Trekking';
            break;
        case TourPropertyType.horse_ridding:
            Icon = Horse_ridding;
            name = 'Horse ridding';
            break;
        case TourPropertyType.jeep:
            Icon = Jeep;
            name = 'Jeep';
            break;
        case TourPropertyType.paragliding:
            Icon = Paragliding;
            name = 'Paragliding';
            break;
        case TourPropertyType.photo:
            Icon = Photo;
            name = 'Photo';
            break;    
        case TourPropertyType.family:
            Icon = Family;
            name = 'Family';
            break;
        case TourPropertyType.culture:
            Icon = Culture;
            name = 'Culture';
            break;
        case TourPropertyType.show_shoes:
            Icon = Show_shoes;
            name = 'Show shoes';
            break;
        case TourPropertyType.cycle:
            Icon = Cycle;
            name = 'Cycle';
            break;
        case TourPropertyType.wild:
            Icon = Wild;
            name = 'Wild';
            break;
        case TourPropertyType.multiactive:
            Icon = Multiactive;
            name = 'Multiactive';
            break;
        case TourPropertyType.rafting:
            Icon = Rafting;
            name = 'Rafting';
            break;
        case TourPropertyType.sightseen:
            Icon = Sightseen;
            name = 'Sightseen';
            break;
        default:
            Icon = Day;
            name = 'Days';
            break;    
    }

    return (
        <div 
            className={styles.property} 
        >
            <Icon/> {dayCount + ' ' + name}
        </div>
    )
}

