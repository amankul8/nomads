import { 
    CustomButton, 
    CustomIconButton, 
    Paragraph, 
    Headline, 
} from "@/ui";
import React, {useRef, useState } from "react";
import styles from "./MainBlock.module.css";
import { motion } from "motion/react"
import cn from "classnames";
import Slider from "react-slick";
import { TourSimpleCard } from "@/components/cards";
import { TourType } from "@/store/models/tours/types";
import Link from "next/link";
import { sliceText } from "@/helpers";

interface IDestinationBlock{
    slides: TourType[],
}

export const MainFirstBlock=({slides}:IDestinationBlock) => {
    const sliderRef = useRef<Slider>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 20000,
        pauseOnHover: true,
        arrows: false,
        beforeChange: handleBeforeChange,
        responsive: [
            {
              breakpoint: 1280,
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
    }

    return(
        <div className={styles.block_wrapper}>

            <motion.img
                key={currentIndex}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                transition={{ duration: 1 }}
                src={'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg'/*slides[currentIndex].image*/}
                alt="Image"
                className={styles.bg}
            />

            <div className={cn('container', styles.content)}>
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
                        key={currentIndex}
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
                            {sliceText(slides[currentIndex]?.name, 60)}
                        </Headline>
                        <Paragraph
                            classname={styles.text}
                        >
                            {sliceText(slides[currentIndex]?.description, 500)}
                        </Paragraph>
                        <Link href={`/tours/${slides[currentIndex]?.id}`}>
                            <CustomButton
                                color="white"
                                active={true}
                                classname={styles.discover_btn}
                            >
                                Discover
                            </CustomButton>
                        </Link>
                    </motion.div>
                </div>
                <div className={styles.right_block}>
                    <div className={styles.carousel_wrapper}>
                        <Slider
                            {...settings}
                            ref={sliderRef}
                        >
                            {
                                [...slides].map((item)=>{
                                    return(
                                        <div 
                                            className={styles.slide}
                                            key={item.id}
                                        >
                                            <TourSimpleCard
                                                id={item.id}
                                                name = {item.name}
                                                description = {item.description}
                                                image = {'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg'}
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