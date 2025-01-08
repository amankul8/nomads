import Slider from "react-slick";
import styles from "./tourSlider.module.scss";
import { TourInfoCard } from "@/components/cards";
import { useRef, useState } from "react";
import { CustomIconButton, headlineColorTypes, headlineFontFamilyTypes, headlineTagTypes, SimpleHeadline } from "@/ui";

interface ITourSlider{
  isCenteredMode?: boolean,
  list: any 
}


const TourSlider:React.FC<ITourSlider> = ({ isCenteredMode, list}):JSX.Element=>{

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

        <SimpleHeadline
          color={headlineColorTypes.black}
          fontFamily={headlineFontFamilyTypes.montserrat}
          tag={headlineTagTypes.h2}
          classname={styles.title}
        >
          Find our popular tours
        </SimpleHeadline>  
          
        <Slider ref={sliderRef} {...settings}>
          {
            list.map((item:any) => {
              return (
                <>
                  <div className={styles.slider}>
                  <TourInfoCard
                    name="Title"
                    description="Ipsum text"
                    link=""
                    image="https://cdn.wallpapersafari.com/43/71/H9wItm.jpg"
                    days={5}
                    price={1000}
                    promotion={30}
                    countries={['Kyrgyzstan', 'Kazakstan']}
                    complexity={3}
                    rating={3}
                    reviewsCount={73}
                    isList={false}
                  />
                </div>
                </>
              )
            })
          }
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