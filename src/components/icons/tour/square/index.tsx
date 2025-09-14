import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from "./square.module.scss";

interface IIconSquareBorder extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
}

export const IconSquareBorder:React.FC<IIconSquareBorder> = ({children, ...rest}) => {

    return(
        <div className={styles.border} {...rest}>
            {children}
        </div>
    )
}