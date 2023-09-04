import React from "react";
import styles from "./PopularToursBlock.module.css";
import { TripCard2 } from "@/components/cards/TripCard2";
import { btnBorderSizeType, btnColorType, btnViewType, Button, headlineColorTypes, headlineFontFamilyTypes, headlineTagTypes, SimpleHeadline } from "@/ui";

export const PopularToursBlock = ():JSX.Element=>{

    return(
        <section className={styles.wrapper}>
            <SimpleHeadline
                color={headlineColorTypes.black}
                fontFamily={headlineFontFamilyTypes.montserrat}
                tag={headlineTagTypes.h2}
                classname={styles.title}
            >
                Find our popular tours
            </SimpleHeadline>    
            <div className={styles.cards}>
                <TripCard2 />
                <TripCard2 />
                <TripCard2 />
                <TripCard2 />
            </div>
            <Button
                btnColor={btnColorType.blue}
                btnView={btnViewType.button}
                btnSize={btnBorderSizeType.xl}
                classname={styles.button}
                enabled={true}
            >
                Discover
            </Button>
        </section>
    )
}