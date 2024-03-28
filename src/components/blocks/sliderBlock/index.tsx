import Image from "next/image";
import Slider from "react-slick";
import styles from "./SliderBlock.module.css";
import { ReactNode, useEffect } from "react";

interface ISlider{
  responsive?: any,
  isBg?: boolean,
  bgUrl?: string,
  children: ReactNode,
  padding?: number
}


const SliderBlock = ({responsive, isBg, bgUrl, padding, children}:ISlider):JSX.Element=>{

    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      swipeToSlide: true,
      centerMode: true,
      responsive: [...responsive]
    }

    useEffect(()=>{ 
        window.innerWidth
    }, []);

    return(
        <div className={styles.wrapper} style={{"padding": `${padding}px 0`}}>
            {
              isBg?
              <Image
                className={styles.bg}
                width={1920}
                height={1800}
                src= {bgUrl?bgUrl:"https://mcdn.wallpapersafari.com/medium/89/97/gk2A5y.jpg"}
                alt={''}
              />:
              ""
            }
            <div className={styles.slider}>
                <Slider {...settings}>
                    {children}
                </Slider>
            </div>
        </div>
    )
}


export default SliderBlock;