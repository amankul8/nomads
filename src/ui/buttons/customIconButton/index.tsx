import React from "react";
import cls from "classnames";

import styles from "./customIconButton.module.scss";
import Background from "@/components/icons/button/bg.svg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


type BtnType = 'play' | 'forward' | 'back' | 'flag';
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
            <Background className={styles.phone}/>
            {
                type == 'play'
                ? <PlayArrowIcon className={styles.icon}/>
                : type == 'forward'
                ? <ArrowForwardIcon className={styles.icon}/>
                : type == 'back'
                ? <ArrowBackIcon className={styles.icon}/>
                : <></>
            }
        </div>
    )
}