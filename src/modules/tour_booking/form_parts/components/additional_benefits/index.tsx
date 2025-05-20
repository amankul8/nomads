import React, { SVGProps } from "react";
import styles from "./styles.module.scss";

type ITourBookingFormTitle = {
    children: React.ReactNode
};

export const AdditionalBenefitsCard = ({ children }: ITourBookingFormTitle) => {
    return (
        <div className={styles.card}>
            {children}
        </div>
    );
};