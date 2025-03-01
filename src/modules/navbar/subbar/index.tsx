import React, { memo, useMemo } from "react";
import styles from "./subbar.module.scss";
import cn from 'classnames';
import { AnimatePresence, motion } from "framer-motion";
import {
    DestinationsContent,
    AboutUsContent,
    ActivitiesContent,
    UsefulContent
} from "./contents";

interface SubbarProps {
    pageId: string;
    classname?: string
}

const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const contentMap: Record<string, {content: React.ReactNode, bg: string}> = {
    destinations: {
        content: <DestinationsContent />,
        bg: 'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg'
    },
    activities_tours: {
        content: <ActivitiesContent />,
        bg: 'https://www.wallpaperflare.com/static/90/294/365/mountains-lake-mountain-river-wallpaper.jpg'
    },
    about_us: {
        content: <AboutUsContent />,
        bg: 'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg'
    },
    useful_info: {
        content: <UsefulContent />,
        bg: 'https://www.wallpaperflare.com/static/90/294/365/mountains-lake-mountain-river-wallpaper.jpg'
    },
};

export const Subbar: React.FC<SubbarProps> = memo(({ pageId, classname }) => {
    const content = useMemo(() => contentMap[pageId], [pageId]);

    if (!pageId.trim()) return null;

    return (
        <AnimatePresence>
            <motion.div
                className={cn(styles.subbar, classname)}
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1 }}
                key="subbar"
            >
                <motion.img
                    src={content.bg}
                    variants={fadeVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={styles.bg}
                    transition={{ duration: 1 }}
                    key={content.bg} 
                />
                <div className={styles.content}>{content.content}</div>
            </motion.div>
        </AnimatePresence>
    );
});
