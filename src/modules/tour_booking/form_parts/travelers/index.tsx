import React from "react";
import styles from '../general.module.scss';
import { motion } from "motion/react"

import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Tiers, TourBookingType } from "@/store/models/tour_order";
import { useAppDispath, useAppSelector } from "@/store/hooks";
import { selectTourBookingData, updateTourBookingData } from "@/store/slices/tour_booking.slice";
import { TourBookingFormTitle } from "../components/title";
import BoyIcon from '@mui/icons-material/Boy';
import { format } from "date-fns";
import { MUI_DATE_FORMAT } from "@/config";

const today = format(new Date(), MUI_DATE_FORMAT);

export default function TravelersForm() {

    const bookingData = useAppSelector(selectTourBookingData);
    const dispatch = useAppDispath();

    const handleInputChange =
        <K extends keyof TourBookingType>(field: K) =>
            (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                dispatch(updateTourBookingData({
                    field,
                    value: event.target.value as TourBookingType[K]
                }));
            };

    const handleSelectChange =
        <K extends keyof TourBookingType>(field: K) =>
            (event: SelectChangeEvent) => {
                dispatch(updateTourBookingData({
                    field,
                    value: event.target.value as TourBookingType[K]
                }));
            };

    return (
        <motion.div
            key="treveler"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={styles.wrapper}
        >

            <div className={styles.block}>
                <TourBookingFormTitle
                    icon={<BoyIcon />}
                    title="Number of Travelers"
                />

                <div className={styles.line}>
                    <TextField
                        id="adults"
                        label="Adults"
                        type="number"
                        size="small"
                        sx={{ width: 140 }}
                        value={bookingData.adultsCount}
                        onChange={handleInputChange('adultsCount')}
                        error={bookingData.adultsCount < 1}
                        helperText={null}
                        slotProps={{
                            htmlInput: {
                                min: 0
                            }
                        }}
                    />
                    <TextField
                        id="children"
                        label="Children [-6 years old]"
                        type="number"
                        size="small"
                        sx={{ width: 160 }}
                        value={bookingData.childsCount}
                        onChange={handleInputChange('childsCount')}
                        error={false}
                        slotProps={{
                            htmlInput: {
                                min: 0
                            }
                        }}
                    />
                    <TextField
                        id="singleRooms"
                        label="Single Rooms"
                        type="number"
                        size="small"
                        sx={{ width: 140 }}
                        value={bookingData.singleRooms}
                        onChange={handleInputChange('singleRooms')}
                        error={false}
                        slotProps={{
                            htmlInput: {
                                min: 0
                            }
                        }}
                    />
                </div>

                <div className={styles.line}>
                    <TextField
                        id="start-date"
                        label="Start date"
                        type="date"
                        size="small"
                        sx={{ width: 200 }}
                        onChange={handleInputChange('startDate')}
                        value={bookingData.startDate}
                        slotProps={{
                            inputLabel: { shrink: true },
                            htmlInput: {
                                min: today
                            }
                        }}
                    />

                    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                        <InputLabel id="demo-select-small-label"> Tiers </InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            label="Tiers"
                            value={bookingData.tiers}
                            onChange={handleSelectChange('tiers')}
                        >
                            <MenuItem selected value={Tiers.basic}>Basic</MenuItem>
                            <MenuItem value={Tiers.standart}>Standard</MenuItem>
                            <MenuItem value={Tiers.premium}>Premium</MenuItem>
                        </Select>
                    </FormControl>
                </div>

            </div>
        </motion.div>
    )
}