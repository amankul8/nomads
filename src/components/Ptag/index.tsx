import { ReactNode } from "react";
import styles from "./Ptag.module.css";
import cn from "classnames";

interface ptagProps{
    children: ReactNode,
    size: string,
    color: string
}

export const Ptag = ({children, size, color}:ptagProps):JSX.Element=>{

    return(
        <p className={cn(styles.p, {
            [styles.l]: size == 'l',
            [styles.m]: size == 'm',
            [styles.s]: size == 's'
        })} style={{color: `${color}`}}>
            {children}
        </p>
    )
}