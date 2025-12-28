import React from "react";
import styles from '../styles.module.scss';
import { motion } from "motion/react"

import { Headline, Paragraph } from "@/ui";

import { useAppSelector } from "@/store/hooks";
import { selectTourBookingData } from "@/store/slices/tour_booking.slice";

import TourIcon from '@mui/icons-material/Tour';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import InfoIcon from '@mui/icons-material/Info';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Image from "next/image";
import { TourBookingFormTitle } from "../form_parts/components/title";


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
                    icon={<TourIcon/>}
                    title="Tour"
                />

                <div className={styles.line}>
                    <Image
                        src={'/images/bg/nature_bg.jpg'}
                        width={100}
                        height={100}
                        alt=""
                        
                    />

                    <Headline type="normal" color="blue"> Tour Name </Headline>
                </div>
                
            </div>

            <div className={styles.block}>
                <TourBookingFormTitle
                    icon={<DateRangeIcon/>}
                    title="Travel dates"
                />

                <div className={styles.colunm}>
                    <Paragraph> Return date </Paragraph>
                    <Paragraph> Departure date </Paragraph>
                </div>
                
            </div>

            <div className={styles.block}>
                <TourBookingFormTitle
                    icon={<PriceChangeIcon/>}
                    title="Amount"
                />

                <div className={styles.colunm}>
                    <Paragraph> Return date </Paragraph>
                    <Paragraph> Departure date </Paragraph>
                </div>
                
                <div className={styles.line}>
                    <Headline type="subsection" color="blue"> Total </Headline>
                    <Headline type="subsection" color="blue"> 3000$ </Headline>
                </div>

                <div className={styles.line}>
                    <Headline type="normal" color="black"> DEPOSIT (40%) </Headline>
                    <Headline type="normal" color="black"> 600$ </Headline>
                </div>

            </div>

            <div className={styles.block}>
                <TourBookingFormTitle
                    icon={<InfoIcon/>}
                    title="Information"
                />

                <Paragraph>If you have a problem or have a question, call us on +996 701 88 00 16 (non-premium rate call).</Paragraph>
                
            </div>

            <div className={styles.block}>
                <TourBookingFormTitle
                    icon={<AttachMoneyIcon/>}
                    title="The cost of your trip is 3000 $"
                />

                <Paragraph> In order to validate your registration, we suggest that you pay a deposit of 30% (600 $) of the amount of the trip. </Paragraph>
                <Paragraph>Following your payment, you will receive an automatic e-mail from us summarizing your registration. A Nomads Travel advisor will confirm your final registration as soon as possible (availability, price of the trip).The balance of the trip will be paid upon arrival at the hotel in cash.</Paragraph>
            
            </div>
        </motion.div>
    )
}