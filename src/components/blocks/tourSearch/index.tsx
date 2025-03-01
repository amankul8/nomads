'use client';

import React, { useState, useCallback, useEffect } from "react";
import cn from "classnames";
import { motion, AnimatePresence } from "framer-motion";

import { DateRange, Range } from 'react-date-range';
import { addDays, format } from "date-fns";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import styles from "./tourSearch.module.scss";
import {
    CustomButton,
    Headline,
    Paragraph, 
} from "@/ui";
import { Slider } from "@mui/material";

interface ITourSearch extends React.HTMLProps<HTMLDivElement> {}

type FilmOptionType = {
    title: string;
    year: number;
}

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
];

const marks = [
    {
        value: 0,
        label: 'Easy',
    },
    {
        value: 100,
        label: 'Difficult',
    },
];

export const TourSearch: React.FC<ITourSearch> = () => {

    const [dateRange, setDateRange] = useState<Range>({
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection',
    });
    const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);

    const handleDateSelection = useCallback((range: Range) => {
        setDateRange(range);
        setDatePickerOpen(false);
    }, []);

    const handleDatePickerOpen = useCallback(() => {
        setDatePickerOpen(prev => !prev);
    }, []);

    return (
        <section className={styles.wrapper}>
            <div className={cn('container', styles.container)}>
                <Headline
                    type="section"
                    color="black"
                >
                    Search For Tour
                </Headline>

                <div className={styles.search_form}>
                    <Autocomplete
                        options={top100Films}
                        getOptionLabel={(option: FilmOptionType) => option.title}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                            <TextField {...params} label="Destinations" variant="standard" />
                        )}
                        sx={{
                            minWidth: 200,
                            maxWidth: 240,
                            width: '100%',
                        }}
                    />

                    <Autocomplete
                        options={top100Films}
                        getOptionLabel={(option: FilmOptionType) => option.title}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                            <TextField {...params} label="Duration" variant="standard" />
                        )}
                        sx={{
                            minWidth: 200,
                            maxWidth: 240,
                            width: '100%',
                        }}
                    />

                    <Box sx={{ minWidth: 200, maxWidth: 240, width: '100%' }}>
                        <Slider
                            track="normal"
                            aria-labelledby="level"
                            defaultValue={[10, 70]}
                            marks={marks}
                            sx={{ color: 'var(--blue)'}}
                            onChange={(e, newValue) => console.log(newValue)}
                        />
                    </Box>

                    <Box className={styles.date_range}>
                        <Box onClick={handleDatePickerOpen} className={styles.field}>
                            <CalendarMonthIcon />
                            <Paragraph>
                                {format(dateRange.startDate!, 'yyyy/dd/MMM')} ~ {format(dateRange.endDate!, 'yyyy/dd/MMM')}
                            </Paragraph>
                        </Box>

                        <AnimatePresence>
                            {datePickerOpen && (
                                <motion.div
                                    className={styles.drop}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <DateRange
                                        onChange={handleDateSelection}
                                        showDateDisplay={false}
                                        months={1}
                                        ranges={[dateRange]}
                                        direction="horizontal"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Box>

                    <CustomButton
                        color="blue"
                        active={true}
                        handler={() => {}}
                    >
                        Discover
                    </CustomButton>
                </div>
            </div>
        </section>
    );
};
