import * as React from 'react';

import cn from "classnames";
import styles from "./languages.module.scss"

type Language = {
    name: string,
    code: string
}

type Languages = Record<string, Language>;

const languages: Languages = {
    eng: {
        name: 'English',
        code: 'ENG'
    },
    fra: {
        name: 'Français',
        code: 'FRA'
    },
    trk: {
        name: 'Türkçe',
        code: 'TRK'
    },
    deu: {
        name: 'Deutsch',
        code: 'DEU'
    },
}
export const Languages = () => {

    const [currrentLangId, setCurrentLangId] = React.useState<string>('eng');
    const [open, setOpen] = React.useState<boolean>(false);
    
    return (
        <div className={styles.languages}>
            <div className={styles.current_lang}>

            </div>
            <ul className={styles.list}>
                
            </ul>
        </div>
    )
}