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
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },
  { label: 'Like Stars on Earth', year: 2007 },
  { label: 'Taxi Driver', year: 1976 },
  { label: 'Lawrence of Arabia', year: 1962 },
  { label: 'Double Indemnity', year: 1944 },
  {
    label: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { label: 'Amadeus', year: 1984 },
  { label: 'To Kill a Mockingbird', year: 1962 },
  { label: 'Toy Story 3', year: 2010 },
  { label: 'Logan', year: 2017 },
  { label: 'Full Metal Jacket', year: 1987 },
  { label: 'Dangal', year: 2016 },
  { label: 'The Sting', year: 1973 },
  { label: '2001: A Space Odyssey', year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: 'Toy Story', year: 1995 },
  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
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
