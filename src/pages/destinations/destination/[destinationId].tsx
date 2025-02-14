import React from "react";
import dynamic from "next/dynamic";
import cls from "classnames";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { BlockWithSkirt, FirstBlockLayout, Layout } from "@/layouts";
import styles from "./destination.module.scss";
import { Paragraph, Headline } from "@/ui";

// Динамический импорт компонентов
const Map = dynamic(() => import("@/components/blocks/map"), { ssr: false });
const TourInfoCardSlider = dynamic(() => import("@/components/sliders/tour/tourInfoCardSlider"), { ssr: false });

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

const slides = [
  {
    id: 1,
    title: "The Virgin Nature 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit 1.",
    image: "https://cdn.wallpapersafari.com/43/71/H9wItm.jpg",
  },
  {
    id: 2,
    title: "The Virgin Nature 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit 2.",
    image: "https://mcdn.wallpapersafari.com/medium/17/17/5f7pHi.jpg",
  },
  {
    id: 3,
    title: "The Virgin Nature 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit 3.",
    image: "https://cdn.wallpapersafari.com/43/71/H9wItm.jpg",
  },
  {
    id: 4,
    title: "The Virgin Nature 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit 4.",
    image: "https://mcdn.wallpapersafari.com/medium/17/17/5f7pHi.jpg",
  },
  {
    id: 5,
    title: "The Virgin Nature 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit 5.",
    image: "https://cdn.wallpapersafari.com/43/71/H9wItm.jpg",
  },
];

export default function Destination() {
  return (
    <Layout>
      <FirstBlockLayout bg_image="https://mcdn.wallpapersafari.com/medium/55/12/PZ6DvS.jpg" />

      <section className={styles.wrapper}>
        {/* Левая часть */}
        <div className={styles.left_content}>
          {/* Информация */}
          <div className={cls(styles.content, styles.info)}>
            <Headline color="black" type="section">
              Kel-Suu
            </Headline>
            <Paragraph>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum.
            </Paragraph>
          </div>

          {/* Фотографии */}
          <div className={cls(styles.content)}>
            <Headline color="black" type="section">
              Photo
            </Headline>
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

          {/* Карта */}
          <div className={cls(styles.content)}>
            <Headline color="black" type="section">
              Map
            </Headline>
            <div className={styles.map_block}>
              <Map />
            </div>
          </div>

          {/* Слайдер */}
          <BlockWithSkirt image="">
            <TourInfoCardSlider list={slides} isCenteredMode title="Find our popular tours" />
          </BlockWithSkirt>
        </div>

        {/* Правая часть */}
        <div className={styles.right_list}>
          <Headline color="blue" type="normal" classname={styles.title}>
            Categories
          </Headline>
          <ul className={styles.list}>
            <li>Adventure</li>
            <li>Camping</li>
            <li>Cities</li>
            <li>Destinations</li>
            <li>Explore</li>
            <li>How to</li>
            <li>National parks</li>
            <li>Road trip</li>
            <li>Routes</li>
            <li>Tips</li>
            <li>Travel guide</li>
            <li>Travel tips</li>
            <li>Trips</li>
            <li>Vacation</li>
            <li>Visiting</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8];
  const paths = ids.map((id) => ({
    params: { destinationId: id.toString() },
  }));

  return {
    paths,
    fallback: "blocking", // Динамическая генерация страниц при необходимости
  };
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60 * 30, // Перегенерация раз в 30 минут
  };
}
