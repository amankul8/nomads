import React from "react";
import { ReviewCard } from "@/components/cards";
import Slider from "react-slick";
import styles from "./reviewBlock.module.css";
import cn from "classnames";
import { Headline } from "@/ui";

interface IReviewBlock{

}

export const ReviewBlock = ({}:IReviewBlock) => {

  const settings={
    dots: true, 
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  }
    


  return(
    <div className={styles.wrapper}>
        <div className={cn('container', styles.container)}>
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
        </div>
    </div>
  )
} 