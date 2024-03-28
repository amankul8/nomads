import { headlineColorTypes, headlineFontFamilyTypes, headlineTagTypes, UnderlineHeadLine } from "@/ui";
import React from "react";
import styles from "./PartnersBlock.module.css";
import logo1 from "public/icons/partnersLogos/img1.png"
import logo2 from "public/icons/partnersLogos/img2.png"
import logo3 from "public/icons/partnersLogos/img3.png"
import logo4 from "public/icons/partnersLogos/img4.png"
import logo5 from "public/icons/partnersLogos/img5.png"
import Image from "next/image";

export const PartnersBlock = ():JSX.Element=>{
    return(
        <section className={styles.wrapper}>
            <UnderlineHeadLine
                color={headlineColorTypes.black}
                fontFamily={headlineFontFamilyTypes.caveatBrush}
                tag={headlineTagTypes.h2}
            >
                We are featured in
            </UnderlineHeadLine>
            <div className={styles.content}>
                <Image
                    className={styles.logo}
                    src={logo1}
                    alt=""
                />
                <Image
                    className={styles.logo}
                    src={logo2}
                    alt=""
                />
                <Image
                    className={styles.logo}
                    src={logo3}
                    alt=""
                />
                <Image
                    className={styles.logo}
                    src={logo4}
                    alt=""
                />
                <Image
                    className={styles.logo}
                    src={logo5}
                    alt=""
                />
            </div>
        </section>
    )
}