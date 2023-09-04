import { 
    btnArrowType, 
    btnBorderSizeType, 
    btnColorType, 
    btnViewType, 
    Button, 
    headlineColorTypes, 
    headlineFontFamilyTypes, 
    headlineTagTypes, 
    Paragraph, 
    SimpleHeadline, 
    textColor, 
    textFamily, 
    textSize 

} from "@/ui";
import React, {useRef, useState } from "react";
import styles from "./MainBlock.module.css";
import { ISlides } from "@/pages";
import { TripCard1 } from "@/components/cards/TripCard1";
import {animate, motion} from 'framer-motion';
import cn from "classnames";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: false,
        beforeChange: handleBeforeChange,
        responsive: [
              {
                breakpoint: 1900,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
            {
              breakpoint: 1500,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 1150,
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
                            <SimpleHeadline
                                color={headlineColorTypes.white}
                                fontFamily={headlineFontFamilyTypes.caveatBrush}
                                tag={headlineTagTypes.h1}
                            >
                                {slides[currentIndex].title}
                            </SimpleHeadline>
                            <Paragraph
                                color={textColor.white}
                                fontFamily={textFamily.openSanse}
                                size={textSize.xl}
                                classname={styles.text}
                            >
                                {slides[currentIndex].description}
                            </Paragraph>
                            <Button 
                                btnColor={btnColorType.white}
                                btnSize={btnBorderSizeType.m}
                                btnView={btnViewType.button}
                                enabled={true}
                            >
                                Discover
                            </Button>
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
                                            <TripCard1
                                                title={item.title}
                                                text={item.description}
                                                imageUrl={item.image}
                                                href={''}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                        <div className={styles.control_block}>
                            <div className={styles.arrows}>
                                <Button
                                    btnColor={btnColorType.white}
                                    btnSize={btnBorderSizeType.arrow}
                                    btnView={btnViewType.arrow}
                                    btnArrow={btnArrowType.left}
                                    onClick={()=>{
                                        prevSlide();
                                    }}
                                    enabled={true}
                                />
                                <Button
                                    btnColor={btnColorType.white}
                                    btnSize={btnBorderSizeType.arrow}
                                    btnView={btnViewType.arrow}
                                    btnArrow={btnArrowType.right}
                                    
                                    onClick={()=>{
                                        nextSlide();
                                    }}
                                    enabled={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}