import styles from "./Header.module.css";
import {Menu} from '@/components/navbar';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IMenuItems } from "@/components/navbar";
import cn from 'classnames';
import {SubHeaderContent} from "@/components/content";
import { IHeader } from "./header.interface";
import {motion} from "framer-motion";


export const Header = ({...props}:IHeader):JSX.Element=>{
    
    const [menuItems, setMenuItems] = useState<IMenuItems[]>([
        {
            id: 1,
            active: false, //for mobile 
            isMouseOver: false, //for desktop
            name: 'Destinations',
            url: 'asd 1',
            image: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?cs=srgb&dl=pexels-pixabay-147411.jpg&fm=jpg',
            submenu: [
                {id: 1, name: 'Kel-Suu', url: 'dsfs', image: 'https://ic.pics.livejournal.com/azzzik/8959473/359864/359864_800.jpg'},
                {id: 2, name: 'Kel-Suu', url: 'dsfs', image: 'https://wallpaperaccess.com/full/138728.jpg'},
                {id: 3, name: 'Kel-Suu', url: 'dsfs', image: 'https://ic.pics.livejournal.com/azzzik/8959473/359864/359864_800.jpg'},
                {id: 4, name: 'Kel-Suu', url: 'dsfs', image: 'https://wallpaperaccess.com/full/138728.jpg'},
                {id: 5, name: 'Kel-Suu', url: 'dsfs', image: 'https://ic.pics.livejournal.com/azzzik/8959473/359864/359864_800.jpg'},
                {id: 6, name: 'Kel-Suu', url: 'dsfs', image: 'https://wallpaperaccess.com/full/138728.jpg'},
                {id: 7, name: 'Kel-Suu', url: 'dsfs', image: 'https://ic.pics.livejournal.com/azzzik/8959473/359864/359864_800.jpg'},
                {id: 8, name: 'Kel-Suu', url: 'dsfs', image: 'https://wallpaperaccess.com/full/138728.jpg'},
                {id: 9, name: 'Kel-Suu', url: 'dsfs', image: 'https://ic.pics.livejournal.com/azzzik/8959473/359864/359864_800.jpg'},
                {id: 10, name: 'Kel-Suu', url: 'dsfs', image: 'https://wallpaperaccess.com/full/138728.jpg'},
                {id: 11, name: 'Kel-Suu', url: 'dsfs', image: 'https://ic.pics.livejournal.com/azzzik/8959473/359864/359864_800.jpg'},
                {id: 12, name: 'Kel-Suu', url: 'dsfs', image: 'https://ic.pics.livejournal.com/azzzik/8959473/359864/359864_800.jpg'},
                {id: 13, name: 'Kel-Suu', url: 'dsfs', image: 'https://ic.pics.livejournal.com/azzzik/8959473/359864/359864_800.jpg'},
                {id: 14, name: 'Kel-Suu', url: 'dsfs', image: 'https://ic.pics.livejournal.com/azzzik/8959473/359864/359864_800.jpg'},
                {id: 15, name: 'Kel-Suu', url: 'dsfs', image: 'https://ic.pics.livejournal.com/azzzik/8959473/359864/359864_800.jpg'},
                {id: 16, name: 'Kel-Suu', url: 'dsfs', image: 'https://ic.pics.livejournal.com/azzzik/8959473/359864/359864_800.jpg'},
            ]
        },
        {
            id: 2,
            active: false, // for mobile 
            isMouseOver: false, // for desktop 
            name: 'Activities & Tours',
            url: 'asd 2',
            image: 'https://www.wallpaperflare.com/static/90/294/365/mountains-lake-mountain-river-wallpaper.jpg',
            submenu: [
                {id: 1, name: 'Lorem Ipsum', url: 'dsfs', image: ''},
                {id: 2, name: 'Lorem Ipsum', url: 'dsfs', image: ''},
                {id: 3, name: 'Lorem Ipsum', url: 'dsfs', image: ''},
                {id: 4, name: 'Lorem Ipsum', url: 'dsfs', image: ''},
                {id: 5, name: 'Lorem Ipsum', url: 'dsfs', image: ''},
                {id: 6, name: 'Lorem Ipsum', url: 'dsfs', image: ''},
                {id: 7, name: 'Lorem Ipsum', url: 'dsfs', image: ''},
                {id: 8, name: 'Lorem Ipsum', url: 'dsfs', image: ''},
                {id: 9, name: 'Lorem Ipsum', url: 'dsfs', image: ''},
                {id: 10, name: 'Lorem Ipsum', url: 'dsfs', image: ''},
                {id: 11, name: 'Lorem Ipsum', url: 'dsfs', image: ''},
                {id: 12, name: 'Lorem Ipsum', url: 'dsfs', image: ''},
                {id: 13, name: 'Lorem Ipsum', url: 'dsfs', image: ''},
                {id: 14, name: 'Lorem Ipsum', url: 'dsfs', image: ''},
                {id: 15, name: 'Lorem Ipsum', url: 'dsfs', image: ''},
                {id: 16, name: 'Lorem Ipsum', url: 'dsfs', image: ''},
            ]
        },
        {
            id: 3,
            active: false,
            isMouseOver: false,
            name: 'Trip planner',
            url: 'asd 3',
            image: 'https://a-static.besthdwallpaper.com/green-lake-mountain-wallpaper-3554x1999-105353_53.jpg',
            submenu: null
        },
        {
            id: 4,
            active: false,
            isMouseOver: false,
            name: 'Accommodations',
            url: 'asd 4',
            image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg',
            submenu: [
                {id: 1, name: 'Accommodations', url: 'dsfs', image: ''},
                {id: 2, name: 'Accommodations', url: 'dsfs', image: ''},
                {id: 3, name: 'Accommodations', url: 'dsfs', image: ''},
                {id: 4, name: 'Accommodations', url: 'dsfs', image: ''},
                {id: 5, name: 'Accommodations', url: 'dsfs', image: ''},
                {id: 6, name: 'Accommodations', url: 'dsfs', image: ''},
                {id: 7, name: 'Accommodations', url: 'dsfs', image: ''},
                {id: 8, name: 'Accommodations', url: 'dsfs', image: ''},
                {id: 9, name: 'Accommodations', url: 'dsfs', image: ''},
                {id: 10, name: 'Accommodations', url: 'dsfs', image: ''},
                {id: 11, name: 'Accommodations', url: 'dsfs', image: ''},
                {id: 12, name: 'Accommodations', url: 'dsfs', image: ''},
                {id: 13, name: 'Accommodations', url: 'dsfs', image: ''},
                {id: 14, name: 'Accommodations', url: 'dsfs', image: ''},
                {id: 15, name: 'Accommodations', url: 'dsfs', image: ''},
                {id: 16, name: 'Accommodations', url: 'dsfs', image: ''},
            ]
        },
        {
            id: 5,
            active: false,
            isMouseOver: false,
            name: 'Our map',
            url: 'asd 5',
            image: 'https://free4kwallpapers.com/uploads/originals/2020/05/09/mountain-lake-wallpaper.png',
            submenu: null
        },
        {
            id: 6,
            active: false,
            isMouseOver: false,
            name: 'Check flights',
            url: 'asd 6',
            image: 'https://wallpapercave.com/wp/wp7882026.jpg',
            submenu: null
        },
        {
            id: 7,
            active: false,
            isMouseOver: false,
            name: 'Useful Info',
            url: 'asd 7',
            image: 'https://wallpaperaccess.com/full/1993211.jpg',
            submenu: [
                {id: 1, name: 'Useful info', url: 'dsfs', image: ''},
                {id: 2, name: 'Useful info', url: 'dsfs', image: ''},
                {id: 3, name: 'Useful info', url: 'dsfs', image: ''},
                {id: 4, name: 'Useful info', url: 'dsfs', image: ''},
                {id: 5, name: 'Useful info', url: 'dsfs', image: ''},
                {id: 6, name: 'Useful info', url: 'dsfs', image: ''},
                {id: 7, name: 'Useful info', url: 'dsfs', image: ''},
                {id: 8, name: 'Useful info', url: 'dsfs', image: ''},
                {id: 9, name: 'Useful info', url: 'dsfs', image: ''},
                {id: 10, name: 'Useful info', url: 'dsfs', image: ''},
                {id: 11, name: 'Useful info', url: 'dsfs', image: ''},
                {id: 12, name: 'Useful info', url: 'dsfs', image: ''},
                {id: 13, name: 'Useful info', url: 'dsfs', image: ''},
                {id: 14, name: 'Useful info', url: 'dsfs', image: ''},
                {id: 15, name: 'Useful info', url: 'dsfs', image: ''},
                {id: 16, name: 'Useful info', url: 'dsfs', image: ''},
            ]
        },
    ]);
    const [isMobile, setIsMobile] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);

    const variants = {
        visable: {
            display: 'block',
            opacity: 1,
        },
        hidden: {
            opacity: 0,
            transitionEnd: {
                display: "none",
            }
        }
    }

    useEffect(() => {
        if (headerRef.current) {
            const width = headerRef.current.getBoundingClientRect().width;
            if(width < 1030){
                setIsMobile(true);
            }
        }
      }, []);

        const mouseOverHandler = (e:React.MouseEvent, id:number, status:boolean):void=>{
        e.stopPropagation();
        setMenuItems(prev=>{
            return prev.map(item=>{
                if(item.id == id){
                    if(status && item.isMouseOver){
                        return{
                            ...item
                        }
                    }else{
                        return{
                            ...item,
                            isMouseOver: item.isMouseOver=status
                        }
                    }
                }else{
                    return item;
                }
            })
        });
    } 

    return(
        <header className={styles.header} {...props} ref={headerRef}>
            <Menu menuItems={menuItems} setMenuItems={setMenuItems} isMobile={isMobile} mouseOverHandler={mouseOverHandler}/>
            {
                menuItems.map((item, index)=>{
                    return(
                        <motion.div
                            layout 
                            variants={variants}
                            initial={'hidden'}
                            animate={item.isMouseOver?'visable':'hidden'}
                            transition={{
                                ease: "linear",
                                duration: .4
                            }}
                            className={cn(styles.sub_header)} 
                            key={index}
                            onMouseOver={(e)=>{
                                mouseOverHandler(e, item.id, true);
                            }}
                            onMouseOut={(e)=>{
                                mouseOverHandler(e, item.id, false);
                            }}
                        >
                            <SubHeaderContent
                                data={item.submenu}
                                name={item.name}
                                bg_image = {item.image}
                                isMouseOver = {item.isMouseOver}
                            />
                        </motion.div>
                    )
                })
            }
        </header>
    )
}