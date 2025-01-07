import React, { DetailedHTMLProps, HTMLAttributes, ReactNode, useState } from "react";
import cls from "classnames";

import styles from "./customButton.module.scss";
import RightBorder from "public/icons/buttons/btnTextRightBorder.svg";
import LeftBorder from "public/icons/buttons/btnTextLeftBorder.svg";  

type BtnColorType = 'white' | 'red' | 'blue'

interface ICustomButton extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    color: BtnColorType,
    active?: boolean,
    children: ReactNode,
    handler: () => void,
    classname?: string
}

export const CustomButton:React.FC<ICustomButton> = ({color, active, handler, children, classname}) => {

    const [hovered, setHovered] = useState<boolean>(false);

    const handleMouseOver = () => {
        setHovered(true);
    }

    const handleMouseOut = () => {
        setHovered(false);
    }

    return (
        <div className={cls(styles.btn, classname, {
                [styles.btn_white]: color == 'white',
                [styles.btn_blue]: color == 'blue',
                [styles.btn_red]: color == 'red',
                [styles.white_active]: (color == 'white' && active) || (hovered && color == 'white'),
                [styles.blue_active]: (color == 'blue' && active) || (hovered && color == 'blue'),
                [styles.red_active]: (color == 'red' && active) || (hovered && color == 'red'),
            })}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handler}
        >
            <LeftBorder className={styles.left_svg}/>
            <span> {children} </span>
            <RightBorder className={styles.right_svg}/>
        </div>
    )

}