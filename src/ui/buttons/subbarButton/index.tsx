import React from "react";
import styles from './styles.module.scss';
import Ornamint from '@/components/icons/general/ornament.svg'
import cn from 'classnames';

type SubbarType = {
    name: string,
    icon?: React.ReactNode
}

export const SubbarBtn:React.FC<SubbarType> = ({name, icon}) => {

    let Icon = icon || Ornamint; 

    return (
        <div className={styles.btn}>
            <div className={styles.icon_wr}>
                <Icon/>
            </div>
            <span className={cn('btn', styles.text)}>
                {name}
            </span>
        </div>
    )
} 

