'use client'

import React, { useState, useEffect, useRef, useCallback, useMemo, Ref } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from "./navbar.module.scss";
import cn from "classnames";
import { Subbar } from "./subbar";
import { MobListItem } from "./mobListItem";
import { fetchDestinations } from "@/store/models/destinations";
import { useAppDispath } from "@/store/store";
import { fetchActivities } from "@/store/models/activities";
import { fetchRegions } from "@/store/models/regions";

export type MenuItem = {
    name: string;
    link: string;
};

export type MenuItems = Record<string, MenuItem>

const menuItems: MenuItems = {
    destinations: {
        name: "Destinations",
        link: "/destinations",
    },
    activities_tours: {
        name: "Activities & Tours",
        link: "/tours",
    },
    // trip_planner: {
    //     name: "Trip Planner",
    //     link: "/trip_planner",
    // },
    // accommodations: {
    //     name: "Accommodations",
    //     link: "/accommodations",
    // },
    // our_map: {
    //     name: "Our Map",
    //     link: "/our_map",
    // },
    // check_flights: {
    //     name: "Check Flights",
    //     link: "/check_flights",
    // },
    about_us: {
        name: "About Us",
        link: "/about-us",
    },
    useful_info: {
        name: "Useful Info",
        link: "/useful-info",
    },
};

type Navbar = {
    mob_nav_open?: boolean
};

export const Navbar: React.FC<Navbar> = ({mob_nav_open}) => {
    const pathname = usePathname();
    const dispatch = useAppDispath();
    
    const [currentPageId, setCurrentPageId] = useState<string>('');
    const [hoveredPageId, setHoveredPageId] = useState<string>('');

    useEffect(() => {
        const foundKey = Object.entries(menuItems).find(([key, item]) => item.link === pathname)?.[0];
        if (foundKey) setCurrentPageId(foundKey);

        dispatch(fetchDestinations());
        dispatch(fetchActivities());
        dispatch(fetchRegions());

    }, [pathname]);

    const handleMouseEnter = useCallback(
        (event:  React.MouseEvent<HTMLLIElement>, id: string) => {
            if (id !== hoveredPageId) {
                setHoveredPageId(id);
            }
        },
        [hoveredPageId]
    );

    const handleMouseLeave = useCallback(
        () => {
            setHoveredPageId('');
        },
        [hoveredPageId]
    );

    const getListItemClass = useCallback(
        (key: string) => cn(styles.item, { [styles.active_item]: key === currentPageId || key === hoveredPageId }),
        [currentPageId, hoveredPageId]
    );

    return (
        <>
            <nav 
                className={cn(styles.nav)}
                onMouseLeave={handleMouseLeave}
            >
                <ul className={styles.list}>
                    {Object.keys(menuItems).map((key) => (
                        <li
                            key={key}
                            className={getListItemClass(key)}
                            onMouseEnter={(e) => handleMouseEnter(e, key)}
                        >
                            <Link href={menuItems[key].link} about={key} className={styles.link}>
                                <div className={cn("btn", styles.btn)}>{menuItems[key].name}</div>
                            </Link>
                        </li>
                    ))}
                </ul>

                <Subbar 
                    pageId={hoveredPageId}
                    classname={styles.subbar}
                />
            </nav>

            <nav className={cn(styles.mobile_nav, {
                [styles.mobile_nav_open]: mob_nav_open
            })}>
                <ul className={styles.list}>
                    {Object.keys(menuItems).map((key) => (
                        <MobListItem
                            id={key}
                            name={menuItems[key].name}
                            key={key}
                        />
                    ))}
                    
                </ul>
                
            </nav>
        </>
    );
};