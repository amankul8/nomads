import React from "react";
import cn from "classnames";
import styles from '../general.module.scss';
import { AnimatePresence, motion } from "motion/react"

import TextField from '@mui/material/TextField';
import { Box } from "@mui/material";
import { Headline } from "@/ui";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Tiers } from "@/store/models/tour_order";
import { useAppSelector } from "@/store/store";
import { selectTourBookingData } from "@/store/slices/tour_order.slice";
import { TourBookingFormTitle } from "../components/title";
import BoyIcon from '@mui/icons-material/Boy';


export default function TravelersForm() {

    const bookingData = useAppSelector(selectTourBookingData);

    const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        
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
                    icon={<BoyIcon/>}
                    title="Number of Travelers"
                />

                <div className={styles.line}>
                    <TextField
                        id="adults"
                        label="Adults"
                        type="number"
                        size="small"
                        sx={{ width: 140 }}
                        value={2}
                        onChange={handleChange('adults')}
                        error={false}
                        helperText={null}
                    />
                    <TextField
                        id="children"
                        label="Children [-6 years old]"
                        type="number"
                        size="small"
                        sx={{ width: 160 }}
                        value={2}
                        onChange={handleChange('children')}
                        error={false}
                    />
                    <TextField
                        id="singleRooms"
                        label="Single Rooms"
                        type="number"
                        size="small"
                        sx={{ width: 140 }}
                        value={2}
                        onChange={handleChange('singleRooms')}
                        error={false}
                    />
                </div>

                <div className={styles.line}>
                    <TextField
                        id="start-date"
                        label="Start date"
                        type="date"
                        size="small"
                        sx={{ width: 200 }}
                        onChange={handleChange('startDate')}
                        // error={Boolean(errors.startDate)}
                        // helperText={errors.startDate}
                        slotProps={{
                            inputLabel: { shrink: true }
                        }}
                    />

                    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                        <InputLabel id="demo-select-small-label"> Tiers </InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            label="Tiers"
                            value={bookingData.tiers}
                            // onChange={handleChange}
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