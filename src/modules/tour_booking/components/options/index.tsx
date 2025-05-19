import React from "react";
import cn from "classnames";
import styles from './styles.module.scss';
import { AnimatePresence, motion } from "motion/react"

export default function OptionsForm() {

    return (
        <motion.div 
            key="options"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
        >
            Options
        </motion.div>
    )
}