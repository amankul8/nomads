import React, { ReactElement, ReactNode, MouseEvent } from 'react';
import styles from './section.module.scss';
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import { Headline } from '@/ui';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { SvgIconProps } from "@mui/material";
import cls from 'classnames';

interface ITourDetailSection {
    Icon: React.ComponentType<SvgIconProps>;
    title: string;
    children: ReactNode;
    classname?: string;
}

const sectionVariants: Variants = {
    hidden: {
        height: 0,
        opacity: 0,
        overflow: "hidden",
      },
      visible: {
        height: "auto",
        opacity: 1,
        overflow: "visible",
      },
      exit: {
        height: 0,
        opacity: 0,
        overflow: "hidden",
      },
    
};

export const TourDetailSection: React.FC<ITourDetailSection> = ({ Icon, title, children, classname, ...rest }) => {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const handleCloseSection = (event: MouseEvent) => {
        setIsVisible((prev) => !prev);
    };

    return (
        <motion.section className={cls(styles.section, classname)} {...rest}>
            <div className={cls('container', styles.container)}>
                <motion.div className={styles.topbar}>
                    <Headline color="black" type="section" classname={styles.headline}>
                        <Icon />
                        {title}
                    </Headline>
                    <div className={styles.btn} onClick={handleCloseSection}>
                        <span>{isVisible ? "Hide all" : "Expand all"}</span>
                        <KeyboardArrowDownIcon />
                    </div>
                </motion.div>
                <AnimatePresence mode="wait">
                    {isVisible && (
                        <motion.div
                            className={styles.body}
                            variants={sectionVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            key="body"
                        >
                            {children}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.section>
    );
};
