import React from "react";
import dynamic from "next/dynamic";
import cls from "classnames";
import { Box, ImageList, ImageListItem, useMediaQuery } from '@mui/material';
import { FirstBlockLayout, Layout } from "@/layouts";
import styles from "./destination.module.scss";
import { Paragraph, Headline } from "@/ui";
import api from "@/config/axiosInstance";
import { DestinationDetailSchema, DestinationDetailType, DestinationSchema } from "@/store/models/destinations";
import { BASE_IMAGE_ULR, REVALIDATE_INTERVAL } from "@/config";
import { TourSchema, ToursType } from "@/store/models/tours.ts";
import {ImagesModal} from "@/components/modal";
import Head from "next/head";

// Динамический импорт компонентов
const Map = dynamic(() => import("@/components/blocks/map"), { ssr: false });
const TourSimpleCardSlider = dynamic(() => import("@/components/sliders/tour/tourSimpleCardSlider"), { ssr: false });

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
    const destinationRes = await api.get(`destination?id=${destinationId}`);
    const toursRes = await api.get('tour');

    if (destinationRes.status !== 200 || (Array.isArray(destinationRes.data) && destinationRes.data.length === 0)) {
      return { notFound: true };
    }

    const destinationResult = DestinationDetailSchema.array().safeParse(destinationRes.data);

    const toursData = toursRes.status === 200 && toursRes.data ? toursRes.data : null;
    const toursResult = toursData ? TourSchema.array().safeParse(toursData) : { success: true, data: [] };
    const validTours = toursResult.success ? toursResult.data : [];

    if (!destinationResult.success) {
      return { notFound: true };
    }

    return {
      props: {
        destination: destinationResult.data[0],
        tours: validTours,
      },
      revalidate: REVALIDATE_INTERVAL,
    };
  } catch (error) {
    return { notFound: true };
  }
}

type Destination = {
  destination: DestinationDetailType;
  tours?: ToursType[];
};

export default function Destination({ destination, tours }: Destination) {
  const { title, description, images, coordinates } = destination;

  const isSmallScreen = useMediaQuery('(max-width:768px)');
  const [currImg, setCurrImg] = React.useState<number>(0);
  const [isShowModal, setIsShowModal] = React.useState<boolean>(false);

  if (!destination) {
    return <div>Loading...</div>;
  }

  const handleModalShow = React.useCallback((imgInd: number) => {
    setCurrImg(imgInd);
    setIsShowModal(true);
  }, [])

  const handleModalClose = React.useCallback(() => {
    setIsShowModal(false);
  }, [])

  return (
    <Layout>
      <Head>
        <title> { 'Nomads | ' + title} </title>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      
      <FirstBlockLayout bg_image={images[0].url ? BASE_IMAGE_ULR + images[0].url : "https://mcdn.wallpapersafari.com/medium/55/12/PZ6DvS.jpg"}>
        <div className={cls('container', styles.main_block_content)}>
          <Headline color="white" type="main">
            {title}
          </Headline>
        </div>
      </FirstBlockLayout>

      <section className={styles.wrapper}>
        <div className={cls('container', styles.content)}>
          <div className={cls(styles.block, styles.info)}>
            <Headline color="black" type="section">
              {title}
            </Headline>
            <Paragraph>{description}</Paragraph>
          </div>

          <div className={cls(styles.block)}>
            <Headline color="black" type="section">
              Photo
            </Headline>
            <Box className={styles.photos}>
              <ImageList variant="masonry" cols={isSmallScreen ? 1 : 3} gap={3}>
                {images?.map((item: { url: string, alt: string }, index) => (
                  <ImageListItem key={item.url}>
                    <img
                      src={BASE_IMAGE_ULR + item.url}
                      alt={item.alt}
                      loading="lazy"
                      onClick={() => handleModalShow(index)}
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
              <Map coordinates={coordinates} />
            </div>
          </div>

          {tours && tours.length !== 0 && (
            <TourSimpleCardSlider list={tours} isCenteredMode title="Find our popular tours" />
          )}
        </div>
      </section>

      <ImagesModal 
          images={images}
          ind={currImg}
          isVisible={isShowModal}
          handlerModalClose={handleModalClose}
      />

    </Layout>
  );
}
