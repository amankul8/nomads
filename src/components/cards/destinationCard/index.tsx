import { headlineColorTypes, headlineFontFamilyTypes, headlineTagTypes, SimpleHeadline } from "@/ui";
import Image from "next/image";
import React from "react";
import styles from "./DestinationCard.module.css";

export const DestinationCard = ():JSX.Element =>{

    return(
        <div className={styles.card_wrapper}>
            <Image
                src={'https://mcdn.wallpapersafari.com/medium/41/66/2pefBJ.jpg'}
                width={320}
                height={210}
                alt={''}
                className={styles.bg}
            />
            <div className={styles.content}>
                <SimpleHeadline
                    color={headlineColorTypes.white}
                    fontFamily={headlineFontFamilyTypes.montserrat}
                    tag={headlineTagTypes.h3}
                >
                    Bishkek
                </SimpleHeadline>
            </div>
        </div>
    )
}