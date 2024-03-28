import React from "react";
import styles from "./InputDate.module.css"

interface IInputDate{
    inputHandler?: React.Dispatch<React.SetStateAction<any>>
    label: string
}

export const InputDate = ({inputHandler, label}:IInputDate):JSX.Element=>{

    return(
        <div className={styles.inputWrapper}>
            <label className={styles.label}>{label}</label>
            <input type='date' className={styles.input}/>
        </div>
    )
}