import { 
    CustomButton, 
    CustomIconButton, 
    Paragraph, 
    Headline, 
} from "@/ui";
import React, {useRef, useState } from "react";
import styles from "./MainBlock.module.css";
import { ISlides } from "@/pages";
import { motion } from "motion/react"
import cn from "classnames";
import Slider from "react-slick";
import { TourSimpleCard } from "@/components/cards";

interface IDestinationBlock{
    slides: ISlides[],
}

export const MainFirstBlock=({slides}:IDestinationBlock):JSX.Element=>{
    const sliderRef = useRef<Slider>(null);
    const [content, setContent] = useState('Initial Content');
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 20000,
        pauseOnHover: true,
        arrows: false,
        beforeChange: handleBeforeChange,
        responsive: [
              {
                breakpoint: 2000,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
            {
              breakpoint: 1700,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      }

    const nextSlide = () => {
        sliderRef.current?.slickNext();
    };
    
    const prevSlide = () => {
        sliderRef.current?.slickPrev();
    };

    function handleBeforeChange(index:number){
        setCurrentIndex(index);
        setContent(`${index}`);
    }

    return(
        <div className={styles.block_wrapper}>

            <motion.img
                key={content}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                transition={{ duration: 2 }}
                src={slides[currentIndex].image}
                alt="Image"
                className={styles.bg}
            />

            <div className={styles.block}>
                    <div className={styles.progress_block}>
                        <div className={styles.progress}>
                            {
                                slides.map((item, index)=>{
                                    return(
                                        <span
                                            className={cn(styles.points, {
                                                [styles.acitve_point]: index === currentIndex
                                            })}
                                            key={index}
                                        >
                                            {index+1}
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.left_block}>
                        <motion.div 
                            key={content}
                            initial={{ opacity: 0, y: +20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 1.5 }}
                            className={styles.left_content}
                        >
                            <Headline
                                color='white'
                                type='main'
                            >
                                {slides[currentIndex].title}
                            </Headline>
                            <Paragraph
                                classname={styles.text}
                            >
                                {slides[currentIndex].description}
                            </Paragraph>
                            <CustomButton
                                color="white"
                                active={true}
                                handler={()=>{}}
                                classname={styles.discover_btn}
                            >
                                Discover
                            </CustomButton>
                        </motion.div>
                    </div>
                <div className={styles.right_block}>
                    <div className={styles.carousel_wrapper}>
                        <Slider
                            {...settings}
                            ref={sliderRef}
                        >
                            {
                                slides.map((item)=>{
                                    return(
                                        <div 
                                            className={styles.slide}
                                            key={item.id}
                                        >
                                            <TourSimpleCard
                                                name = {item.title}
                                                description = {item.description}
                                                image = {item.image}
                                                complexity = {3}
                                                link = {''}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                        <div className={styles.control_block}>
                            <div className={styles.arrows}>
                                <CustomIconButton
                                    color="white"
                                    shape="square"
                                    type="back"
                                    handler={prevSlide}
                                />
                                <CustomIconButton
                                    color="white"
                                    shape="square"
                                    type="forward"
                                    handler={nextSlide}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}