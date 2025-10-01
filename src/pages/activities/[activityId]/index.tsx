'use client';

import React, { useEffect, useState } from 'react';
import cls from 'classnames';
import { useRouter } from 'next/router';

import { FirstBlockLayout, Layout, UniversalBlock } from '@/layouts';
import { Headline, Paragraph } from '@/ui';
import TourSimpleCardSlider from '@/components/sliders/tour/tourSimpleCardSlider';

import styles from './activity.module.scss';
import { useAppSelector } from '@/store/hooks';
import { selectActivityById } from '@/store/slices/activities.slice';
import Loading from '@/components/loading';
import Custom404 from '@/pages/404';
import { NextSeo } from 'next-seo';
import { ImagesModal } from '@/components/modal';
import { Box, useMediaQuery } from '@mui/system';
import { Alert, ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';
import { BASE_IMAGE_ULR } from '@/config';
import { selectToursByActivityId } from '@/store/slices/tours.slice';

export default function Activity() {
  const router = useRouter();
  const isSmallScreen = useMediaQuery("(max-width:768px)");
  const idParam = router.query.activityId;

  const [status, setStatus] = useState<'idle' | 'loading' | 'successed' | 'failed'>('idle');
  const [currImg, setCurrImg] = React.useState<number>(0);
  const [isShowModal, setIsShowModal] = React.useState<boolean>(false);

  const id = typeof idParam === 'string' ? parseInt(idParam, 10) : NaN;

  const activity = useAppSelector(id ? selectActivityById(id) : () => undefined);
  const tours = useAppSelector(id ? selectToursByActivityId(id) : () => undefined);

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

    if (isNaN(id) || id <= 0 || !activity) {
      setStatus('failed');
      return;
    }

    setStatus('successed');
  }, [id, activity, router.isReady]);

  if (status === 'loading' || status === 'idle') {
    return <Loading />;
  }

  if (status === 'failed') {
    return <Custom404 />;
  }

  const getUrl = (url: any) => {
    return typeof url === 'string' && url.length > 0 ? encodeURI(url) : '';
  };

  return (

    <>
      <NextSeo
        title="Activities"
        description="Learn more about our team and mission."
        canonical={"http://localhost:3000/activities/" + id}
        openGraph={{
          url: "http://localhost:3000/activities/" + id,
          title: 'Activities',
          description: 'Learn more about our team and mission.',
        }}
      />

      <Layout>
        <FirstBlockLayout bg_image={activity && activity.images[0] ? getUrl(activity.images[0].url) : ''}>
          <div className={cls('container', styles.main_block_content)}>
            <Headline color="white" type="main">
              {activity?.title}
            </Headline>
          </div>
        </FirstBlockLayout>

        <UniversalBlock isBg={false} title="Description">
          <Paragraph>{activity?.description}</Paragraph>
        </UniversalBlock>

        <Box
          className='container'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            py: 3
          }}
        >
          <Headline color="black" type="section">Photo</Headline>
          <Box className={styles.photos}>
            <ImageList variant="masonry" cols={isSmallScreen ? 1 : 3} gap={3}>
              {
                activity && activity.images.length != 0
                  ? activity.images.map((item, index: number) => (
                    <ImageListItem key={index}>
                      <Image
                        src={BASE_IMAGE_ULR + item.url}
                        alt={item.alt || ''}
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
                Tours for this activity are not available yet
              </Alert>
            </UniversalBlock>
          }
        </Box>

        {
          activity && activity.images
            ? <ImagesModal
              images={activity.images}
              ind={currImg}
              isVisible={isShowModal}
              handlerModalClose={handleModalClose}
            />
            : null
        }
      </Layout>
    </>

  );
}
