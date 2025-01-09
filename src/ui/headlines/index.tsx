import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./headline.module.css";
import cn from 'classnames';
import { ReactNode } from "react";

interface IHeadline extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> {
    type: 'main'|'section'|'subsection'|'normal'
    color: 'white'|'black'|'blue',
    children: ReactNode,
    underline?: boolean,
    classname?: string
}

export const Headline:React.FC<IHeadline> = ({type, color, children, underline, classname}) => {

    return (
        <h1
            className={cn({
                    [styles.black]: color == 'black',
                    [styles.white]: color == 'white',
                    [styles.blue]: color == 'blue',
                    ['main-title']: type == 'main',
                    ['section-title']: type == 'section',
                    ['subsection-title']: type == 'subsection',
                    ['normal-title']: type == 'normal',
                    [styles.underline]: underline != null && underline == true
                },
                styles.headline,
                classname
            )}
        >
            {children}
        </h1>
    ) 
}