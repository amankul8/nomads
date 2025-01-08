import cn from "classnames";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import styles from "../generalStyle.module.scss";

export interface IParagraph extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    children: ReactNode,
    classname?: string
}

export const Paragraph = ({children, classname}:IParagraph):JSX.Element=>{

    return(
        <p 
            className={cn( 'text', styles.text, classname )}
        >  
            {children}
        </p>
    )
}