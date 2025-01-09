import {Paragraph, Headline, Span, Rating, } from "@/ui";
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
                        <Headline
                            type='normal'
                            color='black'
                        >
                            {userName}
                        </Headline>
                        <Span>
                            {country}
                        </Span>
                    </div>
                </div>
                <Rating 
                    rating={grade}
                    type="star"
                    color="white"
                />
            </div>
            <div className={styles.review_block}>
                <Headline
                    type='normal'
                    color='black'
                >
                    {tour}
                </Headline>
                <Span>
                    {date}
                </Span>
                <Paragraph>
                    {review}
                </Paragraph>
            </div>
        </div>
    )
}
