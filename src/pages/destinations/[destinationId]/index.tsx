'use client';

import React, { useEffect, useState } from "react";
import cls from "classnames";
import { Alert, Box, ImageList, ImageListItem, useMediaQuery } from "@mui/material";
import { FirstBlockLayout, Layout, UniversalBlock } from "@/layouts";
import styles from "./destination.module.scss";
import { Paragraph, Headline } from "@/ui";
import { BASE_IMAGE_ULR, REVALIDATE_INTERVAL } from "@/config";
import { ImagesModal } from "@/components/modal";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store/hooks";
import { selectDestinationById } from "@/store/slices/destinations.slice";
import Loading from "@/components/loading";
import Custom404 from "@/pages/404";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { selectToursByDestinationId } from "@/store/slices/tours.slice";

const Map = dynamic(() => import("@/components/blocks/map"), { ssr: false });
const TourSimpleCardSlider = dynamic(() => import("@/components/sliders/tour/tourSimpleCardSlider"), { ssr: false });

export default function Destination() {

  const router = useRouter();
  const idParam = router.query.destinationId;

  const isSmallScreen = useMediaQuery("(max-width:768px)");
  const [currImg, setCurrImg] = React.useState<number>(0);
  const [isShowModal, setIsShowModal] = React.useState<boolean>(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'successed' | 'failed'>('idle');

  const id = typeof idParam === 'string' ? parseInt(idParam, 10) : NaN;
  const destination = useAppSelector(id ? selectDestinationById(id) : () => undefined);
  const tours = useAppSelector(id ? selectToursByDestinationId(id) : () => undefined );

  const handleModalShow = React.useCallback((imgInd: number) => {
    setCurrImg(imgInd);
    setIsShowModal(true);
  }, []);

  const handleModalClose = React.useCallback(() => {
    setIsShowModal(false);
  }, []);

  useEffect(() => {
    if (!router.isReady) return;

    setStatus('loading');

    if (isNaN(id) || id <= 0 || !destination) {
      setStatus('failed');
      return;
    }

    setStatus('successed');
  }, [id, destination, router.isReady]);

  if (status === 'loading' || status === 'idle') {
    return <Loading />;
  }

  if (status === 'failed') {
    return <Custom404 />;
  }

  return (
    <>

      <NextSeo
        title="Destination | Nomad"
        description="Learn more about our team and mission."
        canonical={"http://localhost:3000/destinations" + id}
        openGraph={{
          url: "http://localhost:3000/destinations" + id,
          title: "Destination | Nomad",
          description: 'Learn more about our team and mission.',
        }}
      />

      <Layout>
        <FirstBlockLayout
          bg_image={
            destination?.images?.[0]?.url
              ? BASE_IMAGE_ULR + destination?.images[0].url
              : "https://mcdn.wallpapersafari.com/medium/55/12/PZ6DvS.jpg"
          }
        >
          <div className={cls("container", styles.main_block_content)}>
            <Headline color="white" type="main">
              {destination?.title}
            </Headline>
          </div>
        </FirstBlockLayout>

        <section className={styles.wrapper}>
          <div className={cls("container", styles.content)}>
            <div className={cls(styles.block, styles.info)}>
              <Headline color="black" type="section">{destination?.title}</Headline>
              <Paragraph>{destination?.description}</Paragraph>
            </div>

            <div className={cls(styles.block)}>
              <Headline color="black" type="section">Photo</Headline>
              <Box className={styles.photos}>
                <ImageList variant="masonry" cols={isSmallScreen ? 1 : 3} gap={3}>
                  {
                    destination
                      ? destination.images.map((item: { url: string; alt: string }, index: number) => (
                        <ImageListItem key={index}>
                          <Image
                            src={BASE_IMAGE_ULR + item.url}
                            alt={item.alt}
                            width={400}
                            height={300}
                            style={{ width: "100%", height: "auto", cursor: "pointer" }}
                            onClick={() => handleModalShow(index)}
                          />
                        </ImageListItem>
                      ))
                      : ""
                  }
                </ImageList>
              </Box>
            </div>

            <div className={cls(styles.block)}>
              <Headline color="black" type="section">Map</Headline>
              <div className={styles.map_block}>
                {
                  destination && <Map coordinates={Object.values(destination.coordinates)} />
                }
              </div>
            </div>

           {tours && tours.length > 0
            ? <TourSimpleCardSlider
              list={tours}
              isCenteredMode
              title="Tours"
            />
            : <UniversalBlock
              title='Tours'
            >
              <Alert sx={{ width: 'fit-content', margin: 'auto' }} severity="info">
                Tours for this destination are not available yet
              </Alert>
            </UniversalBlock>
          }
          </div>
        </section>

        <ImagesModal
          images={destination?.images}
          ind={currImg}
          isVisible={isShowModal}
          handlerModalClose={handleModalClose}
        />
      </Layout>
    </>
  );
}
