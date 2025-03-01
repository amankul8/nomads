'use client';

import {FirstBlockLayout, Layout} from "@/layouts"
import styles from "./accommodations.module.scss";
import cls from 'classnames';
import { CustomButton, Headline, Paragraph } from "@/ui";
import { useEffect, useState } from "react";

import { DateRange, Range} from 'react-date-range';
import { addDays,format } from "date-fns";

import {Autocomplete, Box, Button, Typography, TextField, Switch, FormControlLabel, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import { AccommodationCard } from "@/components/cards";

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

export default function Accommodations() {

  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [searchMode, setSearchMode] = useState<boolean>(true);
  const [location, setLocation] = useState<string>('');
  const [dateRange, setDateRange] = useState<{selection: Range}>({
    selection: {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    }
  });
  const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);
  
  const [tourists, setTourists] = useState<{
    adults: number,
    childrens: number,
    rooms: number,
    pets: boolean
  }>({
    adults: 2,
    childrens: 0,
    rooms: 1,
    pets: false
  });

  const [touristsBlockOpen, setTouristsBlockOpen] = useState<boolean>();

  const handleDateSelection = (range: Range) => {
    setDateRange(prev => range as  {selection: Range});
    setDatePickerOpen(prev => false);
  };

  const handleDatePickerOpen = () => {
    setDatePickerOpen(prev => true);
    setTouristsBlockOpen(prev => false);
  }

  const handleTouristsOpen = () => {
    setDatePickerOpen(prev => false);
    setTouristsBlockOpen(prev => true);
  }

  const handleIncrement = (key: keyof typeof tourists) => () => 
    setTourists(prev => ({ ...prev, [key]: typeof prev[key] === 'number' ? prev[key] + 1 : prev[key] }));
  
  const handleDecrement = (key: keyof typeof tourists) => () => 
    setTourists(prev => ({ ...prev, [key]: typeof prev[key] === 'number' ? Math.max(0, prev[key] - 1) : prev[key] }));

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout>

      <FirstBlockLayout
        bg_image="https://mcdn.wallpapersafari.com/medium/55/12/PZ6DvS.jpg"
        withCloud={false}
      >
        <div className={cls('container', styles.main_section)}>

          <div className={styles.content}>
            <Headline color="white" type="main"> Kyrgyzstan </Headline>
          </div>

          <div className={styles.bread_crumbs}>
            <Paragraph color='white'> Home / Accommodations </Paragraph>
          </div>

        </div>
      </FirstBlockLayout>

      <section className={styles.accommodations_section}>
        <div className={styles.search_section}>
          <div className={cls('container', styles.search_sw)}>
            <div className={ styles.search}>
              <Autocomplete
                disablePortal
                options={top100Films}
                renderInput={(params) => <TextField {...params} label="Where do you want to go?" />}
                className={styles.input}
                onOpen={() => setDatePickerOpen(prev => false)}
              />
              
              <Box className={cls(styles.dropdown)}>
                <Box 
                  onClick={handleDatePickerOpen}
                  className={styles.input}
                >
                  <CalendarMonthIcon/>
                  <Paragraph>
                    {format(dateRange.selection.startDate!, 'yyyy/dd/MMM' )} ~ {format(dateRange.selection.endDate!, 'yyyy/dd/MMM')}
                  </Paragraph>  
                </Box>
                <Box className={cls(styles.drop_block, {
                  [styles.open]: datePickerOpen 
                })}>
                  <DateRange
                    onChange={handleDateSelection}
                    showDateDisplay={false}
                    months={windowWidth > 768? 2: 1 }
                    ranges={[dateRange.selection]}
                    direction="horizontal"
                    scroll={{ enabled: windowWidth <= 768 }}
                  />
                </Box>
                  
              </Box>

              <Box className={cls(styles.dropdown)}>
                <Box 
                  onClick={handleTouristsOpen}
                  className={styles.input}
                >
                  <PersonIcon/>
                  <Paragraph>
                    {format(dateRange.selection.startDate!, 'yyyy/dd/MMM' )} ~ {format(dateRange.selection.endDate!, 'yyyy/dd/MMM')}
                  </Paragraph>  
                </Box>
                <Box className={cls(styles.drop_block, styles.tourists_drop, {
                  [styles.open]: touristsBlockOpen 
                })}>

                  <Box sx={{ minWidth: 200, width: '100%' }}>
                    <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                      <Typography>Adults</Typography>
                      <Box display="flex" alignItems="center">
                        <IconButton onClick={handleDecrement('adults')}><RemoveIcon /></IconButton>
                        <TextField value={tourists.adults} size="small" sx={{ width: 40, textAlign: 'center' }} disabled />
                        <IconButton onClick={handleIncrement('adults')}><AddIcon /></IconButton>
                      </Box>
                    </Box>
                    
                    <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                      <Typography>Children</Typography>
                      <Box display="flex" alignItems="center">
                        <IconButton onClick={handleDecrement('childrens')}><RemoveIcon /></IconButton>
                        <TextField value={tourists.childrens} size="small" sx={{ width: 40, textAlign: 'center' }} disabled />
                        <IconButton onClick={handleIncrement('childrens')}><AddIcon /></IconButton>
                      </Box>
                    </Box>
                    
                    <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                      <Typography>Rooms</Typography>
                      <Box display="flex" alignItems="center">
                        <IconButton onClick={handleDecrement('rooms')}><RemoveIcon /></IconButton>
                        <TextField value={tourists.rooms} size="small" sx={{ width: 40, textAlign: 'center' }} disabled />
                        <IconButton onClick={handleIncrement('rooms')}><AddIcon /></IconButton>
                      </Box>
                    </Box>
                    
                    <FormControlLabel
                      control={<Switch checked={tourists.pets} onChange={() => setTourists(prev => ({ ...prev, pets: !prev.pets }))} />}
                      label="Traveling with pets?"
                    />

                    <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                      Assistance animals aren’t considered pets.
                    </Typography>
                    
                    <Button 
                      variant="contained" 
                      fullWidth sx={{ mt: 2 }}
                      onClick={()=>setTouristsBlockOpen(prev => false)}
                    > 
                        Done 
                    </Button>
                  </Box>
                  
                </Box>
              </Box>
              <div className={styles.search_btn}>
                <CustomButton color="blue" active={true} handler={()=>{}}> Search </CustomButton>
              </div>
            </div>
          </div>
        </div>

        <Box className={cls('container', styles.search_content)}>
          <Box
            sx={{
              display: searchMode? 'flex': 'none'
            }} 
            className={styles.sidebar}
          >
            Side bar
          </Box>
          <Box className={styles.products}>
            <AccommodationCard/>
            <AccommodationCard/>
            <AccommodationCard/>
            <AccommodationCard/>
            <AccommodationCard/>
            <AccommodationCard/>
          </Box>
        </Box>

      </section>
    </Layout>
  );
};
