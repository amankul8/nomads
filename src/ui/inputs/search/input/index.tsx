import React, { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import cls from 'classnames';

import styles from './input.module.scss';

type InputType = 'text' | 'number' | 'date'


interface ISearchInput extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string,
    type: InputType
}

export const SearchInput:React.FC<ISearchInput> = ({label, type}) => {

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [textValue, setTextValue] = useState<string | null>(null);
    const [numberValue, setNumberValue] = useState<number | null>(null);
    const [dateRange, setDateRange] = useState<{from: Date | null, to: Date | null} | null>(null)


    const handleInputFocused = () => {
        setIsFocused(() => true);
    }

    const handleInputBlur = () => {
        setIsFocused(() => false);
    }

    const handleTextInputChanged = (val: string) => {
        setTextValue(() => val);
    }
    
    const handleNumberInputChanged = (val: string) => {
        const numVel = parseInt(val);
        setNumberValue(() => numVel);
    }

    const handleFromDateInputChanged = (date: string) => {
        const dateVal = new Date(date);
        setDateRange({from: dateVal, to: null});
    }

    const handleToDateInputChanged = (date: string) => {
        const dateVal = new Date(date);
        setDateRange({from: null, to: dateVal});
    }

    switch(type) {
        case 'text':
            return (
                <div className={styles.input_wrapper}>
                    <label htmlFor='input_id_1' className={cls(styles.label, {
                        [styles.upLabel]: isFocused || textValue == null || textValue!.length > 0
                    })}> {label} </label>
                    <input 
                        className={styles.input} 
                        id='input_id_1' 
                        type="text" 
                        value={textValue == null? '': textValue}
                        onChange={(e)=>handleTextInputChanged(e.target.value)} 
                        onFocus={handleInputFocused} 
                        onBlur={handleInputBlur} 
                    />
                </div>
            );
        case 'number':
            return (
                <div className={styles.input_wrapper}>
                    <label htmlFor='input_id_2' className={cls(styles.label, {
                        [styles.upLabel]: isFocused || numberValue == null || numberValue > 0
                    })}> {label} </label>
                    <input 
                        className={styles.input} 
                        id='input_id_2' type="number" 
                        onChange={(e)=>handleNumberInputChanged(e.target.value)} 
                        onFocus={handleInputFocused} 
                        onBlur={handleInputBlur} 
                    />
                </div>
            );
        case 'date':
            return (
                <div className={styles.input_wrapper}>
                    <div className={styles.input_date}>
                        <label className={cls(styles.label, styles.upLabel)}> From </label>
                        <input 
                            className={styles.input} 
                            type="date" 
                            onChange={(e)=>handleFromDateInputChanged(e.target.value)}/>
                    </div>
                    <div className={styles.input_date}>
                        <label className={cls(styles.label, styles.upLabel )}> To </label>
                        <input 
                            className={styles.input} 
                            type="date" 
                            onChange={(e)=>handleToDateInputChanged(e.target.value)}/>
                    </div>
                </div>
            );   
        default:
            return <></>
    }
}