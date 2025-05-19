import React from "react";
import cn from "classnames";
import styles from './styles.module.scss';
import { useSelector } from "react-redux";
import { selectTourBookingStep, updateTourBookingStep } from "@/store/slices/tour_order.slice";
import { CustomButton, Headline, Paragraph } from "@/ui";
import { useAppDispath, useAppSelector } from "@/store/store";
import TravelersForm from "./components/travelers";
import { AnimatePresence, motion } from "motion/react"
import ContactsForm from "./components/contacts";
import OptionsForm from "./components/options";
import ValidationForm from "./components/validation";

const TourBookingSteps: Record<string, string> = {
    '1': 'Travelers',
    '2': 'Contact Details',
    '3': 'Options',
    '4': 'Validation'
}

export default function TourBookingForm() {

    const step = useAppSelector(selectTourBookingStep);
    const dispatch = useAppDispath();

    const nextPageHandler = () => {
        if(step == 4) {
            console.log('Payment');
        } else {
            let newStep = step + 1;
            dispatch(updateTourBookingStep(newStep))
        };
    }

    const previousPageHandler = () => {
        if(step == 1) return;

        dispatch(updateTourBookingStep(step-1))
    }
    
    return (
        <div className={cn('container', styles.wrapper)}>
            
            <AnimatePresence mode="wait">
                <motion.h2
                    key={step}
                    className={styles.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    {TourBookingSteps[step]}
                </motion.h2>
            </AnimatePresence>
                
            <div className={styles.form}>
                <div className={styles.progress_side}>
                    <div className={styles.progress}>
                        {[1, 2, 3, 4].map((num) => (
                            <div
                            key={num}
                            className={cn(styles.point, {
                                [styles.active]: step === num,
                            })}
                            >
                            {step === num && num}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.form_side}>

                    <AnimatePresence mode="wait">
                        {(() => {
                            if (step === 1) return <TravelersForm key="travelers" />;
                            if (step === 2) return <ContactsForm key="contacts" />;
                            if (step === 3) return <OptionsForm key="options" />;
                            if (step === 4) return <ValidationForm key="validation" />;
                            return null;
                        })()}
                    </AnimatePresence>
                    
                </div>
                <div className={styles.control_side}>
                    <div className={styles.up}>
                        <Headline type="normal" classname={styles.title} color="white">
                            The Virgin Nature 1
                        </Headline>

                        <ul className={styles.list}>
                            <li className={styles.space}>
                                <Paragraph> Duration </Paragraph>
                                <Paragraph> 12 Days </Paragraph>
                            </li>
                            <li className={styles.space}> 
                                <Paragraph> Start </Paragraph> 
                                <Paragraph> 03/21/2022 </Paragraph>
                            </li>
                            <li className={styles.space}> 
                                <Paragraph> Start </Paragraph>
                                <Paragraph> 2022 </Paragraph>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.line}/>
                    
                    <div className={styles.down}>
                        <Headline type="normal" classname={styles.title} color="white">
                            Booking summary
                        </Headline>

                        <ul className={styles.list}>
                            <li className={styles.space}>
                                <Paragraph> 5 Adult </Paragraph>
                                <Paragraph>  $ 140 </Paragraph>
                            </li>
                            <li className={styles.space}> 
                                <Paragraph> Taxes and Fees </Paragraph> 
                                <Paragraph>  $ 40</Paragraph>
                            </li>
                        </ul>

                        <Headline type="normal" classname={styles.subtitle} color="white">
                            Extra Charges
                        </Headline>

                        <ul className={styles.list}>
                            <li className={styles.space}>
                                <Paragraph> 5 Single Room </Paragraph>
                                <Paragraph>  $ 140 </Paragraph>
                            </li>
                            <li className={styles.space}> 
                                <Paragraph> 5 Multi-risk insurance </Paragraph> 
                                <Paragraph>  $ 140 </Paragraph>
                            </li>
                            <li className={styles.space}> 
                                <Paragraph> 1 Premium Multi-risk insurance </Paragraph>
                                <Paragraph>  $ 140 </Paragraph>
                            </li>
                        </ul>

                        <div className={cn('section-title', styles.space)}>
                            <span> Total </span>
                            <span> $180</span>
                        </div>
                    </div>

                    <div className={cn(styles.space, styles.buttons)}>  
                        <CustomButton
                            color="white"
                            handler={previousPageHandler}
                        >
                            Previous
                        </CustomButton>
                        <CustomButton
                            color="red"
                            handler={nextPageHandler}
                        >
                            {step === 4 ? 'Payment' : 'Next Step'}
                        </CustomButton>
                    </div>

                </div>
            </div>
        </div>
    )
}