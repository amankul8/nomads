'use client';

import styles from "./header.module.scss";
import { useEffect, useState } from "react";
import cn from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from "react";

import { usePathname } from 'next/navigation';
import Link from "next/link";
import Logo from "@/components/icons/general/logo.svg";

import {
    Email,
    Phone,
    Facebook,
    Twitter,
    Google,
    Instagram,
    WhatsApp
} from '@mui/icons-material';
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Languages, Navbar } from "@/modules";


export const Header = ({...props}) => {

    return(
        <header className={styles.header} {...props}>

            <div className={cn('container', styles.container)}>
                    <div className={styles.up_side}>
                        <menu className={styles.menu}>
                            <Link href={''} className={styles.item}> <Phone className={styles.icon} />  +996 701 88 00 16 </Link>
                            <Link href={''} className={styles.item}> <Email className={styles.icon}/> nomadstravelCA@gmail.com </Link>
                        </menu>
                        <menu className={styles.menu}>
                            <Link href={''} className={styles.item}> <Facebook className={styles.icon}/> </Link>
                            <Link href={''} className={styles.item}> <Google className={styles.icon}/> </Link>
                            <Link href={''} className={styles.item}> <Instagram className={styles.icon}/> </Link>
                            <Link href={''} className={styles.item}> <WhatsApp className={styles.icon}/> </Link>
                            <Link href={''} className={styles.item}> <Twitter className={styles.icon}/> </Link>

                            <Avatar
                                sx={{width: 40, height: 40, marginLeft: 3, bgcolor: deepOrange[500] }}
                                alt="Remy Sharp"
                                src="/broken-image.jpg"
                            />
                        </menu>
                    </div>
                    <div className={styles.low_side}>
                        <Link href={'/'} about="main">
                            <figure className={styles.logo}>
                                <Logo/>
                            </figure>
                        </Link>

                        <Navbar/>

                        <Languages/>
                    </div>
            </div>            
        </header>
    )
}