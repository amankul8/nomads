import {textColor, textSize, textFamily} from "@/ui";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ISpan extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>{
    children: ReactNode,
    size: textSize,
    color: textColor,
    fontFamily: textFamily,
    classname?: string
}