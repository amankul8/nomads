import { Container } from "@mui/material";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./accommodation.module.scss";

interface IAccommodationCard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const AccommodationCard:React.FC<IAccommodationCard> = () => {
    return (
        <Container className={styles.card}>
            Card
        </Container>
    )
}