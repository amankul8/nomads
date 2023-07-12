import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import {btnBorderSizeType, btnViewType, btnColorType, btnArrowType} from "@/ui";

export interface IButton extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>,HTMLButtonElement>{
    children?:ReactNode,
    btnSize: btnBorderSizeType,
    btnView: btnViewType,
    btnColor: btnColorType,
    btnArrow?: btnArrowType,
    icon?: HTMLOrSVGElement,
    classname?: string,
    enabled?: boolean
}
