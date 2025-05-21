import React, { SVGProps } from "react";
import styles from "./styles.module.scss";
import { Headline, Paragraph } from "@/ui";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

type ITourBookingFormTitle = {
    tourists: Array<string>,
};

const insurances = [
    {
        title: 'Multi-risk',
        text: '4.3% of the total amount',
        price: '2040 USD',
        link: 'Read more',
    },
    {
        title: 'Premium Multi-risk',
        text: '5.1% of the total amount',
        link: 'Read more',
        price: '2040 USD',
    },
    {
        title: 'You are insured',
        text: '',
        link: '',
        price: '0 USD',
    }

]

export const InsurancePlanCard = ({ tourists }: ITourBookingFormTitle) => {

    return (
        <div className={styles.wrapper}>
            {
                insurances.map((item, index) => {
                    return (
                        <div className={styles.card} key={index}>
                            <div className={styles.top}>
                                <Headline type="normal" color="black">
                                    {item.title}
                                </Headline>
                                <Paragraph>
                                    {item.text}
                                </Paragraph>
                                <a href="#"> 
                                    <span className={styles.link}>
                                        {item.link}
                                    </span>    
                                </a>
                            </div>
                            <div className={styles.bottom}>
                                {
                                    ['Askat', 'Aman'].map((name, index) => {
                                        return (
                                            <div className={styles.line}>
                                                
                                                <FormControlLabel
                                                    required
                                                    control={
                                                        <Checkbox sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />
                                                    }
                                                    label={name}
                                                    sx={{ color: 'var(--white)' }}
                                                />

                                                <span>{item.price}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                } )
            }
            
        </div>
    );
};