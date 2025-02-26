'use client'

import React, { useState, useEffect, useRef, useCallback, useMemo, Ref } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from "./navbar.module.scss";
import cn from "classnames";
import { CustomButton } from '@/ui';
import { Subbar } from "./subbar";

export type MenuItem = {
    name: string;
    link: string;
    image: string;
};

export type MenuItems = Record<string, MenuItem>

const menuItems: MenuItems = {
    destinations: {
        name: "Destinations",
        link: "/destinations",
        image: 'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg',
    },
    activities_tours: {
        name: "Activities & Tours",
        link: "/tours",
        image: "https://www.wallpaperflare.com/static/90/294/365/mountains-lake-mountain-river-wallpaper.jpg",
    },
    // trip_planner: {
    //     name: "Trip Planner",
    //     link: "/trip_planner",
    //     image:
    //     "https://www.wallpaperflare.com/static/90/294/365/mountains-lake-mountain-river-wallpaper.jpg",
    // },
    // accommodations: {
    //     name: "Accommodations",
    //     link: "/accommodations",
    //     image:
    //     "https://www.wallpaperflare.com/static/90/294/365/mountains-lake-mountain-river-wallpaper.jpg",
    // },
    // our_map: {
    //     name: "Our Map",
    //     link: "/our_map",
    //     image:
    //     "https://www.wallpaperflare.com/static/90/294/365/mountains-lake-mountain-river-wallpaper.jpg",
    // },
    // check_flights: {
    //     name: "Check Flights",
    //     link: "/check_flights",
    //     image:
    //     "https://www.wallpaperflare.com/static/90/294/365/mountains-lake-mountain-river-wallpaper.jpg",
    // },
    about_us: {
        name: "About Us",
        link: "/about-us/who-we-are",
        image: 'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg',
    },
    useful_info: {
        name: "Useful Info",
        link: "/useful-info",
        image: "https://www.wallpaperflare.com/static/90/294/365/mountains-lake-mountain-river-wallpaper.jpg",
    },
};

type Navbar = {};
export const Navbar: React.FC = () => {
    const pathname = usePathname();
    
    // Состояния
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [currentPageId, setCurrentPageId] = useState<string>('');
    const [hoveredPageId, setHoveredPageId] = useState<string>('');

    // Проверка текущего пути и установка текущей страницы
    useEffect(() => {
        const foundKey = Object.entries(menuItems).find(([key, item]) => item.link === pathname)?.[0];
        if (foundKey) setCurrentPageId(foundKey);
    }, [pathname]);

    // Обработчик наведения на элемент
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

    // Оптимизированный обработчик изменения размера окна
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1030);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Оптимизация классов для <li>
    const getListItemClass = useCallback(
        (key: string) => cn(styles.item, { [styles.active_item]: key === currentPageId || key === hoveredPageId }),
        [currentPageId, hoveredPageId]
    );

    return (
        <nav 
            className={styles.nav}
            onMouseLeave={handleMouseLeave}
        >
            <ul className={styles.list}>
                {Object.keys(menuItems).map((key) => (
                    <li
                        key={key}
                        className={getListItemClass(key)}
                        onMouseEnter={(e) => handleMouseEnter(e, key)}
                        // onMouseLeave={handleMouseLeave}
                    >
                        <Link href={menuItems[key].link} about={key} className={styles.link}>
                            <div className={cn("btn", styles.btn)}>{menuItems[key].name}</div>
                        </Link>
                    </li>
                ))}
            </ul>

            <Subbar 
                pageId={hoveredPageId}
                image={menuItems[hoveredPageId]?.image}
            />
        </nav>
    );
};