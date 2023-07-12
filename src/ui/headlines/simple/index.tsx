import React from "react";
import { IHeadline } from "@/ui";
import { headlineColorTypes, headlineFontFamilyTypes, headlineTagTypes} from "@/ui";
import generalStyle from "../headlinesStyle.module.css";
import styles from "./simple.module.css";
import cn from 'classnames';

export const SimpleHeadline = ({color, tag, fontFamily, children, ...props}: IHeadline):JSX.Element=>{

    switch(tag){
        case headlineTagTypes.h1:
            return (
                <h1
                    className={cn(
                        generalStyle.h1,
                        generalStyle.headline,
                        {
                            [generalStyle.blackColor]: color === headlineColorTypes.black,
                            [generalStyle.whiteColor]: color === headlineColorTypes.white,
                            [generalStyle.blueColor]: color === headlineColorTypes.blue,
                            [generalStyle.fontFamilyCaveatBrush]: fontFamily === headlineFontFamilyTypes.caveatBrush,
                            [generalStyle.fontFamilyMontserrat]: fontFamily === headlineFontFamilyTypes.montserrat,
                        }
                    )}
                >
                    {children}
                </h1>
            )
        case headlineTagTypes.h2:
            return (
                <h2
                    className={cn(
                        generalStyle.h2,
                        generalStyle.headline,
                        {
                            [generalStyle.blackColor]: color === headlineColorTypes.black,
                            [generalStyle.whiteColor]: color === headlineColorTypes.white,
                            [generalStyle.blueColor]: color === headlineColorTypes.blue,
                            [generalStyle.fontFamilyCaveatBrush]: fontFamily === headlineFontFamilyTypes.caveatBrush,
                            [generalStyle.fontFamilyMontserrat]: fontFamily === headlineFontFamilyTypes.montserrat,
                        }
                    )}
                >
                    {children}
                </h2>
            )
        case headlineTagTypes.h3:
            return (
                <h3
                    className={cn(
                        generalStyle.h3,
                        generalStyle.headline,
                        {
                            [generalStyle.blackColor]: color === headlineColorTypes.black,
                            [generalStyle.whiteColor]: color === headlineColorTypes.white,
                            [generalStyle.blueColor]: color === headlineColorTypes.blue,
                            [generalStyle.fontFamilyCaveatBrush]: fontFamily === headlineFontFamilyTypes.caveatBrush,
                            [generalStyle.fontFamilyMontserrat]: fontFamily === headlineFontFamilyTypes.montserrat,
                        }
                    )}
                >
                    {children}
                </h3>
            )
        case headlineTagTypes.h4:
            return (
                <h4
                    className={cn(
                        generalStyle.h4,
                        generalStyle.headline,
                        {
                            [generalStyle.blackColor]: color === headlineColorTypes.black,
                            [generalStyle.whiteColor]: color === headlineColorTypes.white,
                            [generalStyle.blueColor]: color === headlineColorTypes.blue,
                            [generalStyle.fontFamilyCaveatBrush]: fontFamily === headlineFontFamilyTypes.caveatBrush,
                            [generalStyle.fontFamilyMontserrat]: fontFamily === headlineFontFamilyTypes.montserrat,
                        }
                    )}
                >
                    {children}
                </h4>
            )    
        default:
            return <></>    
    }
}