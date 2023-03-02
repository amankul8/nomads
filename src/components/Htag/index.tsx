import { ReactNode } from "react";
import styles from "./Htag.module.css";

interface htagProps{
    children: ReactNode,
    tag: string,
    color: string
}

export const Htag = ({tag, color, children}:htagProps):JSX.Element=>{

    switch(tag){
        case 'h1':
            return(
                <h1 className={styles.h} style={{color: `${color}`}}>
                    {children}
                </h1>
            ); break;
        case 'h2':
            return(
                <h2 className={styles.h} style={{color: `${color}`}}>
                    {children}
                </h2>
            ); break;
        case 'h3':
            return(
                <h3 className={styles.h} style={{color: `${color}`}}>
                    {children}
                </h3>
            ); break;
        case 'h4':
            return(
                <h4 className={styles.h} style={{color: `${color}`}}>
                    {children}
                </h4>
            ); break;
        default: 
            return(
                <>
                </>
            )
    }
}