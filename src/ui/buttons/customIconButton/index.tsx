import React from "react";
import cls from "classnames";

import styles from "./customIconButton.module.scss";
import Phone from "public/icons/buttons/btnPhone.svg";
import Play from "public/icons/buttons/play.svg";
import Left from "public/icons/buttons/arrowLeft.svg";
import Right from "public/icons/buttons/arrowRight.svg";


type BtnType = 'play' | 'arrowRight' | 'arrowLeft';
type BtnShape = 'square' | 'curled';
type BtnColorType = 'white' | 'blue' | 'red';

interface ICustomIconButton {
    type: BtnType,
    shape: BtnShape,
    color: BtnColorType,
    handler: ()=>void
}

export const CustomIconButton:React.FC<ICustomIconButton> = ({type, shape, color, handler}) => {

    return (
        <div className={cls(styles.btn, {
            [styles.squared]: shape == 'square',
            [styles.curled]: shape == 'curled',
            [styles.red]: color == 'red',
            [styles.blue]: color =='blue',
            [styles.white]: color  == 'white',
        })}
            onClick={handler}
        >
            <Phone className={styles.phone}/>
            {
                type == 'play'
                ? <Play className={styles.icon}/>
                : type == 'arrowRight'
                ? <Right className={styles.icon}/>
                : type == 'arrowLeft'
                ? <Left className={styles.icon}/>
                : <></>
            }
        </div>
    )
}