import React from "react";
import cn from "classnames";
import styles from './styles.module.scss';
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
            className={styles.form_part_wrapper}
        >
            <Headline type="normal" classname={styles.title} color="black"> 
                Number of Travelers
            </Headline>
            <Box className={styles.form_part} display="flex" gap={2}>
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

                <TextField
                    id="start-date"
                    label="Start date"
                    type="date"
                    size="small"
                    sx={{ width: 180 }}
                    onChange={handleChange('startDate')}
                    // error={Boolean(errors.startDate)}
                    // helperText={errors.startDate}
                    slotProps={{
                        inputLabel: { shrink: true }
                    }}
                />

                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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
                
            </Box>
        </motion.div>
    )
}