import {itemTextColorTypes, itemTextSizeTypes, itemTypes} from "@/ui";
import { ReactNode } from "react";

export interface IItem{
    children: ReactNode,
    itemTextColor?: itemTextColorTypes,
    itemTextSize?: itemTextSizeTypes,
    item?: itemTypes,
    classname?: string,
    active?: boolean 
}