import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from "./SubmitButton.module.css";
import cn from "classnames";


interface buttonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>,HTMLButtonElement>{
    children: ReactNode,
    enablbed: boolean
}

export function SubmitButton({children, enablbed, ...props}: buttonProps):JSX.Element{


    return(
        <button disabled={!enablbed} className={cn(styles.button,{
            [styles.enabled]: enablbed===true
        })} {...props}>
            {children}
        </button>
    )
}