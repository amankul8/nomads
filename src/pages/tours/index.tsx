import {Layout, FirstBlockLayout} from "@/layouts"
import styles from "./tours.module.scss";
import { DropdownBlock } from "@/layouts/block/dropdown";
import { TourInfoCard } from "@/components/cards";
import cn from "classnames";

import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import React from "react";
import { Autocomplete, CircularProgress, Container, FormControlLabel, FormGroup, MenuItem, Select, SelectChangeEvent, Skeleton, Stack, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Grid from '@mui/material/Grid2';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { Headline } from "@/ui";
import { z } from 'zod';
import api from "@/config/axiosInstance";


const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }, 
];

const TourSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  promotion: z.number(),
  duration: z.string(),
  difficulty: z.string(),
  countries: z.array(z.string()),
  tour_types: z.array(z.string()),
  reviews: z.object({
    count: z.number(),
    rating: z.union([z.number(), z.null()])
  })
});

type sortIdType = 'popular' | 'name' | 'low_to_high' | 'high_to_low';

type sortType = Record<sortIdType, string>;

const sortList: sortType = {
  'popular': 'Popular',
  'name': 'Name',
  'low_to_high': 'Price Low to High',
  'high_to_low': 'Price High to Low',
};

type Tour = z.infer<typeof TourSchema>;

const fetchTours = async (props?: Record<string, string>): Promise<Tour[]> => {
  try {
    const response = await api.get('/tour');

    if (response.status === 200) {

      const result = TourSchema.array().safeParse(response.data);

      if (!result.success) {
        throw new Error('Validation error!');
      }

      return result.data; 
    } else {
      throw new Error('Fetch data error!');
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Ошибка при получении данных:', err.message);
    } else {
      console.error('Произошла неизвестная ошибка');
    }
    return [];
  }
}

export default function Main() {

  const [duration, setDuration] = React.useState<number[]>([20, 37]);
  const [price, setPrice] = React.useState<number[]>([0, 15000]);
  const [countries, setCountries] = React.useState<number[]>([]);
  const [types, setTypes] = React.useState<number[]>([]);
  const [destinations, setDestinations] = React.useState<typeof top100Films>([]);
  const [activities, setActivities] = React.useState<number[]>([]);
  const [levels, setLevels] = React.useState<number[]>([0, 10]);

  const [view, setView] = React.useState<'list'|'module'>('module');

  const [tours, setTours] = React.useState<Tour[]>([]);
  const [status, setStatus] = React.useState<'idle'|'sussecced'|'loading'>('idle');
  const [sortId, setSortId] = React.useState<sortIdType>('popular');

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortId(event.target.value as sortIdType);
  };

  const handleViewChange = (event: React.MouseEvent<HTMLElement>, nextView: 'list'|'module') => {
    setView(nextView);
  };

  const handleDurationChange = (event: Event, newDuration: number | number[]) => {
    setDuration(newDuration as number[]);
  };

  const handlePriceChange = (event: Event, newPrice: number | number[]) => {
    setPrice(newPrice as number[]);
  };

  const handleCountriesChange = (event: Event, newPrice: number | number[]) => {
    setPrice(newPrice as number[]);
  };

  const handleTypesChange = (event: Event, newPrice: number | number[]) => {
    setPrice(newPrice as number[]);
  };

  const handleDestinationsChange = (newDescriptions: typeof top100Films) => {
    setDestinations(newDescriptions);
  };

  const handleActivitiesChange = (event: Event, newPrice: number | number[]) => {
    setPrice(newPrice as number[]);
  };

  const handleLevelsChange = (event: Event, newLevels: number | number[]) => {
    setLevels(newLevels as number[]);
  };

  const fetchData = async () => {
    setStatus('loading');
    const data = await fetchTours();
    setTours(data);
    setStatus('sussecced');
  }

  const toSort = (tours: Tour[], id: sortIdType) => {
    switch (id) {
      case 'popular':
        return [...tours].sort((a, b) => a.name.localeCompare(b.name));
      
      case 'name':
        return [...tours].sort((a, b) => a.name.localeCompare(b.name));
  
      case 'high_to_low':
        return [...tours].sort((a, b) => b.price - a.price);
  
      case 'low_to_high':
        return [...tours].sort((a, b) => a.price - b.price);
  
      default:
        return tours;
    }
  }

  React.useEffect(() => {
     
    if(status === 'idle') {
      fetchData();
    }

  }, []);

  return (
    
    <Layout>
      <FirstBlockLayout
        bg_image="https://mcdn.wallpapersafari.com/medium/55/12/PZ6DvS.jpg"
        classname={styles.first_block}
      >
        <Headline color='white' type="main"> Choose your dream adventure   </Headline>
      </FirstBlockLayout>

      <section className={styles.content_wrapper}>
        <div className={cn('container', styles.container)}>

          <div className={styles.topbar}>
            <div className={styles.left_side}>
              <div> <strong>Found Tours:</strong> { tours.length } </div>
              <div> 
                <strong>Sort:</strong> 
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={sortId}
                  onChange={handleSortChange}
                  className={styles.sort_select}
                  renderValue={() => sortList[sortId]}
                >
                  
                  {
                    Object.keys(sortList).map((key: string) => (
                      <MenuItem value={key} key={key}> 
                        {sortList[key as sortIdType]} 
                      </MenuItem>
                    ))
                  }
                </Select> 
              </div>
            </div>
            
            <ToggleButtonGroup
              orientation="horizontal"
              value={view}
              exclusive
              onChange={handleViewChange}
              size="small"
              className={styles.right_side}
            >
              <ToggleButton value="list" aria-label="list">
                <ViewListIcon />
              </ToggleButton>
              <ToggleButton value="module" aria-label="module">
                <ViewModuleIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          
          <div className={styles.sidebar}>
            <div className={styles.bar}>
              <DropdownBlock
                title="Duration"
                icon='duration'
              >
                <div className={styles.range}>

                  <div className={ cn('text',styles.range_values)}>
                    <div className={styles.value}> 
                      <span className={styles.label}> From </span>
                      {duration[0]}
                    </div>
                    <div className={styles.value}> 
                      <span className={styles.label}> To (days) </span>
                      {duration[1]}  
                    </div>
                  </div>

                  <Slider
                    value={duration}
                    onChange={handleDurationChange}
                    valueLabelDisplay="off"
                    min={1}
                    max={50}
                  />
                </div>
              </DropdownBlock>

              <DropdownBlock
                title="Price"
                icon='duration'
              >
              
              <div className={styles.range}>

                <div className={ cn('text',styles.range_values)}>
                  <div className={styles.value}> 
                    <span className={styles.label}> From </span>
                    USD {price[0]}
                  </div>
                  <div className={styles.value}> 
                    <span className={styles.label}> To </span>
                    USD {price[1]}  
                  </div>
                </div>

                <Slider
                  value={price}
                  onChange={handlePriceChange}
                  valueLabelDisplay="off"
                  min={0}
                  max={15000}
                />
              </div>

              </DropdownBlock>

              <DropdownBlock
                title="Country"
                icon='duration'
              >
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Kyrgyzstan" />
                  <FormControlLabel control={<Checkbox/>} label="Uzbekistan" />
                  <FormControlLabel control={<Checkbox/>} label="Kazakhstan" />
                </FormGroup>
              </DropdownBlock>

              <DropdownBlock
                title="Types"
                icon='duration'
              >
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Type 1" />
                  <FormControlLabel control={<Checkbox/>} label="Type 2" />
                  <FormControlLabel control={<Checkbox/>} label="Type 3" />
                </FormGroup>
              </DropdownBlock>

              <DropdownBlock
                title="Destinations"
                icon='duration'
              >
                <Autocomplete
                  multiple
                  id="size-small-outlined-multi"
                  size="small"
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  value={destinations}
                  onChange={(event, neValue) => handleDestinationsChange(neValue)}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Enter" />
                  )}
                />
              </DropdownBlock>

              <DropdownBlock
                title="Activities"
                icon='duration'
              >
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Activity" />
                  <FormControlLabel control={<Checkbox/>} label="Activity" />
                  <FormControlLabel control={<Checkbox/>} label="Activity" />
                </FormGroup>
              </DropdownBlock>
              <DropdownBlock
                title="Level"
                icon='duration'
              >
                <div className={styles.range}>

                  <div className={ cn('text',styles.range_values)}>
                    <div className={styles.value}> 
                      <span className={styles.label}> Easy </span>
                      {levels[0]}
                    </div>
                    <div className={styles.value}> 
                      <span className={styles.label}> Dificult </span>
                      {levels[1]}  
                    </div>
                  </div>

                  <Slider
                    value={levels}
                    onChange={handleLevelsChange}
                    valueLabelDisplay="off"
                    min={0}
                    max={10}
                  />
                </div>
              </DropdownBlock>
            </div>
          </div> 

          <div className={cn(styles.content, {
            [styles.list]: view === 'list'
          })}>
            {  
              status === 'loading'
              ? <CircularProgress sx={{margin: 'auto'}}/>
              : status === 'sussecced'
              ? toSort(tours, sortId).map((item, index) => (
                  <TourInfoCard
                    tourId ={item.id}
                    name={item.name}
                    description={item.description}
                    image={"https://cdn.wallpapersafari.com/43/71/H9wItm.jpg"}
                    days={5}
                    price={item.price}
                    promotion={item.promotion}
                    countries={item.countries}
                    complexity={parseInt(item.difficulty)}
                    rating={item.reviews.rating}
                    reviewsCount={item.reviews.count}
                    isList={view === 'list'}
                    key={item?.id}
                  />
                ))
              : null
            }
          </div>

        </div>
      </section>

    </Layout>
  );
};
