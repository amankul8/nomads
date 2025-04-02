import React, { useState, useCallback } from "react";
import styles from './styles.module.scss';
import cn from 'classnames';

import { motion } from "framer-motion";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Ornament from '@/components/icons/general/ornament.svg';
import { useRouter } from "next/navigation";
import { unlockScroll } from "@/helpers";
import { useAppSelector } from "@/store/store";
import { selectDestinations } from "@/store/slices/destinations.slice";
import { selectTourTypes } from "@/store/slices/tourTypes.slice";

type MobListItem = {
    id: string,
    name: string,
    baseLink: string,
    handleManuClose: () => void
};

const lists = ['destinations', 'activities_tours', 'about_us'];

export const MobListItem: React.FC<MobListItem> = ({ id, name, baseLink, handleManuClose }) => {
    const [droped, setDroped] = useState<boolean>(false);
    const router = useRouter();

    const destinations = useAppSelector(selectDestinations);
    const tourTypes = useAppSelector(selectTourTypes);

    const handleLink = (link: string) => {
        unlockScroll();
        router.push(link);
        handleManuClose();
    };

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
                            {
                                id === 'destinations'
                                ?   destinations.map((item, index) => (
                                        <motion.li className={styles.item} key={item?.title}>
                                            <div className={styles.btn} onClick={() => handleLink(`/destinations/${item?.id}`)}>
                                                <Ornament className={styles.link_icon} />
                                                <div className="btn">{item?.title}</div>
                                            </div>
                                        </motion.li>
                                    ))
                                : id === 'activities_tours' 
                                ?   tourTypes.map((item, index) => (
                                        <motion.li className={styles.item} key={item?.type}>
                                            <div className={styles.btn} onClick={() => handleLink('/tours')}>
                                                <Ornament className={styles.link_icon} />
                                                <div className="btn">{item?.type}</div>
                                            </div>
                                        </motion.li>
                                    ))
                                : id === 'about_us'
                                ?   <>
                                        <motion.li className={styles.item}>
                                            <div className={styles.btn} onClick={() => handleLink('/about-us/who-we-are')}>
                                                <Ornament className={styles.link_icon} />
                                                <div className="btn"> Who we are </div>
                                            </div>
                                        </motion.li>
                                        <motion.li className={styles.item}>
                                            <div className={styles.btn} onClick={() => handleLink('/about-us/our-team')}>
                                                <Ornament className={styles.link_icon} />
                                                <div className="btn"> Our team </div>
                                            </div>
                                        </motion.li>
                                    </>
                                :   null
                            }
                        </motion.ul>
                    )}
                </>
            ) : (
                <div className={styles.btn} onClick={() => handleLink(baseLink)}>
                    <Ornament className={styles.link_icon} />
                    <div className="btn">{name}</div>
                </div>
            )}
        </motion.li>
    );
};

