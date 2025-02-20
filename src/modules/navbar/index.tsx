import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from "./navbar.module.scss";
import cn from "classnames";
import { CustomButton } from '@/ui';

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
        image:
        "https://www.wallpaperflare.com/static/90/294/365/mountains-lake-mountain-river-wallpaper.jpg",
    },
    activities_tours: {
        name: "Activities & Tours",
        link: "/tours",
        image:
        "https://www.wallpaperflare.com/static/90/294/365/mountains-lake-mountain-river-wallpaper.jpg",
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
        link: "about_us/who_we_are",
        image:
        "https://www.wallpaperflare.com/static/90/294/365/mountains-lake-mountain-river-wallpaper.jpg",
    },
    useful_info: {
        name: "Useful Info",
        link: "/useful_info",
        image:
        "https://www.wallpaperflare.com/static/90/294/365/mountains-lake-mountain-river-wallpaper.jpg",
    },
};

type Navbar = {};

export const Navbar: React.FC<Navbar> = () => {

    const pathname = usePathname();

    const [isMobile, setIsMobile] = useState(false);
    const [currentPageId, setCurrentPageId] = useState<string>('');
    const [hoveredPageId, setHoveredPageId] = useState<string>('');

    const handleRouteCheck = (url: string) => {
        const foundKey = Object.entries(menuItems).find(([key, item]) => item.link === url)?.[0];
        if (foundKey) {
            setCurrentPageId(foundKey);
        } 
    };

    const handleMouseOver = (id: string) => {
        if (id !== hoveredPageId) {
            setHoveredPageId(id);
        }
    }

    const handleMouseOut = () => {
        setHoveredPageId('');
    };

    useEffect(() => {

        handleRouteCheck(pathname);

        const handleResize = () => {
            if(window.innerWidth < 1030){
                setIsMobile(true);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {
                    Object.keys(menuItems).map(key => {
                        return (
                            <li className={ cn(styles.item, {
                                    [styles.active_item]:  (key === currentPageId) || (key === hoveredPageId)
                                })}
                                onMouseEnter={() => handleMouseOver(key)}
                                onMouseLeave={handleMouseOut}
                                key={key}
                            >
                                <Link href={menuItems[key].link} about={key} className={styles.link}> 
                                    <div className={cn('btn', styles.btn)}>
                                        {menuItems[key].name}
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
} 