import cn from "classnames";
import styles from "./item.module.css";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

interface INavbarItem extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color: 'white' | 'blue' | 'red',
    item: boolean,
    active?: boolean,
    classname?: string,
    children: ReactNode
}

export const NavbarItem:React.FC<INavbarItem> = ({color,  item, children, classname, active, ...rest}) => {


    return(
        <div
            className={cn( 'normal-title', styles.item, {
                    [styles.with_icon]: item,
                    [styles.white]: color == 'white',
                    [styles.blue]: color == 'blue',
                    [styles.red]: color == 'red',
                    [styles.active]: active,
                },
                classname
            )}
            {...rest}
        >
            {children}
        </div>
    )
}
