import React from "react";
import { ReviewCard } from "@/components/cards/ReviewCard";
import Slider from "react-slick";
import styles from "./ReviewBlock.module.css";
import { headlineColorTypes, headlineFontFamilyTypes, headlineTagTypes, SimpleHeadline, UnderlineHeadLine } from "@/ui";

interface IReviewBlock{

}

export const ReviewBlock = ({}:IReviewBlock):JSX.Element=>{
    const settings={
        dots: true, 
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
              {
                breakpoint: 1900,
                settings: {
                  slidesToShow: 3,
                }
              },
            {
              breakpoint: 1750,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 1250,
                settings: {
                  slidesToShow: 1,
                }
            },
            {
                breakpoint: 750,
                settings: {
                  slidesToShow: 1,
                  className: "",
                  centerMode: false,
                }
            }
          ]
    }
    return(
        <section className={styles.wrapper}>
            <UnderlineHeadLine
                color={headlineColorTypes.black}
                fontFamily={headlineFontFamilyTypes.caveatBrush}
                tag={headlineTagTypes.h2}
                classname={styles.title}
            >
                Review
            </UnderlineHeadLine>
            <div className={styles.carousel_wrapper}>
                <Slider {...settings}>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                </Slider>
            </div>
        </section>
    )
} 