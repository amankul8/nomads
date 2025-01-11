import Slider from "react-slick";
import styles from "./tourSlider.module.scss";
import { TourInfoCard } from "@/components/cards";
import { DetailedHTMLProps, HTMLAttributes, useRef, useState } from "react";
import { CustomIconButton, Headline } from "@/ui";

interface ITourSlider extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  isCenteredMode?: boolean,
  list: any,
  title: string 
}


function TourSlider({ isCenteredMode, list, title}: ITourSlider) {

    const sliderRef = useRef<Slider>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(1);

    const progress_width = (currentIndex / list.length * 100) ;
 
    const settings = {
      infinite: list.length > 7? true: false,
      className: "center",
      centerMode: list.length > 7? true: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: false,
      lazyload: "ondemand",
      beforeChange: (current:number, next:number) => setCurrentIndex(() => next+1),
      responsive: [
        {
          breakpoint: 2300,
          settings: {
            slidesToShow: 6,
          }
        },
        {
          breakpoint: 1950,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 1750,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    }

    const goToNext = () => {
      sliderRef.current!.slickNext();
    };
  
    const goToPrev = () => {
      sliderRef.current!.slickPrev();
    };

    return(
      <div className={styles.slider}>

        <Headline
          color='black'
          type='section'
          classname={styles.title}
        >
          {title}
        </Headline>  
          
        <Slider ref={sliderRef} {...settings} key={title}>
          {list.map((item: any, index: number) => (
            <div className={styles.slider} key={item.id || index}>
              <TourInfoCard
                name={item.name || "Title"}
                description={item.description || "Ipsum text"}
                link={item.link || ""}
                image={item.image || "https://cdn.wallpapersafari.com/43/71/H9wItm.jpg"}
                days={item.days || 5}
                price={item.price || 1000}
                promotion={item.promotion || 30}
                countries={item.countries || ["Kyrgyzstan", "Kazakstan"]}
                complexity={item.complexity || 3}
                rating={item.rating || 3}
                reviewsCount={item.reviewsCount || 73}
                isList={item.isList || false}
              />
            </div>
          ))}
        </Slider>

        <div className={styles.controller}>
          <div className={styles.progress_wrapper}>
            <div className={styles.progress} style={{width: `${progress_width}%`}}/>
          </div>  

          <div className={styles.arrows}>
              <CustomIconButton
                color="white"
                shape="square"
                type="arrowLeft"
                handler={goToPrev}
              />
              
              <CustomIconButton
                color="white"
                shape="square"
                type="arrowRight"
                handler={goToNext}
              />
          </div>
        </div>
        
      </div>
    )
}


export default TourSlider;