import React, { SVGProps } from "react";
import styles from "./styles.module.scss";
import { Headline, Paragraph } from "@/ui";

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

                            </div>
                        </div>
                    )
                } )
            }
            
        </div>
    );
};