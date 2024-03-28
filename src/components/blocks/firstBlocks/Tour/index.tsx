import {FirstBlockLayout} from "@/layout"
import { headlineColorTypes, headlineFontFamilyTypes, headlineTagTypes, SimpleHeadline, Span, StarRating, textColor, textFamily, textSize} from "@/ui";
import styles from "./Tour.module.css";
import { InfoSticker } from "@/components/stickers/infoSticker";
import Car from "public/icons/tour/Car.svg";
import Calendar from "public/icons/tour/Calendar.svg";
import Price from "public/icons/tour/Price.svg";
import Duration from "public/icons/tour/Duration.svg";
import Level from "public/icons/tour/Level.svg";
import Time from "public/icons/tour/Time.svg";

export function TourFirstBlock() {

  return (
    <FirstBlockLayout
        bg_image="https://mcdn.wallpapersafari.com/medium/55/12/PZ6DvS.jpg"
        withCloud={false}
    >
        <div className={styles.content}>
          <div className={styles.main_info_block}>
            <SimpleHeadline
              color={headlineColorTypes.white}
              fontFamily={headlineFontFamilyTypes.caveatBrush}
              tag={headlineTagTypes.h1}
            >
              Kel Suu
            </SimpleHeadline>

            <div className={styles.first_sticker_block}>
              <Span
                color={textColor.white}
                fontFamily={textFamily.montserrat}
                size={textSize.l}
              >
                Trevelers reviews 59 voters
              </Span>
              <Span
                color={textColor.white}
                fontFamily={textFamily.montserrat}
                size={textSize.l}
              >
                <StarRating
                  grade={4.6}
                />
              </Span>
            </div>

            <InfoSticker
              Icon={Price}
            >
              From 3,395 Euro
            </InfoSticker> 
            <InfoSticker
              Icon={Calendar}
            >
              December - March
            </InfoSticker> 
          </div>
          <div className={styles.additional_info_block}>
          <InfoSticker
              Icon={Duration}
            >
              Duration N day
            </InfoSticker> 
            <InfoSticker
              Icon={Calendar}
            >
              Next departure
            </InfoSticker> 
            <InfoSticker
              Icon={Level}
            >
              Level Easy
            </InfoSticker> <InfoSticker
              Icon={Car}
            >
              Car 
            </InfoSticker> 
            <InfoSticker
              Icon={Level}
            >
              Text aria
            </InfoSticker> 
          </div>
        </div>
    </FirstBlockLayout>
  );
};

