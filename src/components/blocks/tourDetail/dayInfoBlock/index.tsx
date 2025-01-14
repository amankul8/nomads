import {Paragraph, Headline, Span } from "@/ui";
import Image from "next/image";

import styles from "./dayInfo.module.css";
import Car from "public/icons/tour/Car.svg";
import Mountain from "public/icons/tour/Mountain.svg";
import Man from "public/icons/tour/Man.svg";
import Level from "public/icons/tour/Level.svg"


export const DayInfoBlock = ():JSX.Element=>{
    return(
        <div className={styles.block_wrapper}>
            <div className={styles.right}>
                <Headline
                    type='subsection'
                    color='blue'
                    classname={styles.headline}
                >
                    Day 1-2: Airport – Bishkek – Chunkurchak
                </Headline>
                <Paragraph
                    classname={styles.text}
                >
                    Arrival in Bishkek early in the morning. Meeting at the airport
                    and transfer to the traditional-modern Kyrgyz village at Supara national ethnic restaurant. After some rest you can walk around or ride horse. We will see the place on top of the mountain there you can see whole Bishkek city. You will spend 2 nights in Supara.
                </Paragraph>
                <Span
                    classname={styles.span}
                >
                    <strong>Meals:</strong> Breakfast, lunch, dinner
                </Span>
                <Span
                    classname={styles.span}
                >
                    <strong>Accommodation:</strong> Hotel
                </Span>
            </div>
            <div className={styles.left}>
                <div className={styles.imageBlock}>
                    <Image
                        width={1920}
                        height={1080}
                        src={'https://mcdn.wallpapersafari.com/medium/52/94/bnysNO.jpg'}
                        alt={''}
                    />
                </div>
                <div className={styles.additional_info}>
                    <div className={styles.info}>
                        <Span
                            classname={styles.info}
                        >
                            <Car/> car
                        </Span>
                    </div>
                    <div className={styles.info}>
                        <Span
                            classname={styles.info}
                        >
                            <Mountain/> high
                        </Span>
                    </div>
                    <div className={styles.info}>
                        <Span
                            classname={styles.info}
                        >
                            <Man/> trip
                        </Span>
                    </div>
                    <div className={styles.info}>
                        <Span
                            classname={styles.info}
                        >
                            <Level/> 583/-132
                        </Span>
                    </div>
                </div>
            </div>
        </div>
    )
}