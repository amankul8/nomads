import React, { ReactNode, MouseEvent, KeyboardEvent } from 'react';
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState, useCallback } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { SvgIconProps } from "@mui/material";
import cls from 'classnames';

import styles from './section.module.scss';
import { Headline } from '@/ui';

interface ITourDetailSection {
    Icon: React.ComponentType<SvgIconProps>;
    title: string;
    children: ReactNode;
    className?: string;
    initiallyExpanded?: boolean;
    'aria-label'?: string;
}

const sectionVariants: Variants = {
    hidden: {
        height: 0,
        opacity: 0,
        overflow: "hidden",
        transition: {
            height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
            opacity: { duration: 0.25, delay: 0 }
        }
    },
    visible: {
        height: "auto",
        opacity: 1,
        overflow: "visible",
        transition: {
            height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
            opacity: { duration: 0.25, delay: 0.15 }
        }
    },
    exit: {
        height: 0,
        opacity: 0,
        overflow: "hidden",
        transition: {
            opacity: { duration: 0.2 },
            height: { duration: 0.3, delay: 0.1, ease: [0.04, 0.62, 0.23, 0.98] }
        }
    }
};

const iconVariants: Variants = {
    collapsed: { 
        rotate: 0,
        transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }
    },
    expanded: { 
        rotate: 180,
        transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }
    }
};

export const TourDetailSection: React.FC<ITourDetailSection> = ({ 
    Icon, 
    title, 
    children, 
    className, 
    initiallyExpanded = true,
    'aria-label': ariaLabel,
    ...rest 
}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(initiallyExpanded);

    const toggleSection = useCallback((event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => {
        event.stopPropagation();
        setIsExpanded(prev => !prev);
    }, []);

    const handleKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleSection(event);
        }
    }, [toggleSection]);

    return (
        <motion.section 
            className={cls(styles.section, className)} 
            aria-expanded={isExpanded}
            aria-label={ariaLabel || `${title} section`}
            {...rest}
        >
            <div className={cls('container', styles.container)}>
                <motion.header className={styles.topbar}>
                    <Headline 
                        color="black" 
                        type="section" 
                        classname={styles.headline} 
                    >
                        <Icon aria-hidden="true" />
                        {title}
                    </Headline>
                    
                    <div 
                        className={cls(styles.btn, {
                            [styles.btnExpanded]: isExpanded
                        })}
                        onClick={toggleSection}
                        onKeyDown={handleKeyDown}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isExpanded}
                        aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${title} section`}
                    >
                        <span className={styles.btnText}>
                            {isExpanded ? "Hide all" : "Expand all"}
                        </span>
                        <motion.div
                            variants={iconVariants}
                            animate={isExpanded ? "expanded" : "collapsed"}
                            className={styles.iconWrapper}
                        >
                            <KeyboardArrowDownIcon />
                        </motion.div>
                    </div>
                </motion.header>

                <AnimatePresence mode="wait">
                    {isExpanded && (
                        <motion.div
                            className={styles.body}
                            variants={sectionVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            key="section-body"
                            layout
                            layoutId={`section-${title}`}
                        >
                            <div className={styles.content}>
                                {children}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.section>
    );
};