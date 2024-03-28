import { ReactNode } from "react";
import { headlineColorTypes, headlineFontFamilyTypes, headlineTagTypes} from "@/ui";

export interface IHeadline{
    color: headlineColorTypes,
    fontFamily: headlineFontFamilyTypes,
    tag: headlineTagTypes,
    children: ReactNode,
    classname?: string
}

