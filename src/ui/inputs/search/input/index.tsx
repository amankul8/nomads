import React, { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import cls from 'classnames';

import styles from './input.module.scss';

type InputType = 'text' | 'number' | 'date' | 'range'


interface ISearchInput extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string,
    type: InputType
}

export const SearchInput:React.FC<ISearchInput> = ({label, type}) => {

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [value, setValue] = useState<string | number | Date>('');
    const [range, setRange] = useState<{start: number, end: number}>({start: 0, end: 100});


    const handleInputFocused = () => {
        setIsFocused(() => true);
    }

    const handleInputBlur = () => {
        setIsFocused(() => false);
    }

    switch(type) {
        case 'text':
            return (
                <div className={styles.input_wrapper}>
                    <label className={cls(styles.label, {
                        [styles.upLabel]: isFocused
                    })}> {label} </label>
                    <input className={styles.input} type="text" onFocus={handleInputFocused} onBlur={handleInputBlur} />
                </div>
            );
        case 'number':
            return (
                <div className={styles.input_wrapper}>
                    <label className={cls(styles.label, {
                        [styles.upLabel]: isFocused
                    })}> {label} </label>
                    <input className={styles.input} type="number" onFocus={handleInputFocused} onBlur={handleInputBlur} />
                </div>
            );
        case 'date':
            return (
                <div className={styles.input_wrapper}>
                    <div className={styles.input_date}>
                        <label className={cls(styles.label, styles.upLabel)}> From </label>
                        <input className={styles.input} type="date" />
                    </div>
                    <div className={styles.input_date}>
                        <label className={cls(styles.label, styles.upLabel )}> To </label>
                        <input className={styles.input} type="date" />
                    </div>
                </div>
            );
        case 'range':
            return (
                <div className={styles.input_wrapper}>
                    <label className={cls(styles.label, {
                        [styles.upLabel]: isFocused
                    })}> {label} </label>
                    range
                </div>
            );    
        default:
            return <></>
    }
}