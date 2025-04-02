'use client'

import Slider from "react-slick";
import styles from "../sliderStyles.module.scss";
import cn from "classnames";
import { TourInfoCard } from "@/components/cards";
import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef, useState, useMemo } from "react";
import { CustomIconButton, Headline } from "@/ui";

interface ITourInfoCardSlider extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isCenteredMode?: boolean;
  list: any;
  title: string;
}

function TourInfoCardSlider({ isCenteredMode, list, title }: ITourInfoCardSlider) {
  const sliderRef = useRef<Slider>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const progressWidth = useMemo(() => (currentIndex / list.length) * 100, [currentIndex, list.length]);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const sliderResponsive = (width: number): number => {
    if (width < 850) return 1;
    if (width < 1200) return 2;
    if (width <= 1440) return 3;
    return 4;
  };

  const settings = {
    infinite: list.length > 4,
    centerMode: isCenteredMode || list.length > 4,
    speed: 500,
    slidesToShow: sliderResponsive(containerWidth),
    slidesToScroll: 1,
    arrows: false,
    lazyLoad: "ondemand" as "ondemand" | "progressive" | undefined,
    beforeChange: (_: number, next: number) => setCurrentIndex(next),
  };

  return (
    <div className={styles.wrapper}>
      <div ref={containerRef} className={cn('container', styles.slider)}>
        <Headline color="black" type="section" className={styles.title}>
          {title}
        </Headline>

        <Slider ref={sliderRef} {...settings}>
          {list.map((item: any, index: number) => (
            <div className={styles.slider} key={item.id || index}>
              <TourInfoCard
                tourId={item.id}
                name={item.name || "Title"}
                description={item.description || "Ipsum text"}
                image={item.image || "https://cdn.wallpapersafari.com/43/71/H9wItm.jpg"}
                days={item.days || 5}
                price={item.price || 1000}
                promotion={item.promotion || 30}
                countries={item.countries || ["Kyrgyzstan", "Kazakhstan"]}
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
            <div className={styles.progress} style={{ width: `${progressWidth}%` }} />
          </div>

          <div className={styles.arrows}>
            <CustomIconButton color="white" shape="square" type="back" handler={goToPrev} />
            <CustomIconButton color="white" shape="square" type="forward" handler={goToNext} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourInfoCardSlider;
