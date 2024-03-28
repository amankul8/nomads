import { Span } from "@/ui";
import React from "react";
import styles from "./NumberAttainmentCard.module.css";

interface INumberAttainmentCard{
    name: string,
    quantity: string,
}

export const NumberAttainmentCard = ({name, quantity}:INumberAttainmentCard):JSX.Element=>{

    return(
        <div className={styles.card_wrapper}>
            <div>
                <span className={styles.quantity+' '+styles.text}>
                    {quantity}
                </span>
                <span className={styles.name+' '+styles.text}>
                    {name}
                </span>
            </div>
        </div>
    )
}