import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Input.module.css";
import cn from "classnames";

interface inputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    type: string,
    disabled?: boolean
}

export function Input({type, disabled, ...props}:inputProps):JSX.Element{

    return(
        <input  type={type} className={cn(styles.input, {
            [styles.disabled]: disabled && disabled === true
        })} {...props}/>
    )
}
