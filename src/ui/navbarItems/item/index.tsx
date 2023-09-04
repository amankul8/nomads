import {itemTextColorTypes, itemTextSizeTypes, itemTypes, IItem} from '@/ui';
import cn from "classnames";
import styles from "./item.module.css";


export const Item = ({itemTextColor, itemTextSize, item, children, classname, active, ...props}:IItem):JSX.Element=>{


    return(
        <div
            className={
                cn( 
                    styles.item,
                    {
                        [styles.active]: active,
                        
                        [styles.with_icon]: item === itemTypes.itemWithIcon,

                        [styles.white]: itemTextColor === itemTextColorTypes.white,
                        [styles.blue]: itemTextColor === itemTextColorTypes.blue,
                        [styles.red]: itemTextColor === itemTextColorTypes.red,

                        [styles.l]: itemTextSize === itemTextSizeTypes.l,
                        [styles.s]: itemTextSize === itemTextSizeTypes.s,
                    },
                    classname
                )
            }
            {...props}
        >
            {children}
        </div>
    )
}
