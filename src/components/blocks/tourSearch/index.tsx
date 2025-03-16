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
import { useAppSelector } from "@/store/store";
import { selectDestinations } from "@/store/slices/destinations.slice";
import { DestinationType } from "@/store/models/destinations";
import { useRouter } from "next/navigation";

interface ITourSearch extends React.HTMLProps<HTMLDivElement> {}


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

type DurationType = {
    title: string,
    value: number
}

const durations: DurationType[] = [
    {title: '1 day', value: 1},
    {title: '2 days', value: 2},
    {title: '3 days', value: 3},
    {title: '4 days', value: 4},
    {title: '5 days', value: 5},
    {title: '6 days', value: 6},
    {title: '1 week - 2 week', value: 7},
    {title: '2 week - 3 week', value: 7},
    {title: '1 month', value: 30},
]

export const TourSearch: React.FC<ITourSearch> = () => {

    const router = useRouter();

    const [dateRange, setDateRange] = useState<Range>({
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection',
    });

    const destinations = useAppSelector(selectDestinations);

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
                        options={destinations}
                        getOptionLabel={(option: DestinationType | undefined) => option!.title}
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
                        options={durations}
                        getOptionLabel={(option: DurationType) => option.title}
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
                            onChange={(e, newValue) => {}}
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
                                        onChange={(range) => handleDateSelection(range.selection)}
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
                        handler={() => router.push('/tours')}
                    >
                        Discover
                    </CustomButton>
                </div>
            </div>
        </section>
    );
};
