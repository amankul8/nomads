import React from "react";
import { GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";
import cls from "classnames";

import {FirstBlockLayout, Layout} from "@/layouts"
import { Headline, Paragraph, Rating } from "@/ui";
import styles from "./tour.module.scss";

import AutoIcon from '@mui/icons-material/AutoAwesomeMotion';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import {IconSquareBorder} from "@/components/icons/tour/square";
import { TourDayInfoCard } from "@/components/cards";
import { Box, ImageList, ImageListItem } from "@mui/material";


const images = [
  "https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg",
  "https://mcdn.wallpapersafari.com/medium/90/19/rKHwW9.jpg",
  "https://mcdn.wallpapersafari.com/335/73/19/BF6f7i.jpg",
  "https://mcdn.wallpapersafari.com/medium/51/76/M5Sixv.jpg",
  "https://mcdn.wallpapersafari.com/335/82/70/nv9j5J.jpg",
  "https://mcdn.wallpapersafari.com/medium/9/2/U8jznD.jpg",
  "https://mcdn.wallpapersafari.com/medium/43/23/BpwJ56.jpg",
  "https://mcdn.wallpapersafari.com/335/51/51/sdioGm.jpg",
  "https://mcdn.wallpapersafari.com/medium/64/7/qrZYhn.jpg",
];


const Map = dynamic(() => import("@/components/blocks/map"), { ssr: false });


export default function Tour() {

  return (
    
    <Layout>
      <FirstBlockLayout 
        bg_image="https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?cs=srgb&dl=pexels-pixabay-247600.jpg&fm=jpg"
        isFullSize={true}
        withCloud={false}
      >
        <div className={styles.main_block}>

            <div className={styles.content}>
              <Headline color="white" type="main"> Kel-Suu </Headline>
              <div className={styles.rating_info}>
                <span>
                  <Paragraph> Travelers reviews </Paragraph>
                  <Rating rating={3} type="star" size={20}/>
                </span>
                <span>
                  <Paragraph> 59 voter </Paragraph>
                  <Paragraph> 4,6 / 5 </Paragraph>
                </span>
              </div>
              <div className={styles.mini_info}>
                <IconSquareBorder>
                  <LocalOfferIcon/>
                </IconSquareBorder>
                <Paragraph> Duration N days </Paragraph>
              </div>
            </div>

            <div className={styles.lower}>
              <div className={styles.mini_info}>
                <IconSquareBorder>
                  <LocalOfferIcon/>
                </IconSquareBorder>
                <Paragraph> Duration N days </Paragraph>
              </div>
              <div className={styles.mini_info}>
                <IconSquareBorder>
                  <LocalOfferIcon/>
                </IconSquareBorder>
                <Paragraph> Next departure 03/21/2022 </Paragraph>
              </div>
              <div className={styles.mini_info}>
                <IconSquareBorder>
                  <LocalOfferIcon/>
                </IconSquareBorder>
                <Paragraph> December - March</Paragraph>
              </div>
              <div className={styles.mini_info}>
                <IconSquareBorder>
                  <LocalOfferIcon/>
                </IconSquareBorder>
                <Paragraph> Duration N days </Paragraph>
              </div>
              <div className={styles.mini_info}>
                <IconSquareBorder>
                  <LocalOfferIcon/>
                </IconSquareBorder>
                <Paragraph> Duration N days </Paragraph>
              </div>
            </div>
            
        </div>
      </FirstBlockLayout>
      
      <section className={cls(styles.section, styles.itinerary)}>
        <div className={styles.topbar}>
          <Headline
              color='black'
              type='section'
              classname={styles.headline}
          >
              <AutoIcon/>
              Itinerary
          </Headline>
        </div>
        
        <div className={styles.body}>
          <TourDayInfoCard/>
          <TourDayInfoCard/>
          <TourDayInfoCard/>
        </div>
      </section>

      <section className={cls(styles.section, styles.map)}>
        <div className={styles.topbar}>
          <Headline
              color='black'
              type='section'
              classname={styles.headline}
          >
              <AutoIcon/>
              Map
          </Headline>
        </div>

        <div className={styles.body}> 
          <Map/>
        </div>
      </section>

      <section className={cls(styles.section, styles.phots)}>

        <div className={styles.topbar}>
          <Headline
              color='black'
              type='section'
              classname={styles.headline}
          >
              <AutoIcon/>
              Photos
          </Headline>
        </div>

        <div className={styles.body}>
          <Box className={styles.photos}>
            <ImageList variant="masonry" cols={3} gap={3}>
              {images.map((item, index) => (
                <ImageListItem key={index}>
                  <img
                    srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item}?w=248&fit=crop&auto=format`}
                    alt=""
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </div>
      </section>

      <section className={cls(styles.section, styles.reviews)}>
        <div className={cls(styles.topbar, styles.accommodations)}>
          <Headline
              color='black'
              type='section'
              classname={styles.headline}
          >
            <AutoIcon/>
            Accommodation
          </Headline>
        </div>
        <div className={styles.body}>

        </div>
      </section>
      <section className={cls(styles.section, styles.reviews)}>
        <div className={cls(styles.topbar, styles.destinations)}>
          <Headline
              color='black'
              type='section'
              classname={styles.headline}
          >
              <AutoIcon/>
              Destinations
          </Headline>
        </div>

        <div className={styles.body}>

        </div>  
      </section>

      <section className={cls(styles.section, styles.reviews)}>
        <div className={cls(styles.topbar, styles.prices)}>
          <Headline
              color='black'
              type='section'
              classname={styles.headline}
          >
              <AutoIcon/>
              Prices
          </Headline>
        </div>

        <div className={styles.body}>

        </div>
      </section>

      <section className={cls(styles.section, styles.reviews)}>
        <div className={cls(styles.topbar, styles.activities)}>
          <Headline
              color='black'
              type='section'
              classname={styles.headline}
          >
              <AutoIcon/>
              Activities
          </Headline>
        </div>

        <div className={styles.body}>

        </div>
      </section>

      <section className={cls(styles.section, styles.reviews)}>
          <div className={cls(styles.topbar, styles.reviews)}>
            <Headline
                color='black'
                type='section'
                classname={styles.headline}
            >
                <AutoIcon/>
                Reviews
            </Headline>
          </div>

          <div className={styles.body}>

          </div>
      </section>

      <section className={cls(styles.section, styles.reviews)}>
          <div className={cls(styles.topbar, styles.additional)}>
            <Headline
                color='black'
                type='section'
                classname={styles.headline}
            >
                <AutoIcon/>
                Additional Info
            </Headline>
          </div>

          <div className={styles.body}>

          </div>
      </section> 

    </Layout>
  );
};

export async function getStaticPaths(){
  const ids = [1,2,3,4,5,6,7,8];
  const paths = ids.map((id) => ({
    params: { tourId: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context:GetStaticPropsContext){
  const { params } = context;
  return{
      props:{
          
      },
      revalidate: 60 * 30
  }
}
