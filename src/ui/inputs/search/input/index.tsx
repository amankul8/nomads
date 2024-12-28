import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import cls from 'classnames';

import styles from './input.module.scss';

type InputType = 'text' | 'number' | 'date' | 'range'


interface ISearchInput extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string,
    type: InputType
}

export const SearchInput:React.FC<ISearchInput> = ({label, type}) => {
   switch(type) {
    case 'text':
        return (
            <div className={styles.input_wrapper}>
                <label className={styles.label}> {label} </label>
                <input type="text" />
            </div>
        );
    case 'number':
        return (
            <div className={styles.input_wrapper}>
                <label className={styles.label}> {label} </label>
                <input className='input' type="number" />
            </div>
        );
    case 'date':
        return (
            <div className={styles.input_wrapper}>
                <label className={styles.label}> {label} </label>
                date
            </div>
        );
    case 'range':
        return (
            <div className={styles.input_wrapper}>
                <label className={styles.label}> {label} </label>
                range
            </div>
        );    
    default:
        return <></>
   }
}