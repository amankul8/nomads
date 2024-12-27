import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import cls from 'classnames';

import styles from './input.module.scss';

type InputType = 'text' | 'number' | 'date' | 'range'


interface ISearchInput extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string,
    type: InputType
}

export const SearchInput:React.FC<ISearchInput> = () => {
    return (
        <div>
            
        </div>
    )
}