import React from "react";
import dynamic from "next/dynamic";
import cls from "classnames";

import { DestinationFirstBlock } from "@/components/pageFirstBlocks";
import { Layout } from "@/layouts";
import { GetStaticPropsContext } from "next";
import styles from "./destination.module.scss";
import {
    headlineColorTypes, 
    headlineFontFamilyTypes, 
    headlineTagTypes, 
    Paragraph, 
    SimpleHeadline,
} from "@/ui";
import Image from "next/image";

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


export default function Destination(props:any):JSX.Element{

    return(
        <Layout>
            <DestinationFirstBlock/>
            
            <section className={styles.wrapper}>

                <div className={styles.left_content}>
                    <div className={cls(styles.content, styles.info)}>
                        <SimpleHeadline
                            color={headlineColorTypes.black}
                            fontFamily={headlineFontFamilyTypes.caveatBrush}
                            tag={headlineTagTypes.h3}                        
                        >
                            Kel-Suu
                        </SimpleHeadline>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                        </Paragraph>
                    </div>

                    <div className={cls(styles.content)}>
                        <SimpleHeadline
                            color={headlineColorTypes.black}
                            fontFamily={headlineFontFamilyTypes.caveatBrush}
                            tag={headlineTagTypes.h3}                        
                        >
                            Photo
                        </SimpleHeadline>


                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                            <div className="grid gap-4">
                                <div>
                                    <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                    alt="gallery-photo"
                                    />
                                </div>
                                <div>
                                    <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center "
                                    src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                                    alt="gallery-photo"
                                    />
                                </div>
                                <div>
                                    <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                                    alt="gallery-photo"
                                    />
                                </div>
                                </div>
                                <div className="grid gap-4">
                                <div>
                                    <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    alt="gallery-photo"
                                    />
                                </div>
                                <div>
                                    <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                    alt="gallery-photo"
                                    />
                                </div>
                                <div>
                                    <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center "
                                    src="https://docs.material-tailwind.com/img/team-3.jpg"
                                    alt="gallery-photo"
                                    />
                                </div>
                                </div>
                                <div className="grid gap-4">
                                <div>
                                    <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                                    alt="gallery-photo"
                                    />
                                </div>
                                <div>
                                    <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center "
                                    src="https://docs.material-tailwind.com/img/team-3.jpg"
                                    alt="gallery-photo"
                                    />
                                </div>
                                <div>
                                    <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    alt="gallery-photo"
                                    />
                                </div>
                                </div>
                                <div className="grid gap-4">
                                <div>
                                    <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    alt="gallery-photo"
                                    />
                                </div>
                                <div>
                                    <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                                    alt="gallery-photo"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.photos}>
                            <Image
                                src="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                    <div className={cls(styles.content,styles.map)}>
                        <SimpleHeadline
                            color={headlineColorTypes.black}
                            fontFamily={headlineFontFamilyTypes.caveatBrush}
                            tag={headlineTagTypes.h3}                        
                        >
                            Map
                        </SimpleHeadline>
                        <div className={styles.map_block}>
                            {/* <Map/> */}
                        </div>
                    </div>
                    <div className={cls(styles.content, styles.tours)}>
                        <SimpleHeadline
                            color={headlineColorTypes.black}
                            fontFamily={headlineFontFamilyTypes.caveatBrush}
                            tag={headlineTagTypes.h3}                     
                        >
                            Tours In this Destinations
                        </SimpleHeadline>
                        
                    </div>
                </div>

                <div className={styles.right_list}>

                    <SimpleHeadline 
                        color={headlineColorTypes.blue}
                        fontFamily={headlineFontFamilyTypes.montserrat}
                        tag={headlineTagTypes.h4}
                        classname={styles.title}
                    >
                        Categories
                    </SimpleHeadline>

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