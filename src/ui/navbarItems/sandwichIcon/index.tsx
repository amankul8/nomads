import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./sandwichIcon.module.css";
import cn from "classnames";
import Border from "../../buttons/svg/btnSvgBorders/arrowBorder.svg";

interface ISandwichIcon extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    isOpen: boolean,
    classname?: string
}
export const SandwichIcon = ({isOpen, classname, ...props}:ISandwichIcon):JSX.Element=>{

    return(
        <div
            className={
                cn(
                    styles.icon_wrapper,
                    classname
                )
            }
            {...props}
        >
            <Border/>
            <span className={cn(styles.icon,
                    {
                        [styles.open]: isOpen
                    },
                )}
            />
        </div>
    )
} 