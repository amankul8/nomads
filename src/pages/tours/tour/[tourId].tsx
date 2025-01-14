import React from "react";
import { GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";

import {FirstBlockLayout, Layout} from "@/layouts"
import { Headline } from "@/ui";
import styles from "./tour.module.scss";

import AutoIcon from '@mui/icons-material/AutoAwesomeMotion';

const Map = dynamic(() => import("@/components/blocks/map"), { ssr: false });


export default function Tour() {

  return (
    
    <Layout>
      <FirstBlockLayout 
        bg_image="https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?cs=srgb&dl=pexels-pixabay-247600.jpg&fm=jpg"
        isFullSize={true}
        withCloud={false}
      >
        <div>
            
        </div>
      </FirstBlockLayout>
      
      <section className={styles.content_wrapper}>
            <div className={styles.itinerary}>
                <Headline
                    color='black'
                    type='section'
                    classname={styles.headline}
                >
                    <AutoIcon/>
                    Itinerary
                </Headline>

            </div>
            <div className={styles.map}>
                <Headline
                    color='black'
                    type='section'
                    classname={styles.headline}
                >
                    <AutoIcon/>
                    Map
                </Headline>
                <Map/>
            </div>
            <div className={styles.additional}>
                <Headline
                    color='black'
                    type='section'
                    classname={styles.headline}
                >
                    <AutoIcon/>
                    Additional Info
                </Headline>

            </div>  
            <div className={styles.phots}>
                <Headline
                    color='black'
                    type='section'
                    classname={styles.headline}
                >
                    <AutoIcon/>
                    Photos
                </Headline>

            </div>
            <div className={styles.reviews}>
                <Headline
                    color='black'
                    type='section'
                    classname={styles.headline}
                >
                    <AutoIcon/>
                    Reviews
                </Headline>
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
