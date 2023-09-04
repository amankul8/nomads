import {itemTextColorTypes, itemTextSizeTypes, itemTypes} from "@/ui";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IItem extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    children: ReactNode,
    itemTextColor?: itemTextColorTypes,
    itemTextSize?: itemTextSizeTypes,
    item?: itemTypes,
    classname?: string,
    active?: boolean 
}