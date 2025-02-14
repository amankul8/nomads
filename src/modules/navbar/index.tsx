import React from 'react';
import styles from "./navbar.module.scss";
import Link from 'next/link';

type NavbarType = {

};

export const Navbar:React.FC<NavbarType> = () => {

    return (
        <nav className={styles.nav}>
            <Link href={'/'} about='main'> Main </Link>
            <ul className={styles.list}>
                <li className={styles.nav_item}>
                    <Link href={'/'} about='main'>  </Link>
                </li>
            </ul>
        </nav>
    );
} 