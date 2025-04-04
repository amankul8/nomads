import Slider from "react-slick";
import styles from "../sliderStyles.module.scss";
import { TourSimpleCard } from "@/components/cards";
import { DetailedHTMLProps, HTMLAttributes, useRef, useState, useMemo, useEffect, useCallback } from "react";
import { CustomIconButton, Headline } from "@/ui";
import cn from "classnames";

// Определяем тип тура
interface ITour {
  id?: string | number;
  name?: string;
  description?: string;
  link?: string;
  image?: string;
  complexity?: number;
}

interface ITourSimpleCardSlider
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isCenteredMode?: boolean;
  list: any;
  title?: string;
}

const TourSimpleCardSlider: React.FC<ITourSimpleCardSlider> = ({ isCenteredMode = false, list, title }) => {
  const sliderRef = useRef<Slider>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const progressWidth = useMemo(() => ((currentIndex + 1) / list.length) * 100, [currentIndex, list.length]);

  const handleResize = useCallback(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const sliderResponsive = (width: number): number => {
    const breakpoints = [
      { max: 560, slides: 1 },
      { max: 700, slides: 2 },
      { max: 900, slides: 3 },
      { max: 1300, slides: 4 },
      { max: 1440, slides: 6 }
    ];
    
    return breakpoints.find(bp => width <= bp.max)?.slides ?? 4;
  };

  const settings = {
    infinite: list.length > 7,
    centerMode: isCenteredMode,
    className: 'center',
    speed: 500,
    slidesToShow: sliderResponsive(containerWidth),
    slidesToScroll: 1,
    arrows: false,
    lazyLoad: "ondemand" as const,
    beforeChange: (_: number, next: number) => setCurrentIndex(next),
  };

  return (
    <div className={styles.wrapper}>
      <div ref={containerRef} className={cn("container", styles.slider)}>
        <Headline type="section" color="black" classname={styles.title}> {title} </Headline>
        <Slider ref={sliderRef} {...settings}>
          {list.map((item:any, index:number) => (
            <div className={styles.slider_item} key={item.id ?? index}>
              <TourSimpleCard
                id={item.id}
                name={item.name ?? "Title"}
                description={item.description ?? "Ipsum text"}
                link={item.link ?? ""}
                image={item.image ?? "https://cdn.wallpapersafari.com/43/71/H9wItm.jpg"}
                complexity={item.complexity ?? 3}
              />
            </div>
          ))}
        </Slider>

        <div className={styles.controller}>
          <div className={styles.progress_wrapper}>
            <div className={styles.progress} style={{ width: `${progressWidth}%` }} />
          </div>

          <div className={styles.arrows}>
            <CustomIconButton color="blue" shape="square" type="back" handler={() => sliderRef.current?.slickPrev()} />
            <CustomIconButton color="blue" shape="square" type="forward" handler={() => sliderRef.current?.slickNext()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourSimpleCardSlider;
