import React from 'react';
import cn from "classnames";
import styles from "./styles.module.scss";
import { Paragraph } from '@/ui';
import { Checkbox } from '@mui/material';

type MoreTextCheckbox = {
    text: React.ReactElement,
    handler?: ()=>void
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const MoreTextCheckbox = ({text, handler}: MoreTextCheckbox) => {

    return (
        <div className={styles.checkbox}>
            <Checkbox {...label} />
            <Paragraph>
                {text}
            </Paragraph>
        </div>
    )
}