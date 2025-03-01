import React, { useState, useCallback } from "react";
import styles from './styles.module.scss';
import cn from 'classnames';

import { motion } from "framer-motion";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Ornament from '@/components/icons/general/ornament.svg';
import { useRouter } from "next/navigation";
import { unlockScroll } from "@/helpers";

type MobListItem = {
    id: string,
    name: string,
};

const lists = ['destinations', 'activities_tours', 'about_us'];

const routeMapping: Record<string, string> = {
    'destinations': '/destinations/destination/',
    'activities_tours': '/tours/trour/',
    'about_us': '/about_us/',
    'useful_info': '/useful-info'
};

export const MobListItem: React.FC<MobListItem> = ({ id, name }) => {
    const [droped, setDroped] = useState<boolean>(false);
    const router = useRouter();

    const handleLink = (subLink?: string) => {
        unlockScroll();
        const route = routeMapping[id];
        if (route) {
            router.push(subLink ? `${route}${subLink}` : route);
        }
    };

    const list = {
        'destinations': ['Destination 1', 'Destination 2', 'Destination 3'],
        'activities_tours': ['Tour 1', 'Tour 2', 'Tour 3'],
        'about_us': ['About Us 1', 'About Us 2', 'About Us 3']
    }[id] || [];

    return (
        <motion.li className={styles.item} transition={{ duration: .2 }} key={id}>
            {lists.includes(id) ? (
                <>
                    <div className={styles.btn} onClick={() => setDroped(prev => !prev)}>
                        <ArrowDropDownIcon className={cn(styles.icon, { [styles.rotated]: droped })} />
                        <div className="btn">{name}</div>
                    </div>
                    {droped && (
                        <motion.ul
                            className={styles.sub_list}
                            initial={{ opacity: 0, display: 'none' }}
                            animate={{ opacity: 1, display: 'block' }}
                            exit={{ opacity: 0, display: 'none' }}
                            transition={{ duration: .2 }}
                        >
                            {list.map((item, index) => (
                                <motion.li className={styles.item} key={index}>
                                    <div className={styles.btn} onClick={() => handleLink('2')}>
                                        <Ornament className={styles.link_icon} />
                                        <div className="btn">{item}</div>
                                    </div>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </>
            ) : (
                <div className={styles.btn} onClick={() => handleLink()}>
                    <Ornament className={styles.link_icon} />
                    <div className="btn">{name}</div>
                </div>
            )}
        </motion.li>
    );
};

