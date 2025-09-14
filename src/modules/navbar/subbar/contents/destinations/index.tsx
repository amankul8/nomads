import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import { SubbarBtn } from "@/ui";
import { useAppSelector } from "@/store/hooks";
import { selectDestinations, selectDestinationsFailedStatus, selectDestinationsIds, selectDestinationsLoadingStatus, selectDestinationsSuccessedStatus } from "@/store/slices/destinations.slice";
import { BASE_IMAGE_ULR } from "@/config";
import Loading from "@/components/loading";

type DestinationsSubbar = {
    handleMouseEnter: (bg: string) => void, 
    handleMouseLeave: () => void
}

export const DestinationsContent:React.FC<DestinationsSubbar> = ({handleMouseEnter, handleMouseLeave}) => {

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

    let destinations = useAppSelector(selectDestinations);
    destinations = destinations.slice(0, 12);


    const isLoading = useAppSelector(selectDestinationsLoadingStatus);
    const isSuccessed = useAppSelector(selectDestinationsSuccessedStatus);

    if(isLoading) {
        return <Loading/>
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
                                        const image = BASE_IMAGE_ULR + item.images[0].url;
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