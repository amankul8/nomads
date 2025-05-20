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
import LabelIcon from '@mui/icons-material/Label';


export default function ValidationForm() {

    const bookingData = useAppSelector(selectTourBookingData);

    const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        
    };

    return (
        <motion.div 
            key="validation"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={styles.wrapper}
        >

            <div className={styles.block}>
                <TourBookingFormTitle
                    icon={<LabelIcon/>}
                    title="Tour"
                />

                <div className={styles.line}>
                    
                </div>
                
            </div>

            <div className={styles.block}>
                <TourBookingFormTitle
                    icon={<LabelIcon/>}
                    title="Travel dates"
                />

                <div className={styles.line}>
                    
                </div>
                
            </div>

            <div className={styles.block}>
                <TourBookingFormTitle
                    icon={<LabelIcon/>}
                    title="Amount"
                />

                <div className={styles.line}>
                    
                </div>
                
            </div>

            <div className={styles.block}>
                <TourBookingFormTitle
                    icon={<LabelIcon/>}
                    title="The cost of your trip is 3000 $"
                />

                <div className={styles.line}>
                    
                </div>
                
            </div>
        </motion.div>
    )
}