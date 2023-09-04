import { btnBorderSizeType, btnColorType, btnViewType, Button, headlineColorTypes, headlineFontFamilyTypes, headlineTagTypes, InputDate, SimpleHeadline } from "@/ui";
import React from "react";
import styles from "./TourSearch.module.css";
import {SelectList, SelectCheckbox} from "@/ui";


export const TourSearch=():JSX.Element=>{
    

    return (
        <section className={styles.wrapper}>
            <SimpleHeadline
                color={headlineColorTypes.black}
                fontFamily={headlineFontFamilyTypes.montserrat}
                tag={headlineTagTypes.h3}
                classname={styles.title}
            > 
                SEARCH FOR TOUR
            </SimpleHeadline>
            <form action="" className={styles.form}>
                <SelectList 
                    label="Destinations"
                    className={styles.formItem}
                />
                <SelectList
                    label="Duration"
                    className={styles.formItem}
                />

                <SelectCheckbox
                    label="Level"
                    className={styles.formItem}
                />

                <div className={styles.inputDateBlock}>
                    <InputDate
                        label="From"
                    />
                    <InputDate
                        label="To"
                    />
                </div>

                <Button
                    btnColor={btnColorType.blue}
                    btnSize={btnBorderSizeType.l}
                    btnView={btnViewType.button}
                    enabled={true}
                    classname={styles.submit_btn}
                >
                    Search
                </Button>
            </form>
        </section>
    )
} 