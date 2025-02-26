import React, { memo, useMemo } from "react";
import styles from "./subbar.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import {
    DestinationsContent,
    AboutUsContent,
    ActivitiesContent,
    UsefulContent
} from "./contents";

interface SubbarProps {
    pageId?: string;
    image?: string;
}

const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const contentMap: Record<string, React.ReactNode> = {
    destinations: <DestinationsContent />,
    activities_tours: <ActivitiesContent />,
    about_us: <AboutUsContent />,
    useful_info: <UsefulContent />,
};

export const Subbar: React.FC<SubbarProps> = memo(({ pageId = "", image }) => {
    const bgImage = useMemo(() => image || "https://cdn.wallpapersafari.com/43/71/H9wItm.jpg", [image]);
    const content = useMemo(() => contentMap[pageId], [pageId]);

    if (!pageId.trim()) return null;

    return (
        <AnimatePresence>
            <motion.div
                className={styles.subbar}
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1 }}
                key="subbar"
            >
                <motion.img
                    src={bgImage}
                    variants={fadeVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={styles.bg}
                    transition={{ duration: 1 }}
                    key={bgImage} 
                />
                <div className={styles.content}>{content}</div>
            </motion.div>
        </AnimatePresence>
    );
});
