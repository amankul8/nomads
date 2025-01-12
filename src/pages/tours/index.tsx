import {Layout, FirstBlockLayout} from "@/layouts"
import styles from "./tours.module.scss";
import { DropdownBlock } from "@/layouts/block/dropdown";
import { TourInfoCard } from "@/components/cards";
import cls from "classnames";

import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import React from "react";
import { FormControlLabel, FormGroup, MenuItem, Select, SelectChangeEvent, ToggleButton, ToggleButtonGroup } from "@mui/material";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

export default function Main() {

  const [duration, setDuration] = React.useState<number[]>([20, 37]);
  const [price, setPrice] = React.useState<number[]>([0, 15000]);
  const [countries, setCountries] = React.useState<number[]>([]);
  const [types, setTypes] = React.useState<number[]>([]);
  const [destinations, setDestinations] = React.useState<number[]>([]);
  const [activities, setActivities] = React.useState<number[]>([]);
  const [levels, setLevels] = React.useState<number[]>([0, 10]);

  const [view, setView] = React.useState('list');

  const [sortValue, setSortValue] = React.useState('Ten');

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortValue(event.target.value);
  };

  const handleViewChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
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

  const handleDestinationsChange = (event: Event, newPrice: number | number[]) => {
    setPrice(newPrice as number[]);
  };

  const handleActivitiesChange = (event: Event, newPrice: number | number[]) => {
    setPrice(newPrice as number[]);
  };

  const handleLevelsChange = (event: Event, newLevels: number | number[]) => {
    setLevels(newLevels as number[]);
  };

  return (
    
    <Layout>
      <FirstBlockLayout
        bg_image="https://mcdn.wallpapersafari.com/medium/55/12/PZ6DvS.jpg"
      />

      <section className={styles.wrapper}>
          <div className={styles.sidebar}>
            <DropdownBlock
              title="Duration"
              icon='duration'
            >
              <div className={styles.range}>

                <div className={ cls('text',styles.range_values)}>
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

              <div className={ cls('text',styles.range_values)}>
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
              body
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

                <div className={ cls('text',styles.range_values)}>
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
          <div className={styles.content_wrapper}>
            <div className={cls('text', styles.content_header)}>
              <div className={styles.left}>
                <div> <strong>Found Tours:</strong> {165}</div>
                <div > 
                  <strong>Sort:</strong> 
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={sortValue}
                    onChange={handleSortChange}
                    className={styles.sort_select}
                    renderValue={() => sortValue}
                  >
                    <MenuItem value={'Ten'}>Ten</MenuItem>
                    <MenuItem value={'Twenty'}>Twenty</MenuItem>
                    <MenuItem value={'Thirty'}>Thirty</MenuItem>
                  </Select> 
                </div>
              </div>
              
              <ToggleButtonGroup
                orientation="horizontal"
                value={view}
                exclusive
                onChange={handleViewChange}
                size="small"
              >
                <ToggleButton value="list" aria-label="list">
                  <ViewListIcon />
                </ToggleButton>
                <ToggleButton value="module" aria-label="module">
                  <ViewModuleIcon />
                </ToggleButton>
              </ToggleButtonGroup>

            </div>
            <div className={styles.content}>
                {
                  [1,2,3,4,56,32,7,8,6,5,44,3,3].map((item, index) => {
                    return (
                      <TourInfoCard
                        name={"Title"}
                        description={ "Ipsum text"}
                        link={""}
                        image={"https://cdn.wallpapersafari.com/43/71/H9wItm.jpg"}
                        days={ 5}
                        price={ 1000}
                        promotion={30}
                        countries={ ["Kyrgyzstan", "Kazakstan"]}
                        complexity={ 3}
                        rating={3}
                        reviewsCount={73}
                        isList={false}
                      />
                    )
                  })
                }
            </div>
          </div>
      </section>

    </Layout>
  );
};
