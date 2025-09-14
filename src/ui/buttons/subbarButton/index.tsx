import React from "react";
import styles from './styles.module.scss';
import cn from 'classnames';
import Image from "next/image";

type SubbarType = {
    name: string,
    icon?: string
}

export const SubbarBtn:React.FC<SubbarType> = ({name, icon}) => {

    let icon_url = icon || '/images/general/ornament.png';

    return (
        <div className={styles.btn}>
            <div className={styles.icon_wr}>
                <Image 
                    src={icon_url}
                    height={35}
                    width={35}
                    alt={icon_url}
                />
            </div>
            <span className={cn('btn', styles.text)}>
                {name}
            </span>
        </div>
    )
} 

