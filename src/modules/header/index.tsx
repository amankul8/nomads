'use client';

import styles from "./header.module.scss";
import { useCallback, useEffect, useState } from "react";
import cn from 'classnames';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
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
import { Avatar, IconButton } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Languages, Navbar } from "@/modules";
import { lockScroll, unlockScroll } from "@/helpers";


export const Header = ({...props}) => {

    const [mobMenuOpen, setMobMenuOpen] = useState<boolean>(false);

    const handleMobMenuOpen = useCallback(() => {
        setMobMenuOpen(prevState => {
          const newState = !prevState;
          if (newState) {
            lockScroll();
          } else {
            unlockScroll();
          }
          return newState;
        });
      }, []);

    useEffect(() => {
        
    }, []);

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

                        <Languages classname={styles.lang}/>

                        <Avatar
                            sx={{width: 40, height: 40, marginLeft: 2, bgcolor: deepOrange[500] }}
                            alt="Remy Sharp"
                            src=""
                        />
                    </menu>
                </div>
                <div className={styles.low_side}>
                    <Link href={'/'} about="main">
                        <figure className={styles.logo}>
                            <Logo/>
                        </figure>
                    </Link>

                    <Navbar mob_nav_open={mobMenuOpen}/>
                    <Languages classname={styles.lang}/>
                            
                    <IconButton 
                        className={styles.burger} 
                        edge="start" 
                        aria-label="menu" 
                        sx={{color: 'var(--white)'}}
                        onClick={handleMobMenuOpen}
                    >
                        {
                            mobMenuOpen
                            ?   <CloseIcon sx={{width: 40, height: 40}}/>
                            :   <MenuIcon sx={{width: 40, height: 40}}/>
                        }
                    </IconButton>
                </div>
            </div>            
        </header>
    )
}