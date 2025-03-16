import React from "react";
import dynamic from "next/dynamic";
import cls from "classnames";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { BlockWithSkirt, FirstBlockLayout, Layout } from "@/layouts";
import styles from "./destination.module.scss";
import { Paragraph, Headline } from "@/ui";
import api from "@/config/axiosInstance";
import { DestinationDetailSchema, DestinationDetailType, DestinationSchema } from "@/store/models/destinations";
import { baseImageUrl } from "@/config";
import { red } from "@mui/material/colors";

// Динамический импорт компонентовz
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

export async function getStaticPaths() {
  let destinationsId: number[] = [];
  
  try {
    const res = await api.get('destinations');
    const data = res.data;

    const result = DestinationSchema.array().safeParse(data);

    if (result.success) {
      destinationsId = result.data.map(item => item.id);
    }
  } catch (error: any) {
    destinationsId = [];
  }

  const paths = destinationsId.map((id) => ({
    params: { destinationId: id.toString() },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}


export async function getStaticProps({ params }: { params: { destinationId: string } }) {
  const destinationId = parseInt(params.destinationId, 10);

  try {
    const res = await api.get(`destination?id=${destinationId}`)

    if (res.status != 200 || !res.data) {
      if (Array.isArray(res.data) && res.data.length === 0) {
        return { notFound: true };
      }
    }

    const result = DestinationDetailSchema.array().safeParse(res.data);

    if (!result.success) {
      return { notFound: true };
    }
    
    if(Array.isArray(result.data) && result.data.length == 0) {
      return { notFound: true };
    }

    return {
      props: {
        destinationData: result.data[0],  
      },
      revalidate: 10,
    };
  } catch (error) {
    return { notFound: true };
  }
}

type Destination = {
  destinationData?: DestinationDetailType;
};


export default function Destination({ destinationData }: Destination) {
  if (!destinationData) {
    return <div>Loading...</div>; // Покажем сообщение, если данные еще не загружены
  }

  const { title, description, images } = destinationData;

  return (
    <Layout>
      <FirstBlockLayout bg_image="https://mcdn.wallpapersafari.com/medium/55/12/PZ6DvS.jpg">
        <div className={cls('container', styles.main_block_content)}>
          <Headline color="white" type="main">
            {title}
          </Headline>
        </div>
      </FirstBlockLayout>

      <section className={styles.wrapper}>
        <div className={cls('container', styles.content)}>
          {/* Информация */}
          <div className={cls(styles.block, styles.info)}>
            <Headline color="black" type="section">
              {title}
            </Headline>
            <Paragraph>{description}</Paragraph>
          </div>

          {/* Фотографии */}
          <div className={cls(styles.block)}>
            <Headline color="black" type="section">
              Photo
            </Headline>
            <Box className={styles.photos}>
              <ImageList variant="masonry" cols={3} gap={3}>
                {images?.map((item: {url: string, alt: string}) => (
                  <ImageListItem key={item.url}>
                    <img
                      srcSet={baseImageUrl + item.url}
                      src={baseImageUrl + item.url}
                      alt={item.alt}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </div>

          {/* Карта */}
          <div className={cls(styles.block)}>
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
      </section>
    </Layout>
  );
}