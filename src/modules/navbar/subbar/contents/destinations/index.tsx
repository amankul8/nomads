import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import { SubbarBtn } from "@/ui";

type DestinationsSubbar = {}

export const DestinationsContent:React.FC<DestinationsSubbar> = () => {

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
                <motion.li variants={itemVariants}>
                    <Link href={''}>
                        <SubbarBtn
                            name="Destination name"
                        />
                    </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <Link href={''}>
                        <SubbarBtn
                            name="Destination name"
                        />
                    </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <Link href={''}>
                        <SubbarBtn
                            name="Destination name"
                        />
                    </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <Link href={''}>
                        <SubbarBtn
                            name="Destination name"
                        />
                    </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <Link href={''}>
                        <SubbarBtn
                            name="Destination name"
                        />
                    </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <Link href={''}>
                        <SubbarBtn
                            name="Destination name"
                        />
                    </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <Link href={''}>
                        <SubbarBtn
                            name="Destination name"
                        />
                    </Link>
                </motion.li>
            </motion.ul>
        </div>    
    )
}