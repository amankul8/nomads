import React, { SVGProps } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

type ITourBookingFormTitle = {
    icon?: React.ReactElement
    title: string;
};

export const TourBookingFormTitle = ({ icon, title }: ITourBookingFormTitle) => {
    return (
        <div className={styles.title}>
            {icon || null}
            <h2 className={cn("normal-title", styles.text)}>{title}</h2>
        </div>
    );
};
