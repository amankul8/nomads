import React from "react";
import dynamic from "next/dynamic";
import cls from "classnames";

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { DestinationFirstBlock } from "@/components/pageFirstBlocks";
import { BlockWithSkirt, Layout, UniversalBlock } from "@/layouts";
import { GetStaticPropsContext } from "next";
import styles from "./destination.module.scss";
import {
    Paragraph, 
    Headline,
} from "@/ui";
import Image from "next/image";
import TourSlider from "@/components/sliders/tour";

const Map = dynamic(() => import("@/components/blocks/map"), { ssr: false });


const images = [
  "https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg",
  "https://mcdn.wallpapersafari.com/medium/90/19/rKHwW9.jpg",
  "https://mcdn.wallpapersafari.com/335/73/19/BF6f7i.jpg",
  "https://mcdn.wallpapersafari.com/medium/51/76/M5Sixv.jpg",
  "https://mcdn.wallpapersafari.com/335/82/70/nv9j5J.jpg",
  "https://mcdn.wallpapersafari.com/medium/9/2/U8jznD.jpg",
  "https://mcdn.wallpapersafari.com/medium/43/23/BpwJ56.jpg",
  "https://mcdn.wallpapersafari.com/335/51/51/sdioGm.jpg",
  "https://mcdn.wallpapersafari.com/medium/64/7/qrZYhn.jpg"

]

const slides = [
  {
    id: 1,
    title: 'The Virgin Nature 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit 1.',
    image: 'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg',
  },
  {
    id: 2,
    title: 'The Virgin Nature 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit 2 .',
    image: 'https://mcdn.wallpapersafari.com/medium/17/17/5f7pHi.jpg',
  },
  {
    id: 3,
    title: 'The Virgin Nature 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit 3.',
    image: 'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg',
  },
  {
    id:4,
    title: 'The Virgin Nature 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit 4.',
    image: 'https://mcdn.wallpapersafari.com/medium/17/17/5f7pHi.jpg',
  },
  {
    id: 5,
    title: 'The Virgin Nature 5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit 5.',
    image: 'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg',
  },
  {
    id: 6,
    title: 'The Virgin Nature 6',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit 5.',
    image: 'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg',
  },
  {
    id: 6,
    title: 'The Virgin Nature 6',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit 5.',
    image: 'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg',
  },
  {
    id: 6,
    title: 'The Virgin Nature 6',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit 5.',
    image: 'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg',
  },
]


export default function Destination(props:any):JSX.Element{

    return(
        <Layout>
            <DestinationFirstBlock/>
            
            <section className={styles.wrapper}>

                <div className={styles.left_content}>
                    <div className={cls(styles.content, styles.info)}>
                        <Headline
                            color='black'
                            type='section'                      
                        >
                            Kel-Suu
                        </Headline>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                        </Paragraph>
                    </div>

                    <div className={cls(styles.content)}>
                        <Headline
                            color='black'
                            type='section'                         
                        >
                            Photo
                        </Headline>

                        <Box className={styles.photos}>
                            <ImageList variant="masonry" cols={3} gap={3}>
                                {images.map((item) => (
                                <ImageListItem key={item}>
                                    <img
                                        srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item}?w=248&fit=crop&auto=format`}
                                        alt={''}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                ))}
                            </ImageList>
                        </Box>
                    </div>
                    <div className={cls(styles.content)}>
                        <Headline
                            color='black'
                            type='section'                         
                        >
                            Map
                        </Headline>
                        <div className={styles.map_block}>
                            {/* <Map/> */}
                        </div>
                    </div>
                    <BlockWithSkirt classname={cls(styles.content, styles.tours)} image="">
                        <TourSlider
                            list={slides}
                            isCenteredMode={true}
                            title="Tours In this Destinations"
                        />
                        
                    </BlockWithSkirt>
                </div>

                <div className={styles.right_list}>

                    <Headline 
                        color='blue'
                        type='normal' 
                        classname={styles.title}
                    >
                        Categories
                    </Headline>

                    <ul className={styles.list}>
                        <li> Adventure </li>
                        <li> Camping </li>
                        <li> Cities </li>
                        <li> Destinations </li>
                        <li> Explore </li>
                        <li> How to </li>
                        <li> National parks </li>
                        <li> Road trip </li>
                        <li> Routs </li>
                        <li> Tips </li>
                        <li> Travel guide </li>
                        <li> Travel tips </li>
                        <li> Trips </li>
                        <li> Vacation </li>
                        <li> Visiting </li>
                    </ul>
                </div>
            </section>

        </Layout>
    )
} 

export async function getStaticPaths(){
  const ids = [1,2,3,4,5,6,7,8];
  const paths = ids.map((id) => ({
    params: { destinationId: id.toString() },
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