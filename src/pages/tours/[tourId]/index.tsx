import React from "react";
import dynamic from "next/dynamic";

import {FirstBlockLayout, Layout} from "@/layouts"
import { CustomButton, Headline, Paragraph, Rating } from "@/ui";
import styles from "./tour.module.scss";
import cn from 'classnames';

import AutoIcon from '@mui/icons-material/AutoAwesomeMotion';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import {IconSquareBorder} from "@/components/icons/tour/square";
import { ReviewInfoCard, TourAdditionalCard, TourDayAccommodationCard, TourDayInfoCard } from "@/components/cards";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";

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
import { TourDetailSection } from "./section";
import TourSimpleCardSlider from "@/components/sliders/tour/tourSimpleCardSlider";
import { DestinationsList } from "@/modules/destinations/destinationsList";
import api from "@/config/axiosInstance";
import {TourSchema} from "@/store/models/tours.ts/";
import { z } from 'zod';

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
  "https://mcdn.wallpapersafari.com/medium/64/7/qrZYhn.jpg",
];

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

const TourDetailSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  promotion: z.number(),
  duration: z.string(),
  difficulty: z.string(),
  countries: z.array(z.string()),
  tour_types: z.array(z.unknown()),
  reviews: z.object({
    count: z.number(),
    rating: z.number().nullable(),
  }),
  days: z.array(
    z.object({
      id: z.number(),
      accommodation: z.any(),
      day_number: z.number(),
      description: z.string(),
      main_image: z.string(),
      car_range: z.number(),
      tracking_range: z.number(),
      height_difference: z.string(),
      weather: z.string(),
      weather_date: z.string(),
      meals: z.string(),
      details: z.string(),
      tour: z.any(),
      destination: z.any(),
      entertainment: z.any(),
    })
  ),
});


type TourDetailType = z.infer<typeof TourDetailSchema>;

type TourType = {
  data: TourDetailType
};

export default function Tour({data}: TourType) {

  return (
    <Layout>
      <FirstBlockLayout 
        bg_image="https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?cs=srgb&dl=pexels-pixabay-247600.jpg&fm=jpg"
        withCloud={false}
      >
        <div className={cn('container', styles.main_block)}>

            <div className={styles.content}>
              <Headline color="white" type="main"> {data.name} </Headline>
              <div className={styles.rating_info}>
                <span>
                  <Paragraph> Travelers reviews </Paragraph>
                  <Rating rating={data.reviews.rating} type="star" size={20}/>
                </span>
                <span>
                  <Paragraph> {data.reviews.count} voter </Paragraph>
                  <Paragraph> {data.reviews.rating} / 5 </Paragraph>
                </span>
              </div>
              <div className={styles.mini_info}>
                <IconSquareBorder>
                  <LocalOfferIcon/>
                </IconSquareBorder>
                <Paragraph> From {data.price} € </Paragraph>
              </div>
            </div>

            <div className={styles.lower}>
              <div className={styles.mini_info}>
                <IconSquareBorder>
                  <LocalOfferIcon/>
                </IconSquareBorder>
                <Paragraph> Duration {data.duration} days </Paragraph>
              </div>
              <div className={styles.mini_info}>
                <IconSquareBorder>
                  <LocalOfferIcon/>
                </IconSquareBorder>
                <Paragraph> Next departure 03/21/2022 </Paragraph>
              </div>
              <div className={styles.mini_info}>
                <IconSquareBorder>
                  <LocalOfferIcon/>
                </IconSquareBorder>
                <Paragraph> December - March</Paragraph>
              </div>
              <div className={styles.mini_info}>
                <IconSquareBorder>
                  <LocalOfferIcon/>
                </IconSquareBorder>
                <Paragraph> Duration N days </Paragraph>
              </div>
            </div>
            
        </div>
      </FirstBlockLayout>

      <TourDetailSection title="Description" Icon={AutoIcon} classname={styles.itinerary}>
        <div className={styles.body}>
          <Paragraph>
            {data.description}
          </Paragraph>
        </div>
      </TourDetailSection>

      <TourDetailSection title="Itinerary" Icon={AutoIcon} classname={styles.itinerary}>
        <div className={styles.body}>
          <TourDayInfoCard/>
          <TourDayInfoCard/>
          <TourDayInfoCard/>
        </div>
      </TourDetailSection>

      <TourDetailSection title="Map" Icon={AutoIcon} classname={styles.map}>
        <div  className={styles.body}>
          <Map/>
        </div>
      </TourDetailSection>

      <TourDetailSection title="Photos" Icon={AutoIcon} classname={styles.photos}>
        <Box>
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
      </TourDetailSection>

      <TourDetailSection title="Accommodation" Icon={AutoIcon} classname={styles.accommodations}>
        <div className={styles.body}>
          <TourDayAccommodationCard/>
          <TourDayAccommodationCard/>
        </div>
      </TourDetailSection>

      <TourDetailSection title="Destinations" Icon={AutoIcon} classname={styles.destinations}>

        <div className={styles.body}>
          <DestinationsList
            list={[]}
          />
        </div>  
      </TourDetailSection>

      <TourDetailSection title="Prices" Icon={AutoIcon} classname={styles.prices}>
        <TableContainer component={Paper}>
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
                  <TableCell align="center"> <CustomButton color='blue' handler={()=>{}}> Bool now </CustomButton> </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className={styles.includes}>
          <div className={styles.included}>
            <Headline color="blue" type="subsection"> Included: </Headline>
            {/* <List dense={true}>
              {[1,2,3,4,5,6,7,8].map((item) =>
                <ListItem key={item}>
                  <CheckIcon />
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
              )
                
              }
            </List> */}
          </div>
          <div className={styles.excluded}>
            <Headline color="blue" type="subsection"> Excluded: </Headline>
            {/* <List dense={true}>
              {[1,2,3,4,5,6,7,8].map((item) => 
                <ListItem key={item}>
                  <CloseIcon />
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
            )}
            </List> */}
          </div>
        </div>
      </TourDetailSection>

      <TourDetailSection title="Activities" Icon={AutoIcon} classname={styles.activities}>
        <div className={styles.body}>
          {
            images.map((item, index) => {
              return (
                <Card sx={{ maxWidth: 500, minWidth: 280 }} key={index}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={item}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Lizard
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              )
            })
          }
        </div>
      </TourDetailSection>

      <TourDetailSection title="Reviews" Icon={AutoIcon} classname={styles.reviews}>
        <div className={styles.body}>
          <ReviewInfoCard/>
          <ReviewInfoCard/>
        </div>
      </TourDetailSection>

      <TourDetailSection title="Additional Info" Icon={AutoIcon} classname={styles.additional}>
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

      <TourDetailSection title="Similar Tours" Icon={AutoIcon} classname={styles.similar_tours}>
        <div className={styles.body}>
          <TourSimpleCardSlider
            list={[1,2,3,4,5, 6, 7, 8]}
            title=""
          />
        </div>
      </TourDetailSection>

    </Layout>
  );
};

export async function getStaticPaths(){
  let ids: number[] = [];

  try {
    const res = await api.get('tour');
    const data = res.data;

    const result = TourSchema.array().safeParse(data);

    if (result.success) {
      ids = result.data.map(item => item.id);
    }
  } catch (error: any) {
    ids = [];
  }

  const paths = ids.map((id) => ({
    params: { tourId: id.toString() },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }: { params: { tourId: string } }){

  const tourId = parseInt(params.tourId, 10);

  try {
    const res = await api.get(`tour/detail/${tourId}`);

    if (res.status != 200 || !res.data) {
      if (Array.isArray(res.data) && res.data.length === 0) {
        return { notFound: true };
      }
    }

    const result = TourDetailSchema.array().safeParse(res.data);

    if (!result.success) {
      return { notFound: true };
    }
    
    if(Array.isArray(result.data) && result.data.length == 0) {
      return { notFound: true };
    }

    return {
      props: {
        data: result.data[0],  
      },
      revalidate: 60 * 30,
    };
  } catch (error) {
    return { notFound: true };
  }
}
