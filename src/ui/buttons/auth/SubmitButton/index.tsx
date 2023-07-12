import { ButtonHTMLAttributes, 
    DetailedHTMLProps, 
    forwardRef, 
    ReactNode,
    ForwardedRef,} from "react";
import styles from "./SubmitButton.module.css";
import cn from "classnames";

interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>{
    children: ReactNode,
    enablbed: boolean,
}


export const SubmitButton = forwardRef(({children, enablbed, onClick,  ...props}:IButtonProps, ref:ForwardedRef<HTMLButtonElement>):JSX.Element=>{

    return(
        <button disabled={!enablbed}
            className={cn(styles.button,{
            [styles.enabled]: enablbed===true
        })} {...props} onClick={onClick} ref={ref}>
            {children}
        </button>
    )
});

SubmitButton.displayName = 'SubmitButton';