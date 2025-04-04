import { 
    CustomButton, 
    CustomIconButton, 
    Paragraph, 
    Headline, 
} from "@/ui";
import React, {useRef, useState } from "react";
import styles from "./mainBlock.module.css";
import { motion } from "motion/react"
import cn from "classnames";
import Slider from "react-slick";
import { TourSimpleCard } from "@/components/cards";
import { ToursType } from "@/store/models/tours.ts";
import Link from "next/link";

interface IDestinationBlock{
    slides: ToursType[],
}

export const MainFirstBlock=({slides}:IDestinationBlock) => {
    const sliderRef = useRef<Slider>(null);
    const [content, setContent] = useState('Initial Content');
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
        setContent(`${index}`);
    }

    return(
        <div className={styles.block_wrapper}>

            <motion.img
                key={content}
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
                            {slides[currentIndex]?.name}
                        </Headline>
                        <Paragraph
                            classname={styles.text}
                        >
                            {slides[currentIndex]?.description}
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
                                [...slides, ...slides, ...slides].map((item)=>{
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