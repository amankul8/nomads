import React from "react";
import cn from "classnames";
import styles from '../general.module.scss';
import { AnimatePresence, motion } from "motion/react"

import TextField from '@mui/material/TextField';
import { Box } from "@mui/material";
import { Headline, Paragraph } from "@/ui";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Tiers } from "@/store/models/tour_order";
import { useAppSelector } from "@/store/store";
import { selectTourBookingData } from "@/store/slices/tour_order.slice";
import { TourBookingFormTitle } from "../components/title";

import LabelIcon from '@mui/icons-material/Label';
import DescriptionIcon from '@mui/icons-material/Description';

import { AdditionalBenefitsCard } from "../components/additional_benefits";
import { InsurancePlanCard } from "../components/insurance_plan";



export default function OptionsForm() {

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
                    icon={<LabelIcon/>}
                    title="Additional benefits"
                />

                <AdditionalBenefitsCard>
                    <Paragraph>
                        If you have any other specific service, any food allergies, dietary restrictions, or specific meal preferences (e.g., gluten-free, vegan, nut-free), please let us know below. We’ll do our best to accommodate your needs.
                    </Paragraph>
                    <Box sx={{background: 'var(--white)', padding: 1, }}>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper ipsum eu massa pulvinar, hendrerit placerat lacus gravida. Sed vestibulum sollicitudin turpis et ultricies. Duis sem nibh, euismod sollicitudin lobortis id, bibendum at mi. Aenean dui metus, placerat nec lectus nec, pretium sagittis nunc. Suspendisse blandit, lectus vel tincidunt dictum, tellus felis venenatis tortor, sit     
                        </Paragraph>
                    </Box>
                </AdditionalBenefitsCard>
                
            </div>

            <div className={styles.block}>
                <TourBookingFormTitle
                    icon={<DescriptionIcon/>}
                    title="Choose your insurance plan"
                />

                <InsurancePlanCard tourists={[]}/>

                <Paragraph>
                    This insurance contract must be taken out at the time of your online reservation. In the event of cancellation by one of the participants, the other people registered on the same file will only benefit from the cancellation insurance if they themselves have subscribed to it.
                </Paragraph>

                <Paragraph>
                    * If you do not take insurance with Nomads Travel, you will be asked to send us the information of your insurance policy as soon as your registration is confirmed (name of the company, insurance contract number and telephone number in case of assistance) as well as the person (s) to contact in case of emergency.    
                </Paragraph>
        
            </div>

            <div className={styles.block}>
                <TourBookingFormTitle
                    icon={<LabelIcon/>}
                    title="Validation & acceptance of the travel contract"
                />

                <div className={styles.line}>
                    
                </div>
                
            </div>

            <div className={styles.block}>
                <TourBookingFormTitle
                    icon={<LabelIcon/>}
                    title="Responsible Traveler Charter"
                />

                <div className={styles.line}>
                    
                </div>
                
            </div>

            <div className={styles.block}>
                <TourBookingFormTitle
                    icon={<LabelIcon/>}
                    title="Newsletter & news"
                />

                <div className={styles.line}>
                    
                </div>
                
            </div>
        </motion.div>
    )
}