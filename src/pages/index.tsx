import React from "react";
import {Layout, FirstBlockLayout, UniversalBlock} from "@/layouts"
import {MainFirstBlock} from '@/components/blocks/index';
import { InfoBlock } from '@/components/blocks/info';
import { AttainmentCard } from "@/components/cards";
import { NumberAttainmentCard } from "@/components/cards";
import { ReviewBlock } from "@/components/sliders/review";

import styles from "@/styles/home.module.scss";
import cn from "classnames";
import { TourSearch,  } from "@/components/blocks";
import {Headline} from "@/ui";
import Image from "next/image";
import TourInfoCardSlider from "@/components/sliders/tour/tourInfoCardSlider";
import { BlockWithSkirt } from "@/layouts/index";
import { useAppDispath, useAppSelector } from "@/store/store";
import { selectStaticData } from "@/store/slices/static_data.slice";
import { fetchTours } from "@/store/models/tours.ts";
import { selectPopularTours } from "@/store/slices/tours.slice";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import DestinationsCardSlider from "@/components/sliders/tour/destinationsCardSlider";
import { fetchDestinations } from "@/store/models/destinations";
import { selectDestinations } from "@/store/slices/destinations.slice";

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

export default function Main() {

  const dispatch = useAppDispath();

  const popularTours = useAppSelector(selectPopularTours);
  const destinations = useAppSelector(selectDestinations);
  const staticData: Record<string, string> = useAppSelector(selectStaticData);
  
  React.useEffect(()=>{
    dispatch(fetchTours());
    dispatch(fetchDestinations());
  }, [dispatch])

  return (
    
    <Layout>

      <FirstBlockLayout>
        <MainFirstBlock slides={popularTours}/>
      </FirstBlockLayout>

      <TourSearch/>
      
      <InfoBlock 
        title='We are featured in' 
        text={staticData['we_are_featured_in'] ?? '...'}
        imageUrl=''
        href=''
      />

      <UniversalBlock
        title="Our experience"
        isBg={true}
      >
        <div className={styles.attainments_content}>
          <AttainmentCard
            id={1}
            title={'8 years Experiences'}
            description={staticData['experiences'] ?? '...'}
          />
          <AttainmentCard
            id={2}
            title={'Lots of Gears'}
            description={staticData['lots_of_gears'] ?? '...'}
          />
          <AttainmentCard
            id={3}
            title={'Most Completed Map'}
            description={staticData['most_completed_map'] ?? '...'}
          />
          <AttainmentCard
            id={4}
            title={'Customized Itineraries'}
            description={staticData['customized_itineraries'] ?? '...'}
          />
        </div>
      </UniversalBlock>  
      
      <BlockWithSkirt
        image=""
      >
        <TourInfoCardSlider
          list={[...popularTours, ...popularTours, ...popularTours]}
          isCenteredMode
          title="Find our popular tours"
        />
      </BlockWithSkirt>
      
      <UniversalBlock
        title='Our experience in quantitative terms'
      >
        <div className={styles.attainments_content}>
          <NumberAttainmentCard
            name={'Awesome hikers'}
            quantity={staticData['awesome_hikers'] ?? '...'}
          />  
          <NumberAttainmentCard
            name={'Stunning places'}
            quantity={staticData['stunning_places'] ?? '...'}
          />
          <NumberAttainmentCard
            name={'Miles to hike'}
            quantity={staticData['km_to_trek'] ?? '...'}
          />
          <NumberAttainmentCard
            name={'Days in service'}
            quantity={staticData['days_in_service'] ?? '...'}
          />
        </div>
          
      </UniversalBlock> 

      <BlockWithSkirt
        image=""
      >
        <DestinationsCardSlider
          list={destinations}
          isCenteredMode
          title="Destinations"
        />
      </BlockWithSkirt>

      <UniversalBlock
        isBg={true}
        title="Activities"
      >
        <div className={styles.activities}>
          {
            images.map((item, index) => {
              return (
                <Card sx={{ maxWidth: 568, minWidth: 280, width: 'max-content' }} key={index}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="280"
                      image={item}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Lizard
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              )
            })
          }
        </div>
      </UniversalBlock>

      <BlockWithSkirt
        image=""
      >
        <ReviewBlock/>
      </BlockWithSkirt>

      <section className={styles.partners}>
        <div className={cn('container', styles.container)}>
          <Headline
              color='black'
              type='section'
          >
              Our partners
          </Headline>
          <div className={styles.content}>
              <Image
                  className={styles.logo}
                  src='/images/partners/img1.png'
                  width={400}
                  height={400}
                  alt=""
              />
              <Image
                  className={styles.logo}
                  src='/images/partners/img2.png'
                  width={400}
                  height={400}
                  alt=""
              />
              <Image
                  className={styles.logo}
                  src='/images/partners/img3.png'
                  width={400}
                  height={400}
                  alt=""
              />
              <Image
                  className={styles.logo}
                  src='/images/partners/img4.png'
                  width={400}
                  height={400}
                  alt=""
              />
              <Image
                  className={styles.logo}
                  src='/images/partners/img5.png'
                  width={400}
                  height={400}
                  alt=""
              />
          </div>
        </div>
      </section>
      
      <section className={styles.images}>
        <figure className={styles.frame}>
          <Image className={styles.image} width={1920} height={1080}  src='/images/bg/destinations/image1.webp' alt={''} key={'1'}/>
        </figure>
        <figure className={styles.frame}>
          <Image className={styles.image} width={1920} height={1080}  src='/images/bg/destinations/image8.jpg' alt={''} key={'2'}/>
        </figure>
        <figure className={styles.frame}>
          <Image className={styles.image} width={1920} height={1080}  src='/images/bg/destinations/image3.jpg' alt={''} key={'3'}/>
        </figure>
        <figure className={styles.frame}>
          <Image className={styles.image} width={1920} height={1080}  src='/images/bg/destinations/image4.jpg' alt={''} key={'4'} />
        </figure>
        <figure className={styles.frame}>
          <Image className={styles.image} width={1920} height={1080}  src='/images/bg/destinations/image5.jpg' alt={''} key={'5'}/>
        </figure>

        <img className={styles.skirt}  src={'/images/blockSkirts/blueBlockSkirt.svg'} alt="" />
      </section>

    </Layout>
  );
};
