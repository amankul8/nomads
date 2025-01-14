import React from "react";
import { ReviewCard } from "@/components/cards";
import Slider from "react-slick";
import styles from "./ReviewBlock.module.css";
import { Headline } from "@/ui";

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
                breakpoint: 2350,
                settings: {
                  slidesToShow: 2,
                }
              },
            {
              breakpoint: 1650,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    }
    return(
        <section className={styles.wrapper}>
            <Headline
                color='black'
                type='section'
                underline={true}
                classname={styles.title}
            >
                Review
            </Headline>
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