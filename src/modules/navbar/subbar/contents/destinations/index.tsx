import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import { SubbarBtn } from "@/ui";
import { useAppSelector } from "@/store/store";
import { selectDestinations, selectDestinationsFailedStatus, selectDestinationsIds, selectDestinationsLoadingStatus, selectDestinationsSuccessedStatus } from "@/store/slices/destinations.slice";
import { BASE_IMAGE_ULR } from "@/config";

type DestinationsSubbar = {
    handleMouseEnter: (bg: string) => void, 
    handleMouseLeave: () => void
}

export const DestinationsContent:React.FC<DestinationsSubbar> = ({handleMouseEnter, handleMouseLeave}) => {

    const listVariants = {
        visible: {
            opacity: 1,
            transition: {
            staggerChildren: 0.1, // задержка между элементами
            },
        },
        hidden: { opacity: 0 },
    };
    
    const itemVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, },
    };

    const destinations = useAppSelector(selectDestinations);

    const isLoading = useAppSelector(selectDestinationsLoadingStatus);
    const isSuccessed = useAppSelector(selectDestinationsSuccessedStatus);

    if(isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if(isSuccessed) {

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
                        destinations && destinations.map( item => {
                            return (
                                <motion.li 
                                    onMouseEnter={() => {
                                        const image = BASE_IMAGE_ULR + item!.main_image
                                        handleMouseEnter(image);
                                    }}
                                    // onMouseLeave={handleMouseLeave}
                                    variants={itemVariants} 
                                    key={item!.id}
                                >
                                    <Link href={`/destinations/${item!.id}`}>
                                        <SubbarBtn
                                            name={item!.title}
                                        />
                                    </Link>
                                </motion.li>
                            )
                        })
                    }
                </motion.ul>
            </div>
        )
    }
}