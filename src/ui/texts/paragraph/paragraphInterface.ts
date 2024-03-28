import {textColor, textSize, textFamily} from "@/ui";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IParagraph extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    children: ReactNode,
    size: textSize,
    color: textColor,
    fontFamily: textFamily,
    classname?: string
}