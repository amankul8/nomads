import { headlineColorTypes, headlineFontFamilyTypes, headlineTagTypes, Paragraph, SimpleHeadline, Span, StarRating, textColor, textFamily, textSize } from "@/ui";
import Image from "next/image";
import styles from "./ReviewBlock.module.css";


interface IReviewBlock{
    userName: string,
    avatar: string
    country: string,
    tour: string,
    date: string,
    review: string,
    grade: number
}


export const TourReviewBlock = ({userName, avatar, country, tour, date, review, grade}:IReviewBlock):JSX.Element=>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.user_block}>
                <div className={styles.user}>
                    <Image
                        src={avatar}
                        width = {500}
                        height = {500}
                        alt=""
                        className={styles.avatar}
                    />
                    <div className={styles.info}>
                        <SimpleHeadline
                            color={headlineColorTypes.black}
                            fontFamily={headlineFontFamilyTypes.montserrat}
                            tag={headlineTagTypes.h4}
                        >
                            {userName}
                        </SimpleHeadline>
                        <Span 
                            color={textColor.black}
                            fontFamily={textFamily.openSanse}
                            size={textSize.l}
                        >
                            {country}
                        </Span>
                    </div>
                </div>
                <StarRating 
                    grade={grade}
                    className={styles.rating}
                />
            </div>
            <div className={styles.review_block}>
                <SimpleHeadline
                    color={headlineColorTypes.black}
                    fontFamily={headlineFontFamilyTypes.montserrat}
                    tag={headlineTagTypes.h4}
                >
                    {tour}
                </SimpleHeadline>
                <Span
                    color={textColor.black}
                    fontFamily={textFamily.openSanse}
                    size={textSize.m}
                >
                    {date}
                </Span>
                <Paragraph
                    color={textColor.black}
                    fontFamily={textFamily.openSanse}
                    size={textSize.m}
                >
                    {review}
                </Paragraph>
            </div>
        </div>
    )
}
