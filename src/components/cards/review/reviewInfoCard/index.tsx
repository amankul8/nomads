'use client';

import { Headline, Paragraph, Rating } from "@/ui";
import styles from "./reviewInfoCard.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";



export const ReviewInfoCard = () => {

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.card}>
            <div className={styles.topbar}>
                <div className={styles.left_side}>
                    <div className={styles.user}>
                        <Image 
                            className={styles.avatar}
                            src='https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg'
                            width={1920}
                            height={1080}
                            alt=''
                        />
                        <div className={styles.name}>
                            <Headline color="black" type="normal"> A Perfect Day </Headline>
                            <Paragraph> Sep 2022 </Paragraph>
                        </div>
                    </div>
                    <Headline color="black" type="normal"> A Perfect Day </Headline>
                    <Paragraph> Sep 2022 </Paragraph>
                </div>
                <div className={styles.right_side}>
                    <span>
                        <Paragraph> Accommodation: </Paragraph>
                        <Rating rating={3} type="star" color="blue" />
                    </span>
                    <span>
                        <Paragraph> Enterhantmennts: </Paragraph>
                        <Rating rating={3} type="star" color="blue" />
                    </span>
                    <span>
                        <Paragraph> Food: </Paragraph>
                        <Rating rating={3} type="star" color="blue" />
                    </span>
                    <span>
                        <Paragraph> Guide: </Paragraph>
                        <Rating rating={3} type="star" color="blue" />
                    </span>
                    <span>
                        <Paragraph> Vehicle: </Paragraph>
                        <Rating rating={3} type="star" color="blue" />
                    </span>
                </div>
            </div>
            <Paragraph> 
                I was in Bishkek, traveling solo, and wanted to visit some nature outside of the city and to see the Burana Tower. This was an excellent option. Ash (with a driver) picked me up and we drove the the Tower, walking around the area. From there we went for an excellent lunch and then horseback riding in a picturesque valley, up to the top of a small mountain. It was all great. Ash was very good company for the day. I enjoyed the company and learning more about Kyrgyzstan. Highly recommended.
            </Paragraph>
            <div className={styles.images}>

                {
                    windowWidth < 768
                    ?   <>
                            <figure className={styles.image}>
                                <Image 
                                    src='https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg'
                                    width={1920}
                                    height={1080}
                                    alt=''
                                />
                            </figure>
                            <figure className={styles.image}>
                                <Image 
                                    src='https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg'
                                    width={1920}
                                    height={1080}
                                    alt=''
                                />
                                <div className={styles.img_layer}> + 32 more </div>
                            </figure>
                        </>
                    :   <>
                            <figure className={styles.image}>
                                <Image 
                                    src='https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg'
                                    width={1920}
                                    height={1080}
                                    alt=''
                                />
                            </figure>
                            <figure className={styles.image}>
                                <Image 
                                    src='https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg'
                                    width={1920}
                                    height={1080}
                                    alt=''
                                />
                            </figure>
                            <figure className={styles.image}>
                                <Image 
                                    src='https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg'
                                    width={1920}
                                    height={1080}
                                    alt=''
                                />
                            </figure>
                            <figure className={styles.image}>
                                <Image 
                                    src='https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg'
                                    width={1920}
                                    height={1080}
                                    alt=''
                                />
                                <div className={styles.img_layer}> + 32 more </div>
                            </figure>
                        </>    
                }
                
            </div>
        </div>
    )
}