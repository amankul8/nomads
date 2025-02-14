import styles from "./menu.module.css";
import Logo from "@/components/icons/general/logo.svg";
import { useEffect, useState } from "react";
import {Instagram, Facebook, Twitter, Email, Phone} from '@mui/icons-material';
import {
    CustomButton,
    NavbarItem,
    SandwichIcon
} from "@/ui";
import { lockScroll, unlockScroll } from "@/helpers";
import OrnamentIcon from '@/components/icons/general/ornament.svg';
import cn from "classnames";
import { IMenu } from "./menuInterface";

export const Menu:React.FC<IMenu> = ({menuItems, setMenuItems, isMobile, mouseOverHandler}) => {

    const [languages, setLanguages] = useState<{lang: string, code: string}[]>([
        {lang: 'English', code: 'eng'},
        // {lang: 'Français', code: 'fre'},
        // {lang: 'Deutsche', code: 'ger'},
        // {lang: 'Türkçe', code: 'tur'}
    ]);

    const [currentLanguageCode, setCurrentLanguageCode] = useState<string>('eng');
    const [isLangsOpen, setIsLangsOpen] = useState<boolean>(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    useEffect(()=>{
        if(menuIsOpen){
            lockScroll();
        }else{
            unlockScroll();
        }

        return () => {
            unlockScroll();
        };
    }, []);

    const getCurrentLanguage=(curLangCode:string):string=>{
        let lang='';
        languages.forEach(item=>{
            if(curLangCode === item.code){
                lang = item.lang
            }
        })
        return lang;
    }

    const handleLangs = () => {
        console.log('work');
        setIsLangsOpen(() => !isLangsOpen);
    }

    const menuItemClickHandler=(e:React.MouseEvent<HTMLElement, MouseEvent>, id:number, isActive:boolean)=>{
        e.stopPropagation()
        if(isMobile){
            setMenuItems(prev=>{
                return (
                    prev.map(item=>{
                        if(id === item.id){
                            item.active = isActive
                            return item;
                        }else{
                            item.active = false
                            return item;
                        }
                    })
                )
            })
        }
    }

    return(
        <div className={styles.menu_wrapper}>

            <div className={styles.up}>
                <div className={styles.block}>

                    <NavbarItem 
                        item={true}
                        color='white'
                        classname={styles.up_item}
                    >
                        <Phone/>
                        +41 21 634 05 05
                    </NavbarItem>
                    
                    <NavbarItem 
                        item={true}
                        color='white'
                        classname={styles.up_item}
                    >
                        <Email/>
                        +41 21 634 05 05
                    </NavbarItem>
                    
                    <NavbarItem 
                        item={true}
                        color='white'
                        classname={styles.up_item}
                    >
                        <Twitter/>
                    </NavbarItem>

                    <NavbarItem 
                        item={true}
                        color='white'
                        classname={styles.up_item}
                    >
                        <Instagram/>
                    </NavbarItem>

                    <NavbarItem 
                        item={true}
                        color='white'
                        classname={styles.up_item}
                    >
                        <Facebook/>
                    </NavbarItem>
                </div>
            </div>

            <div className={styles.menu}>
                <a href={"/"}>
                    <Logo/>
                </a>
                <ul className={cn(styles.menu_items, {
                    [styles.show_menu_items]:menuIsOpen
                }) }>
                    {menuItems.map((item, index)=>{
                        return(
                            <li key={index} className={
                                cn(styles.item_wrapper,
                                {
                                    [styles.menu_item_active]:item.active
                                })
                            }
                            >
                                <a href={
                                        item.submenu===null? 
                                        item.url:
                                        isMobile?
                                        '#'
                                        :item.url
                                    }
                                    onClick={(e)=>menuItemClickHandler(e, item.id, true)}  
                                >
                                    <OrnamentIcon/>
                                    <NavbarItem
                                        item={false}
                                        color='white'
                                        classname={styles.item}
                                        active={item.active}
                                        onMouseOver={(e: any)=>mouseOverHandler(e, item.id, true)}
                                        onMouseOut={(e: any)=>mouseOverHandler(e, item.id, false)}
                                    >
                                            {item.name}
                                    </NavbarItem>
                                </a>
                                    {   item.submenu!==null?
                                        <ul className={cn(
                                                styles.submenu_wrapper
                                            )}
                                        >
                                            <li className={
                                                    styles.submenu_item
                                                }
                                                key={index}
                                                onClick={(e)=>menuItemClickHandler(e, item.id, false)}
                                            >
                                                <a href={'#'}>
                                                    <OrnamentIcon/>
                                                    <NavbarItem
                                                        item={false}
                                                        color='white'
                                                        classname={styles.item}
                                                    >
                                                            {item.name}
                                                    </NavbarItem>
                                                </a>
                                            </li>
                                        {
                                            item.submenu.map((subItem, index)=>{
                                                return(
                                                    
                                                        <li className={
                                                                styles.submenu_item
                                                            }
                                                            key={index}
                                                        >
                                                            <a href={subItem.url}>
                                                                <OrnamentIcon/>
                                                                <NavbarItem
                                                                    item={false}
                                                                    color='white'
                                                                    classname={styles.item}
                                                                >
                                                                        {subItem.name}
                                                                </NavbarItem>
                                                            </a>   
                                                        </li>
                                                    
                                                )
                                            })
                                        }
                                        </ul>:
                                        ''
                                    }
                            </li>
                        )
                    })}
                </ul>
                
                <div className={styles.control_block}>
                    <div className={styles.languages_wrapper}>
                        <CustomButton
                            color="white"
                            active={true}
                            handler={handleLangs}
                        >
                            {
                                getCurrentLanguage(currentLanguageCode)
                            }
                        </CustomButton>
                        <div 
                            className={cn(
                                styles.languages,
                                {
                                    [styles.show_langs]:isLangsOpen
                                }
                            )}
                        >
                            {
                                languages.map(item=>{
                                    return(
                                        <NavbarItem
                                            item={true}
                                            color='blue'
                                            classname={styles.lang_item}
                                            key={item.lang}
                                            onClick={()=>{
                                                setCurrentLanguageCode(item.code);
                                                setIsLangsOpen(false);
                                            }}
                                            style={{backgroundImage: `url(/images/flags/${item.code}.png)`}}
                                        >
                                            {item.lang}
                                        </NavbarItem>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <SandwichIcon 
                        classname={styles.sandwich_icon} 
                        isOpen={menuIsOpen} 
                        onClick={()=>{
                            setMenuIsOpen(!menuIsOpen);
                        }}
                    />
                </div>

            </div>
        </div>
    )
}