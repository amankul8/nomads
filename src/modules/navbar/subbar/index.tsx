import React, { memo, useMemo, useState, useEffect } from "react";
import styles from "./subbar.module.scss";
import cn from 'classnames';
import { AnimatePresence, motion } from "framer-motion";
import {
    DestinationsContent,
    AboutUsContent,
    ActivitiesContent,
    UsefulContent
} from "./contents";
import Image from "next/image";

interface SubbarProps {
    pageId: string;
    classname?: string;
}

const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

type ContentType = {
    content: (
        handleMouseEnter?: (bg: string) => void,
        handleMouseLeave?: () => void
    ) => React.ReactNode;
    bg: string;
}

const contentMap: Record<string, ContentType> = {
    destinations: {
        content: (handleMouseEnter, handleMouseLeave) => (
            <DestinationsContent 
                handleMouseEnter={handleMouseEnter!} 
                handleMouseLeave={handleMouseLeave!} 
            />
        ),
        bg: 'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg'
    },
    activities_tours: {
        content: (handleMouseEnter, handleMouseLeave) => (
            <ActivitiesContent 
                handleMouseEnter={handleMouseEnter!} 
                handleMouseLeave={handleMouseLeave!} 
            />
        ),
        bg: 'https://www.wallpaperflare.com/static/90/294/365/mountains-lake-mountain-river-wallpaper.jpg'
    },
    about_us: {
        content: () => <AboutUsContent />,
        bg: 'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg'
    },
    useful_info: {
        content: () => <UsefulContent />,
        bg: 'https://www.wallpaperflare.com/static/90/294/365/mountains-lake-mountain-river-wallpaper.jpg'
    },
};

const Subbar: React.FC<SubbarProps> = memo(({ pageId, classname }) => {
    const content = useMemo(() => contentMap[pageId], [pageId]);
    const [bg, setBg] = useState<string>(content ? content.bg : '');

    useEffect(() => {
        if (content) {
            setBg(content.bg);
        }
    }, [content]);

    const handleMouseEnter = (bg: string) => {
        setBg(bg);
    };

    const handleMouseLeave = () => {
        setBg(content.bg);
    };

    if (!pageId.trim()) return null;

    return (
        <AnimatePresence>
            <motion.div
                className={cn(styles.subbar, classname)}
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1.5 }}
                key="subbar"
            >
                <motion.img
                    src={bg}
                    variants={fadeVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={styles.bg}
                    transition={{ duration: 1.5 }}
                    key={bg}
                />
                <div className={styles.content}>
                    {content.content(handleMouseEnter, handleMouseLeave)}
                </div>
            </motion.div>
        </AnimatePresence>
    );
});


Subbar.displayName = 'Subbar';
export default Subbar;