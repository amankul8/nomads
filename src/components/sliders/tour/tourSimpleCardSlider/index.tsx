import Slider from "react-slick";
import styles from "../sliderStyles.module.scss";
import { TourSimpleCard } from "@/components/cards";
import { DetailedHTMLProps, HTMLAttributes, useRef, useState } from "react";
import { CustomIconButton} from "@/ui";

interface ITourSimpleCardSlider extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  isCenteredMode?: boolean,
  list: any,
}


function TourSimpleCardSlider({ isCenteredMode, list, title}: ITourSimpleCardSlider) {

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
          breakpoint: 5000,
          settings: {
            slidesToShow: 10,
          }
        },
        {
          breakpoint: 2300,
          settings: {
            slidesToShow: 8,
          }
        },
        {
          breakpoint: 1950,
          settings: {
            slidesToShow: 7,
          }
        },
        {
          breakpoint: 1655,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 1350,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 1070,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 840,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 550,
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
          
        <Slider ref={sliderRef} {...settings} key={title}>
          {list.map((item: any, index: number) => (
            <div className={styles.slider} key={item.id || index}>
              <TourSimpleCard
                name={item.name || "Title"}
                description={item.description || "Ipsum text"}
                link={item.link || ""}
                image={item.image || "https://cdn.wallpapersafari.com/43/71/H9wItm.jpg"}
                complexity={item.complexity || 3}
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
                color="blue"
                shape="square"
                type="back"
                handler={goToPrev}
              />
              
              <CustomIconButton
                color="blue"
                shape="square"
                type="forward"
                handler={goToNext}
              />
          </div>
        </div>
        
      </div>
    )
}


export default TourSimpleCardSlider;