import { DetailedHTMLProps, HTMLAttributes } from "react";
import {ISubmenu} from "@/components/navbar"

export interface ISubheader extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    name: string,
    data: ISubmenu[]|null,
    bg_image: string,
    classname?: string,
    isMouseOver:boolean
}