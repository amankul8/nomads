import React, { DetailedHTMLProps, HTMLAttributes, ReactNode, useState } from "react";
import styles from './dropdown.module.scss';
import cls from 'classnames';
import { Headline } from "@/ui";

import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Duration from 'public/icons/tour/duration.svg';
import { AnimatePresence, motion } from 'framer-motion'; // исправлено на корректный импорт

interface IDropdownBlock extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string,
    icon?: 'duration' | 'price' | 'country' | 'types' | 'destinations' | 'activities' | 'level',
    children: ReactNode,
    classname?: string
}

const iconMap = {
    duration: Duration,
    price: Duration,
    country: Duration,
    types: Duration,
    destinations: Duration,
    activities: Duration,
    level: Duration,
};

export const DropdownBlock: React.FC<IDropdownBlock> = ({ title, icon, children, classname, ...rest }) => {

    const [opened, setOpened] = useState<boolean>(false);

    const handleOpen = () => setOpened(prev => !prev);

    return (
        <div
            className={cls(styles.wrapper, { [styles.opened]: opened }, classname)}
            {...rest}
        >
            <div className={styles.header} onClick={handleOpen}>
                <div className={styles.title}>
                    {icon && React.createElement(iconMap[icon] || "div", { className: styles.icon })}
                    <Headline color={opened ? 'white' : 'black'} type='normal'>{title}</Headline>
                </div>
                <ArrowRightIcon className={cls(styles.arrow, { [styles.openedArrow]: opened })} />
            </div>

            <AnimatePresence>
                {opened && (
                    <motion.div
                        className={styles.body}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                        }}
                        style={{ overflow: "hidden" }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
