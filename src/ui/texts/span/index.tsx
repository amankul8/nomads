import { ReactNode } from 'react';
import styles from '../generalStyle.module.scss';

import cn from "classnames";

interface ISpan {
    classname?: string,
    children: ReactNode
}

export const Span = ({children, classname}: ISpan) => {

    return(
        <span 
            className={ cn( 'subtext', styles.text, classname)}
        >  
            {children}
        </span>
    )
}