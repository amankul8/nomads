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

export default function Main() {

  const dispatch = useAppDispath();

  const popularTours = useAppSelector(selectPopularTours);
  const staticData: Record<string, string> = useAppSelector(selectStaticData);
  
  React.useEffect(()=>{
    dispatch(fetchTours());
  }, [])

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
          list={popularTours}
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
        <ReviewBlock/>
      </BlockWithSkirt>

      <section className={styles.partners}>
        <div className={cn('container', styles.container)}>
          <Headline
              color='black'
              type='section'
          >
              We are featured in
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
          <img className={styles.image} src='https://alizila.oss-us-west-1.aliyuncs.com/uploads/2018/02/chinese-tourists_featured.jpg' alt={''} key={'1'}/>
        </figure>
        <figure className={styles.frame}>
          <img className={styles.image} src='https://static.euronews.com/articles/stories/07/20/09/70/1440x810_cmsv2_9fd3e55d-8994-5043-a421-db603f303be9-7200970.jpg' alt={''} key={'2'}/>
        </figure>
        <figure className={styles.frame}>
          <img className={styles.image} src='https://mcdn.wallpapersafari.com/medium/57/40/lzjXFh.jpg' alt={''} key={'3'}/>
        </figure>
        <figure className={styles.frame}>
          <img className={styles.image} src='https://mcdn.wallpapersafari.com/medium/0/89/LjaVd1.jpg' alt={''} key={'4'} />
        </figure>
        <figure className={styles.frame}>
          <img className={styles.image} src='https://www.marketplace.org/wp-content/uploads/2022/05/LastTourist_cropped_nl.jpg?w=1200' alt={''} key={'5'}/>
        </figure>

        <img className={styles.skirt} src={'/images/blockSkirts/blueBlockSkirt.svg'} alt="" />
      </section>

    </Layout>
  );
};
