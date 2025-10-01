import dynamic from "next/dynamic";

import { FirstBlockLayout, Layout } from "@/layouts"
import { CustomButton, Headline, Paragraph, Rating } from "@/ui";
import styles from "./tour.module.scss";
import cn from 'classnames';

import AutoIcon from '@mui/icons-material/AutoAwesomeMotion';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { IconSquareBorder } from "@/components/icons/tour/square";
import { ReviewInfoCard, TourAdditionalCard, TourDayAccommodationCard, TourDayInfoCard } from "@/components/cards";
import { Box, ImageList, ImageListItem, List, ListItem, ListItemText, Typography, useMediaQuery } from "@mui/material";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { TourDetailSection } from "../../../components/blocks/tour_detail_block";
import TourSimpleCardSlider from "@/components/sliders/tour/tourSimpleCardSlider";
import { DestinationsList } from "@/components/list/destinationsList";
import { NextSeo } from "next-seo";
import { useAppSelector } from "@/store/hooks";
import { selectPopularTours, selectTourById } from "@/store/slices/tours.slice";
import { useRouter } from "next/router";
import Loading from "@/components/loading";
import { useEffect, useMemo, useState } from "react";
import { selectDestinationsByIds } from "@/store/slices/destinations.slice";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { selectActivitiesByIds } from "@/store/slices/activities.slice";

const Map = dynamic(() => import("@/components/blocks/map"), { ssr: false });

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1 Person', 3090, 3090, 3090, 3090),
  createData('2 Person', 3090, 3090.0, 3090, 3090.3),
  createData('3 Person', 3090, 3090.0, 3090, 6.0),
  createData('4 Person', 3090, 3090, 3090, 3090),
  createData('Single bed', 3090, 3090, 3090, 3090),
];


interface TourProps {

}

export default function Tour({ }: TourProps) {

  const isSmallScreen = useMediaQuery('(max-width:768px)');

  const router = useRouter();
  const { tourId } = router.query;

  const parsedTourId = typeof tourId === 'string' ? parseInt(tourId, 10) : undefined;

  const tour = useAppSelector(parsedTourId ? selectTourById(parsedTourId) : () => undefined);
  const popularTours = useAppSelector(selectPopularTours);

  const destinationsIds = useMemo(() => {
    if (!tour) return [];
    const allDestinations = tour.days.flatMap(day => day.destinations);
    return Array.from(new Set<number>(allDestinations));
  }, [tour]);

  const destinations = useAppSelector(
    destinationsIds.length > 0
      ? selectDestinationsByIds(destinationsIds)
      : () => undefined
  );

  const activitiesIds = useMemo(() => {
    if (!tour) return [];
    const allActivities = tour.days.flatMap(day => day.entertainments);
    return Array.from(new Set<number>(allActivities));
  }, [tour]);

  const activities = useAppSelector(
    activitiesIds.length > 0
      ? selectActivitiesByIds(activitiesIds)
      : () => undefined
  )

  if (!tour) {
    return (
      <Loading />
    )
  }

  return (
    <>
      <NextSeo
        title="Tour | Nomad"
        description="Learn more about our team and mission."
        canonical="http://localhost:3000/tours/1"
        openGraph={{
          url: "http://localhost:3000/tours/1",
          title: "Tour | Nomad",
          description: 'Learn more about our team and mission.',
        }}
      />

      <Layout>
        <FirstBlockLayout
          bg_image="https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?cs=srgb&dl=pexels-pixabay-247600.jpg&fm=jpg"
          withCloud={false}
          bg_video="/video/video.mp4"
        >
          <div className={cn('container', styles.main_block)}>

            <div className={styles.content}>
              <Headline color="white" type="main"> {tour.name} </Headline>
              <div className={styles.rating_info}>
                <span>
                  <Paragraph> Travelers reviews </Paragraph>
                  <Rating rating={tour.avg_reviews.avg} type="star" size={20} />
                </span>
                <span>
                  <Paragraph> {tour.tour_reviews.length} voter </Paragraph>
                  <Paragraph> {tour.avg_reviews.avg} / 5 </Paragraph>
                </span>
              </div>
              <div className={styles.mini_info}>
                <IconSquareBorder>
                  <LocalOfferIcon />
                </IconSquareBorder>
                <Paragraph> From {tour.price} € </Paragraph>
              </div>
            </div>

            <div className={styles.lower}>
              <div className={styles.mini_info}>
                <IconSquareBorder>
                  <LocalOfferIcon />
                </IconSquareBorder>
                <Paragraph> Duration {tour.duration} days </Paragraph>
              </div>
              <div className={styles.mini_info}>
                <IconSquareBorder>
                  <LocalOfferIcon />
                </IconSquareBorder>
                <Paragraph> Next departure 03/21/2022 </Paragraph>
              </div>
              <div className={styles.mini_info}>
                <IconSquareBorder>
                  <LocalOfferIcon />
                </IconSquareBorder>
                <Paragraph> December - March</Paragraph>
              </div>
              <div className={styles.mini_info}>
                <IconSquareBorder>
                  <LocalOfferIcon />
                </IconSquareBorder>
                <Paragraph> Duration N days </Paragraph>
              </div>
            </div>

          </div>
        </FirstBlockLayout>

        <TourDetailSection title="Description" Icon={AutoIcon} className={styles.itinerary}>
          <div className={styles.body}>
            <Paragraph>
              {tour.description}
            </Paragraph>
          </div>
        </TourDetailSection>

        <TourDetailSection title="Itinerary" Icon={AutoIcon} className={styles.itinerary}>
          <div className={styles.body}>
            {
              tour.days.map((day, index) => {
                return <TourDayInfoCard day={day} key={index} />
              })
            }
          </div>
        </TourDetailSection>

        <TourDetailSection title="Map" Icon={AutoIcon} className={styles.map}>
          <div className={styles.body}>
            <Map />
          </div>
        </TourDetailSection>

        <TourDetailSection title="Photos" Icon={AutoIcon} className={styles.photos}>
          <Box>
            <ImageList variant="masonry" cols={isSmallScreen ? 1 : 3} gap={3}>

              {
                destinations ?
                  destinations.flatMap(item => item && item.images ? item.images : []).map((image, index) => (
                    <ImageListItem key={index + 1}>
                      <img
                        src={`${image.url}?w=248&fit=crop&auto=format`}
                        alt=""
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))
                  : ''
              }

            </ImageList>
          </Box>
        </TourDetailSection>

        <TourDetailSection title="Accommodation" Icon={AutoIcon} className={styles.accommodations}>
          <div className={styles.body}>
            {
              tour
              &&
              tour.days
              &&
              tour.days.length > 0
              &&
              tour.days.map((days, index) =>
                <TourDayAccommodationCard
                  accommodationsIds={days.accommodations}
                  day={index + 1}
                  key={index}
                />
              )
            }
          </div>
        </TourDetailSection>

        <TourDetailSection title="Destinations" Icon={AutoIcon} className={styles.destinations}>

          <div className={styles.body}>
            <DestinationsList
              list={destinations || []}
            />
          </div>
        </TourDetailSection>

        <TourDetailSection title="Ditails" Icon={AutoIcon} className={styles.prices}>
          {/* <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="center">Basic</TableCell>
                  <TableCell align="center">Standard</TableCell>
                  <TableCell align="center">Premium</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell className={styles.price} align="center">{row.calories} USD </TableCell>
                    <TableCell className={styles.price} align="center">{row.fat} USD </TableCell>
                    <TableCell className={styles.price} align="center">{row.carbs} USD </TableCell>
                    <TableCell align="center"> <CustomButton color='blue' handler={() => { }}> Bool now </CustomButton> </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> */}

          <div className={styles.includes}>
            <div className={styles.included}>
              <Headline color="blue" type="subsection"> Included: </Headline>
              <List dense={true}>
                {
                  tour.coverage.included.map((item) =>
                    <ListItem key={item}>
                      <CheckIcon />
                      <ListItemText
                        primary={item}
                      />
                    </ListItem>
                  )
                }
              </List>
            </div>
            <div className={styles.excluded}>
              <Headline color="blue" type="subsection"> Excluded: </Headline>
              <List dense={true}>
                {tour.coverage.excluded.map((item) =>
                  <ListItem key={item}>
                    <CloseIcon />
                    <ListItemText
                      primary={item}
                    />
                  </ListItem>
                )}
              </List>
            </div>
          </div>
        </TourDetailSection>

        <TourDetailSection title="Activities" Icon={AutoIcon} className={styles.activities}>
          <div className={styles.body}>
            {
              activities &&
              activities.map((activity, activityIndex) => (
                activity?.images
                  ? activity.images.slice(0, 5).map((image, imageIndex) => (
                    <Card sx={{ maxWidth: 550, minWidth: 280 }} key={`${activityIndex}-${imageIndex}`}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="200"
                          image={image.url}
                          alt={activity.title || 'Activity image'}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                            {activity.title || 'Activity'}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  ))
                  : null
              ))
            }
          </div>
        </TourDetailSection>

        <TourDetailSection title="Reviews" Icon={AutoIcon} className={styles.reviews}>
          <div className={styles.body}>
            <ReviewInfoCard />
            <ReviewInfoCard />
          </div>
        </TourDetailSection>

        <TourDetailSection title="Additional Info" Icon={AutoIcon} className={styles.additional}>
          <div className={styles.body}>
            <TourAdditionalCard
              title='Visa'
              text='Most of countries benefit 60 days visa for free to visit Kyrgyzstan as tourist. In spite of this, check the recommendations given by your Ministry of Foreign Affairs before coming. Also make sure that your passport is valid at least 6 months after your return date.'
            />

            <TourAdditionalCard
              title='Weather'
              text='During the trip, we will do our best to follow the customs regarding body acclimatization in altitude in order to avoid altitude sickness. We will also adapt to your physical condition and rhythm. Despite all these measures, altitude sickness can happen. Travelers could feel headaches, insomnia, loss of appetite, general tiredness or even nausea.
                Your trip has been also designed to avoid immediate exposition to local food and its preparation methods, because the hygiene standards are not always meeting western ones. In spite of this, as everyone’s body reacts differently, it’s possible to feel the effects of an exotic kitchen.
                Therefore, it’s strongly recommended to see a doctor, as he (she) is the only one who can prescribe an appropriate travel pharmacy. Besides, a pharmacy will always be available in our vehicles.
                We kindly ask you to communicate us any medical contraindication or food allergy, so that we will adapt to it,
                Medical infrastructures out of Bishkek are limited, therefore we strongly recommend our travelers to take travel insurance with repatriation policy.
              '
            />

            <TourAdditionalCard
              title='How to Book'
              text='Most of countries benefit 60 days visa for free to visit Kyrgyzstan as tourist. In spite of this, check the recommendations given by your Ministry of Foreign Affairs before coming. Also make sure that your passport is valid at least 6 months after your return date.'
            />

            <TourAdditionalCard
              title='Cancellation policy'
              text='Most of countries benefit 60 days visa for free to visit Kyrgyzstan as tourist. In spite of this, check the recommendations given by your Ministry of Foreign Affairs before coming. Also make sure that your passport is valid at least 6 months after your return date.'
            />

            <TourAdditionalCard
              title='Notes'
              text='Most of countries benefit 60 days visa for free to visit Kyrgyzstan as tourist. In spite of this, check the recommendations given by your Ministry of Foreign Affairs before coming. Also make sure that your passport is valid at least 6 months after your return date.'
            />
          </div>
        </TourDetailSection>

        <TourDetailSection title="Similar Tours" Icon={AutoIcon}>
          <TourSimpleCardSlider
            list={popularTours}
          />
        </TourDetailSection>

      </Layout>
    </>
  );
}; 
