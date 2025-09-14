import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import cls from 'classnames';

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
import { Paragraph } from "@/ui/texts/paragraph";

export enum TourActivityType {
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

interface ITourActivity extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    type: TourActivityType,
    color: 'white' | 'blue' | 'red',
    days?: number
}

export const TourActivity: React.FC<ITourActivity> = ({type, color, days}) => {

    let Icon = Day;
    let name = 'Days';
    let dayCount =  days? days: '';

    switch( type ) {
        case TourActivityType.night:
            Icon = Night;
            name = 'Nights';
            break;
        case TourActivityType.trekking:
            Icon = Trekking;
            name = 'Trekking';
            break;
        case TourActivityType.horse_ridding:
            Icon = Horse_ridding;
            name = 'Horse ridding';
            break;
        case TourActivityType.jeep:
            Icon = Jeep;
            name = 'Jeep';
            break;
        case TourActivityType.paragliding:
            Icon = Paragliding;
            name = 'Paragliding';
            break;
        case TourActivityType.photo:
            Icon = Photo;
            name = 'Photo';
            break;    
        case TourActivityType.family:
            Icon = Family;
            name = 'Family';
            break;
        case TourActivityType.culture:
            Icon = Culture;
            name = 'Culture';
            break;
        case TourActivityType.show_shoes:
            Icon = Show_shoes;
            name = 'Show shoes';
            break;
        case TourActivityType.cycle:
            Icon = Cycle;
            name = 'Cycle';
            break;
        case TourActivityType.wild:
            Icon = Wild;
            name = 'Wild';
            break;
        case TourActivityType.multiactive:
            Icon = Multiactive;
            name = 'Multiactive';
            break;
        case TourActivityType.rafting:
            Icon = Rafting;
            name = 'Rafting';
            break;
        case TourActivityType.sightseen:
            Icon = Sightseen;
            name = 'Sightseen';
            break;
        default:
            Icon = Day;
            name = 'Days';
            break;    
    }

    return (
        <div className={styles.activity}>
            <Icon className={cls({
                [styles.blue]: color == 'blue',
                [styles.white]: color == 'white',
                [styles.red]: color == 'red'
            })} />
            <Paragraph classname={styles.text}>
                {dayCount + ' ' + name}
            </Paragraph>
        </div>
    )
}

