import { DetailedHTMLProps, InputHTMLAttributes, forwardRef} from "react";
import styles from "./Input.module.css";
import cn from "classnames";
import React from "react";

interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    isDisabled?: boolean
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(({ isDisabled,...props}, ref):JSX.Element=>{

    return(
        <input ref={ref}  className={cn(styles.input, {
                [styles.disabled]: isDisabled  
            })} 
            {...props}
        />
    )
});

Input.displayName = 'Input';