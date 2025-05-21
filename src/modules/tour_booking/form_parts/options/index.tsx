import React from "react";
import cn from "classnames";
import styles from '../general.module.scss';
import { AnimatePresence, motion } from "motion/react"

import TextField from '@mui/material/TextField';
import { Box } from "@mui/material";
import { Headline, Paragraph, Span } from "@/ui";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Tiers } from "@/store/models/tour_order";
import { useAppSelector } from "@/store/store";
import { selectTourBookingData } from "@/store/slices/tour_order.slice";
import { TourBookingFormTitle } from "../components/title";

import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DescriptionIcon from '@mui/icons-material/Description';
import ShieldIcon from '@mui/icons-material/Shield';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { AdditionalBenefitsCard } from "../components/additional_benefits";
import { InsurancePlanCard } from "../components/insurance_plan";
import { MoreTextCheckbox } from "../components/more_text_checkbox";



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
                    icon={<LocalOfferIcon/>}
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
                    icon={<ShieldIcon/>}
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
                    icon={<CheckCircleIcon/>}
                    title="Validation & acceptance of the travel contract"
                />

                <MoreTextCheckbox text={<> I, the undersigned, $name , acting both for myself and on behalf of the other registered persons, certify that I have read the program from which I registered for this trip, as well as the administrative formalities and health, information related to the security of the country and information related to insurance.</>}/>
                
                <MoreTextCheckbox text={<>I have read the <a href='#' style={{color: 'var(--blue)'}}> terms and conditions </a> of Nomads Travel on travel and accept in full. I am fully aware that during this trip, I may run certain risks inherent in particular to isolation, far from medical centers, and I assume them with full knowledge of the facts.</>}/>
            </div>

            <div className={styles.block}>
                <TourBookingFormTitle
                    icon={<CheckCircleIcon/>}
                    title="Responsible Traveler Charter"
                />

                <MoreTextCheckbox text={<> In addition, I have read the information about the country chosen on the website of the Ministry of Foreign Affairs in the section "Advice for travelers". I will check this information a few days before my departure. The signatory commits all the participants making up the group. </>}/>  

                <MoreTextCheckbox text={<> In addition, I have familiarized myself with <a href='#' style={{color: 'var(--blue)'}}> Nomads Voyage's Responsible Tourism Policy</a>, which outlines best practices for minimizing environmental and social impacts while traveling through Central Asia. I pledge to uphold these principles throughout my journey. </>}/>  
                
            </div>

            <div className={styles.block}>
                <TourBookingFormTitle
                    icon={<DescriptionIcon/>}
                    title="Newsletter & news"
                />

                <MoreTextCheckbox text={<>I would like to receive offers and news from Nomads Travel by e-mail</>}/>

                <MoreTextCheckbox text={<>I would like to receive offers and news from Nomads Travel partners by e-mail</>}/>
                
            </div>
        </motion.div>
    )
}