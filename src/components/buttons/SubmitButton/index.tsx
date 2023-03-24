import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef, HTMLAttributes, ReactNode } from "react";
import styles from "./SubmitButton.module.css";
import cn from "classnames";

interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>{
    children: ReactNode,
    enablbed: boolean,
}

export const SubmitButton = forwardRef<HTMLButtonElement, IButtonProps>(({children, enablbed, ...props}, ref):JSX.Element=>{

    return(
        <button disabled={!enablbed}
            className={cn(styles.button,{
            [styles.enabled]: enablbed===true
        })} {...props} ref={ref}>
            {children}
        </button>
    )
});