import { 
    SimpleHeadline, 
    headlineColorTypes, 
    headlineFontFamilyTypes, 
    headlineTagTypes,
    Paragraph,
    textColor,
    textFamily,
    textSize
} from "@/ui";
import { Ptag } from "@/components/tagComponents/Ptag";
import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./TripCard2.module.css";
import ClockIcon from "public/icons/cardIcons/ClockIcon.svg";
import { LittleMan } from "../iconComponents/littleMan";

interface IToureCard2Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    imageUrl: string,
    price: number,
    title: string,
    text: string,
    days: number,
    rating: number
}

export const TripCard2 = ():JSX.Element=>{

    return(
        <div className={styles.wrapper}>
            <div className={styles.image_wrapper}>
                <Image
                    src={'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg'}
                    alt={''}
                    width={1000}
                    height={1000}
                    className={styles.image}
                />
                <div className={styles.price}></div>
                <div className={styles.trip}></div>
            </div>
            <div className={styles.text_wrapper}>
                <SimpleHeadline 
                    tag={headlineTagTypes.h3}
                    color={headlineColorTypes.black}
                    fontFamily={headlineFontFamilyTypes.montserrat}
                >
                    Kyrgyzstan lorem Ipsum
                </SimpleHeadline>
                <Paragraph
                    size={textSize.m}
                    color={textColor.blackGray}
                    fontFamily={textFamily.openSanse}
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea animi voluptatum id eum iste vero facilis quos sunt hic aperiam dignissimos ullam fugit fuga aspernatur veritatis cupiditate, ipsum quasi! dolore temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Paragraph>
            </div>
            <div className={styles.time_rating_wrapper}>
                <div className={styles.time}>
                    <ClockIcon className={styles.clock_icon}/>
                    <span> 12 days </span>
                </div>
                <div className={styles.rating}>
                    <LittleMan className={styles.little_man_icon} opacity={1}/>
                    <LittleMan className={styles.little_man_icon} opacity={1}/>
                    <LittleMan className={styles.little_man_icon} opacity={1}/>
                    <LittleMan className={styles.little_man_icon} opacity={1}/>
                    <LittleMan className={styles.little_man_icon} opacity={1}/>
                    <LittleMan className={styles.little_man_icon} opacity={1}/>
                </div>
            </div>
            <button className={styles.button}>
                Discover This Trip
            </button>
        </div>
    )
}
