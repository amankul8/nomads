import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import { AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import { SubbarBtn } from "@/ui";
import { useAppSelector } from "@/store/store";
import { selectActivities, selectActivitiesLoadingStatus } from "@/store/slices/activities.slice";
import { baseImageUrl } from "@/config";

type ActivitiesContent = {
    handleMouseEnter: (bg: string) => void, 
    handleMouseLeave: () => void
}

const listVariants = {
    visible: {
        opacity: 1,
        transition: {
        staggerChildren: 0.1,
        },
    },
    hidden: { opacity: 0 },
};

const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, },
};

export const ActivitiesContent:React.FC<ActivitiesContent> = ({}) => {

    const activities = useAppSelector(selectActivities);
    const isLoading = useAppSelector(selectActivitiesLoadingStatus);

    if(isLoading){
        return
    }

    return (
        <div className={cn('container', styles.content)}>
            <motion.ul
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={listVariants}
                transition={{ duration: 2 }}
                className={styles.list}
            >
                {
                        activities && activities.map( item => {
                            return (
                                <motion.li 
                                    // onMouseEnter={() => {
                                    //     const image = baseImageUrl + item!.icon
                                    //     handleMouseEnter(image);
                                    // }}
                                    // onMouseLeave={handleMouseLeave}
                                    variants={itemVariants} 
                                    key={item!.id}
                                >
                                    <Link href={`/tours?activity=${item!.id}`}>
                                        <SubbarBtn
                                            name={item!.name}
                                            icon={baseImageUrl + item!.icon}
                                        />
                                    </Link>
                                </motion.li>
                            )
                        })
                    }
            </motion.ul>
        </div>
    );    
}