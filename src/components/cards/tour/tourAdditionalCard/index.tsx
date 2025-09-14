import React, { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import styles from './tourAdditionalCard.module.scss';
import { Headline, Paragraph } from "@/ui";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface ITourAdditionalCard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string,
    text: string,
}

export const TourAdditionalCard:React.FC<ITourAdditionalCard> = ({title, text, ...rest}) => {

    const [isVisible, setIsVizible] = useState<boolean>(true);

    const variants = {
        hidden: {
            height: 0,
            opacity: 0,
            overflow: "hidden",
        },
            visible: {
            height: "auto",
            opacity: 1,
            overflow: "hidden",
        },
            exit: {
            height: 0,
            opacity: 0,
            overflow: "hidden",
        },
    }

    return (
        <div className={styles.card} {...rest}>
            <div className={styles.topbar}>
                <Headline color="blue" type="subsection"> {title} </Headline>
                <div className={styles.extends_btn} onClick={()=>setIsVizible(prev => !prev)}>
                    { isVisible? 'Hide all': 'Expand all' } <KeyboardArrowDownIcon/>
                </div>
            </div>
            <AnimatePresence initial={false}>
                {isVisible && (
                    <motion.div 
                        className={styles.body}
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.2 }}
                    >
                        <Paragraph> {text} </Paragraph>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}