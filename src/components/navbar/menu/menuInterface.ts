import { Dispatch, SetStateAction } from "react"
 
export interface ISubmenu{
    id: number,
    name: string,
    url: string,
    image: string
}

export interface IMenuItems{
    id: number,
    active: boolean,
    isMouseOver: boolean
    name: string,
    url: string,
    image: string,
    submenu: ISubmenu[]|null
}

export interface IMenu{
    menuItems: IMenuItems[],
    setMenuItems: Dispatch<SetStateAction<IMenuItems[]>>,
    isMobile: boolean,
    mouseOverHandler: (e: React.MouseEvent, id: number, status: boolean) => void;
}