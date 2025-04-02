import {Layout, FirstBlockLayout} from "@/layouts"
import styles from "./tours.module.scss";
import { DropdownBlock } from "@/layouts/block/dropdown";
import { TourInfoCard } from "@/components/cards";
import cn from "classnames";

import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import React from "react";
import { Autocomplete, CircularProgress, FormControlLabel, FormGroup, MenuItem, Select, SelectChangeEvent, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { Headline } from "@/ui";
import { fetchTours, ToursType } from "@/store/models/tours.ts";
import { useAppDispath, useAppSelector } from "@/store/store";
import { selectFilteredTours, selectTours, selectToursLoadingStatus } from "@/store/slices/tours.slice";
import { fetchTourFilterActivitiesAdd, fetchTourFilterActivitiesRemove, fetchTourFilterCountriesAdd, fetchTourFilterCountriesRemove, fetchTourFilterDestinations, fetchTourFilterDuration, fetchTourFilterLevels, fetchTourFilterPrice, selectTourFilterActivities, selectTourFilterCountries, selectTourFilterData, selectTourFilterDestinations, selectTourFilterDurations, selectTourFilterLevels, selectTourFilterPrices, selectTourFilterTypes } from "@/store/slices/tour_filter.slice";
import { selectTourTypes } from "@/store/slices/tourTypes.slice";
import { selectActivities } from "@/store/slices/activities.slice";
import { selectDestinations } from "@/store/slices/destinations.slice";

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }, 
];

const countries = [
  {id: 1, name: 'Kyrgyzstan'},
  {id: 2, name: 'Uzbekistan'},
  {id: 3, name: 'Kyrgyzstan'},
];

type sortIdType = 'popular' | 'name' | 'low_to_high' | 'high_to_low';

type sortType = Record<sortIdType, string>;

const sortList: sortType = {
  'popular': 'Popular',
  'name': 'Name',
  'low_to_high': 'Price Low to High',
  'high_to_low': 'Price High to Low',
};

export default function Tours() {

  const dispatch = useAppDispath();
  const loadingStatus = useAppSelector(selectToursLoadingStatus);

  const types = useAppSelector(selectTourTypes);
  const activities = useAppSelector(selectActivities);
  const destinations = useAppSelector(selectDestinations);

  const selectedDuration = useAppSelector(selectTourFilterDurations);
  const selectedPrice = useAppSelector(selectTourFilterPrices);
  const selectedLevels = useAppSelector(selectTourFilterLevels);

  const filterData = useAppSelector(selectTourFilterData);

  const tours = useAppSelector(selectFilteredTours(filterData));

  const [view, setView] = React.useState<'list'|'module'>('module');
  const [sortId, setSortId] = React.useState<sortIdType>('popular');

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortId(event.target.value as sortIdType);
  };

  const handleViewChange = (event: React.MouseEvent<HTMLElement>, nextView: 'list'|'module') => {
    setView(nextView);
  };

  const toSort = (tours: ToursType[], id: sortIdType) => {
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

  React.useEffect(()=>{
    dispatch(fetchTours());
  }, [])


  return (
    
    <Layout>
      <FirstBlockLayout
        bg_image="/images/bg/destinations/image7.jpg"
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
                      {selectedDuration[0]}
                    </div>
                    <div className={styles.value}> 
                      <span className={styles.label}> To (days) </span>
                      {selectedDuration[1]}  
                    </div>
                  </div>

                  <Slider
                    value={selectedDuration}
                    onChange={(event, values) => dispatch(fetchTourFilterDuration(values as number[]))}
                    valueLabelDisplay="off"
                    min={1}
                    max={180}
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
                    USD {selectedPrice[0]}
                  </div>
                  <div className={styles.value}> 
                    <span className={styles.label}> To </span>
                    USD {selectedPrice[1]}  
                  </div>
                </div>

                <Slider
                  value={selectedPrice}
                  onChange={(event, values) => dispatch(fetchTourFilterPrice(values as number[]))}
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
                  {
                    countries.map(item => 
                      <FormControlLabel 
                        key={item.id} 
                        control={
                          <Checkbox 
                            onChange={(e) => {
                              if(e.currentTarget.checked) dispatch(fetchTourFilterCountriesAdd(item.id))
                              else dispatch(fetchTourFilterCountriesRemove(item.id))
                            }}
                          />
                        } 
                        label={item.name} 
                      />
                    )
                  }
                </FormGroup>
              </DropdownBlock>

              <DropdownBlock
                title="Types"
                icon='duration'
              >
                <FormGroup>
                  {
                    types.map(item => 
                      <FormControlLabel key={item!.id} control={
                        <Checkbox/>
                      } label={item?.type} />
                    )
                  }
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
                  options={destinations}
                  getOptionLabel={(option) => option?.title || ""}
                  onChange={(event, newValue) => {
                    dispatch(fetchTourFilterDestinations(newValue.map(item => item!.id)));
                  }}
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
                  {
                    activities.map(item => 
                      <FormControlLabel key={item?.id} control={
                        <Checkbox
                          onChange={(e) => {
                            if(e.currentTarget.checked) dispatch(fetchTourFilterActivitiesAdd(item!.id))
                            else dispatch(fetchTourFilterActivitiesRemove(item!.id))
                          }}
                        />
                      } 
                      label={item?.name} />
                    )  
                  }
                  
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
                      {selectedLevels[0]}
                    </div>
                    <div className={styles.value}> 
                      <span className={styles.label}> Dificult </span>
                      {selectedLevels[1]}  
                    </div>
                  </div>

                  <Slider
                    value={selectedLevels}
                    onChange={(event, values) => dispatch(fetchTourFilterLevels(values as number[]))}
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
              loadingStatus ? <CircularProgress sx={{margin: 'auto'}}/>
              : toSort(tours, sortId).map((item, index) => (
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
                    rating={item.reviews.rating? parseInt(item.reviews.rating): 0}
                    reviewsCount={item.reviews.count}
                    isList={view === 'list'}
                    key={item?.id}
                  />
                ))
            }
          </div>

        </div>
      </section>

    </Layout>
  );
};
