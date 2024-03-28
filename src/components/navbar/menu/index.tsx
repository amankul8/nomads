import styles from "./Menu.module.css";
import Logo from "public/icons/logo.svg";
import { useContext, useEffect, useState } from "react";
import { TokenContext } from "@/context";
import Phone from "public/icons/socialMediaIcons/phone.svg";
import Email from "public/icons/socialMediaIcons/email.svg";
import Facebook from "public/icons/socialMediaIcons/facebook.svg";
import Instagram from "public/icons/socialMediaIcons/instagram.svg";
import Twitter from "public/icons/socialMediaIcons/twitter.svg";
import { 
    btnBorderSizeType, 
    btnColorType, 
    btnViewType, 
    Button, 
    Item, 
    itemTextColorTypes, 
    itemTextSizeTypes, 
    itemTypes, 
    SandwichIcon
} from "@/ui";
import { useScrollLock } from "@/hooks";
import EnglandFlag from "public/icons/countryFlags/england.svg";
import FranceFlag from "public/icons/countryFlags/france.svg";
import GermanyFlag from "public/icons/countryFlags/germany.svg";
import TurkeyFlag from "public/icons/countryFlags/turkey.svg";
import OrnamentIcon from 'public/icons/listMarkers/ornament.svg';
import cn from "classnames";
import { IMenu } from "./menuInterface";

export const Menu = ({menuItems, setMenuItems, isMobile, mouseOverHandler}:IMenu):JSX.Element=>{

    const [languages, setLanguages] = useState<{lang: string, icon: JSX.Element, code: string}[]>([
        {lang: 'English', icon: <EnglandFlag/>, code: 'eng'},
        {lang: 'Français', icon: <FranceFlag/>, code: 'fre'},
        {lang: 'Deutsche', icon: <GermanyFlag/>, code: 'ger'},
        {lang: 'Türkçe', icon: <TurkeyFlag/>, code: 'tur'}
    ]);
    const [currentLanguageCode, setCurrentLanguageCode] = useState<string>('eng');
    const [isLangsOpen, setIsLangsOpen] = useState<boolean>(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const {lockScroll, unlockScroll} = useScrollLock();

    const {tokens} = useContext(TokenContext);

    useEffect(()=>{
        if(menuIsOpen){
            lockScroll();
        }else{
            unlockScroll();
        }
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

                    <Item 
                        item={itemTypes.itemWithIcon}
                        itemTextColor={itemTextColorTypes.white}
                        itemTextSize={itemTextSizeTypes.s}
                        classname={styles.up_item}
                    >
                        <Phone/>
                        <span>+41 21 634 05 05</span>
                    </Item>
                    
                    <Item 
                        item={itemTypes.itemWithIcon}
                        itemTextColor={itemTextColorTypes.white}
                        itemTextSize={itemTextSizeTypes.s}
                        classname={styles.up_item}
                    >
                        <Email/>
                        <span>+41 21 634 05 05</span>
                    </Item>
                    
                    <Item 
                        item={itemTypes.itemWithIcon}
                        itemTextColor={itemTextColorTypes.white}
                        itemTextSize={itemTextSizeTypes.s}
                        classname={styles.up_item}
                    >
                        <Twitter/>
                    </Item>

                    <Item 
                        item={itemTypes.itemWithIcon}
                        itemTextColor={itemTextColorTypes.white}
                        itemTextSize={itemTextSizeTypes.s}
                        classname={styles.up_item}
                    >
                        <Instagram/>
                    </Item>

                    <Item 
                        item={itemTypes.itemWithIcon}
                        itemTextColor={itemTextColorTypes.white}
                        itemTextSize={itemTextSizeTypes.s}
                        classname={styles.up_item}
                    >
                        <Facebook/>
                    </Item>
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
                                    <Item
                                        item={itemTypes.item}
                                        itemTextColor={itemTextColorTypes.white}
                                        itemTextSize={itemTextSizeTypes.m}
                                        classname={styles.item}
                                        active={item.active}
                                        onMouseOver={(e)=>mouseOverHandler(e, item.id, true)}
                                        onMouseOut={(e)=>mouseOverHandler(e, item.id, false)}
                                    >
                                            {item.name}
                                    </Item>
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
                                                    <Item
                                                        item={itemTypes.item}
                                                        itemTextColor={itemTextColorTypes.white}
                                                        itemTextSize={itemTextSizeTypes.m}
                                                        classname={styles.item}
                                                    >
                                                            {item.name}
                                                    </Item>
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
                                                                <Item
                                                                    item={itemTypes.item}
                                                                    itemTextColor={itemTextColorTypes.white}
                                                                    itemTextSize={itemTextSizeTypes.m}
                                                                    classname={styles.item}
                                                                >
                                                                        {subItem.name}
                                                                </Item>
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
                        <Button 
                            btnColor={btnColorType.blue}
                            btnSize={btnBorderSizeType.l}
                            btnView={btnViewType.button}
                            onClick={()=>{setIsLangsOpen(!isLangsOpen);}}
                        >
                            {
                                getCurrentLanguage(currentLanguageCode)
                            }
                        </Button>
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
                                        <Item
                                            item={itemTypes.itemWithIcon}
                                            itemTextSize={itemTextSizeTypes.s}
                                            itemTextColor={itemTextColorTypes.blue}
                                            classname={styles.lang_item}
                                            key={item.lang}
                                            onClick={()=>{
                                                setCurrentLanguageCode(item.code);
                                                setIsLangsOpen(false);
                                            }}
                                        >
                                            {item.icon}
                                            <span>{item.lang}</span>
                                        </Item>
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