import { headlineColorTypes, headlineFontFamilyTypes, headlineTagTypes, Paragraph, SimpleHeadline, textColor, textFamily, textSize } from "@/ui";
import { Rating } from "@/ui";
import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./ReviewCard.module.css";
import KyrgyzstanMapIcon from "public/icons/cardIcons/mapIcons/kyrgyzstanMap.svg";

interface IReviewCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{

}

export const ReviewCard = ({}:IReviewCardProps):JSX.Element=>{

    return(
        <div 
            className={styles.card_wrapper}
        >
            <Image
                src={'https://mcdn.wallpapersafari.com/medium/74/96/E4cAIg.jpg'}
                className={styles.bg}
                width={1920}
                height={1080}
                alt={''}
            />
            <div className={styles.content}>
                <div className={styles.left}>
                    <KyrgyzstanMapIcon/>
                </div>
                <div className={styles.right}>
                    <SimpleHeadline
                        color={headlineColorTypes.white}
                        fontFamily={headlineFontFamilyTypes.caveatBrush}
                        tag={headlineTagTypes.h3}
                    >
                        Askat Taalaibekov, Kyrgyzstan 23
                    </SimpleHeadline>
                    <Paragraph
                        color={textColor.white}
                        fontFamily={textFamily.openSanse}
                        size={textSize.m}
                        classname={styles.review}
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, tempore earum. Laborum minima cumque cum ipsa neque blanditiis fugit dolor est nisi officia accusantium, recusandae mollitia quis alias totam rerum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, tempore earum. 
                    </Paragraph>
                    <Rating 
                        type="star"
                        color="var(--white)"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}
