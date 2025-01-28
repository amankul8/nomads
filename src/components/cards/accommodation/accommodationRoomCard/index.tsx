'use client';

import React, { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";

import styles from "./accommodationRoomCard.module.scss";
import { Headline, Paragraph } from "@/ui";
import HotelIcon from '@mui/icons-material/Hotel';
import Image from "next/image";

interface IAccommodationRoomCard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {

}


export const AccommodationRoomCard:React.FC<IAccommodationRoomCard> = () => {

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return (
        <div className={styles.card}>
            <Headline color="black" type="normal"> Economy: </Headline>
            <Paragraph classname={styles.bread_crumbs}> Karagat Karakol / Karagat Karakol / Karagat Karakol / Karagat Karakol </Paragraph>
            <div className={styles.includes}> 
                <div className={styles.include}>
                    <HotelIcon/>
                    Share room
                </div>
                <div className={styles.include}>
                    <HotelIcon/>
                    Share room
                </div>
                <div className={styles.include}>
                    <HotelIcon/>
                    Share room
                </div>
                <div className={styles.include}>
                    <HotelIcon/>
                    Share room
                </div>
            </div> 
            <div className={styles.images}>

                {
                    windowWidth < 768
                    ?   <>
                            <figure className={styles.image}>
                                <Image
                                    src="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                    width={300}
                                    height={200}
                                    alt=""
                                />
                            </figure>
                            <figure className={styles.image}>
                                <Image
                                    src="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                    width={300}
                                    height={200}
                                    alt=""
                                />
                                <div className={styles.text_layer}>
                                    + 32 more
                                </div>
                            </figure>
                        </>
                    :   <>
                            <figure className={styles.image}>
                                <Image
                                    src="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                    width={300}
                                    height={200}
                                    alt=""
                                />
                            </figure>
                            <figure className={styles.image}>
                                <Image
                                    src="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                    width={300}
                                    height={200}
                                    alt=""
                                />
                            </figure>
                            <figure className={styles.image}>
                                <Image
                                    src="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                    width={300}
                                    height={200}
                                    alt=""
                                />
                            </figure>
                            <figure className={styles.image}>
                                <Image
                                    src="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                    width={300}
                                    height={200}
                                    alt=""
                                />
                                <div className={styles.text_layer}>
                                    + 32 more
                                </div>
                            </figure>
                        </>    
                }
            </div>
        </div>
    )
}