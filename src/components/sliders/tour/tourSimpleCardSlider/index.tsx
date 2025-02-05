import Slider from "react-slick";
import styles from "../sliderStyles.module.scss";
import { TourSimpleCard } from "@/components/cards";
import { DetailedHTMLProps, HTMLAttributes, useRef, useState, useMemo } from "react";
import { CustomIconButton } from "@/ui";

interface ITourSimpleCardSlider extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isCenteredMode?: boolean;
  list: any,
  // Array<{
  //   id?: string | number;
  //   name?: string;
  //   description?: string;
  //   link?: string;
  //   image?: string;
  //   complexity?: number;
  // }>;
  slidesToShow?: number | undefined;
}

const TourSimpleCardSlider: React.FC<ITourSimpleCardSlider> = ({ isCenteredMode = false, list, slidesToShow }) => {
  const sliderRef = useRef<Slider>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const progressWidth = useMemo(() => ((currentIndex + 1) / list.length) * 100, [currentIndex, list.length]);

  const settings = useMemo(() => ({
    infinite: list.length > 7,
    centerMode: list.length > 7 && isCenteredMode,
    speed: 500,
    slidesToShow: slidesToShow || 7,
    slidesToScroll: 1,
    arrows: false,
    lazyLoad: "ondemand" as const,
    beforeChange: (_: number, next: number) => setCurrentIndex(next),
    responsive: !slidesToShow
      ? [
          { breakpoint: 5000, settings: { slidesToShow: 10 } },
          { breakpoint: 2300, settings: { slidesToShow: 8 } },
          { breakpoint: 1950, settings: { slidesToShow: 7 } },
          { breakpoint: 1655, settings: { slidesToShow: 5 } },
          { breakpoint: 1350, settings: { slidesToShow: 4 } },
          { breakpoint: 1070, settings: { slidesToShow: 3 } },
          { breakpoint: 840, settings: { slidesToShow: 2 } },
          { breakpoint: 550, settings: { slidesToShow: 1 } },
        ]
      : undefined,
  }), [list.length, isCenteredMode, slidesToShow]);

  return (
    <div className={styles.slider}>
      <Slider ref={sliderRef} {...settings}>
        {list.map((item:any, index: number) => (
          <div className={styles.slider_item} key={item.id ?? index}>
            <TourSimpleCard
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
  );
};

export default TourSimpleCardSlider;
