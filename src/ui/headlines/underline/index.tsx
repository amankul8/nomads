import React from "react";
import { IHeadline } from "@/ui";
import { headlineColorTypes, headlineFontFamilyTypes, headlineTagTypes} from "@/ui";
import generalStyle from "../headlinesStyle.module.css";
import styles from "./underline.module.css";
import cn from 'classnames';

export const UnderlineHeadLine = ({color, tag, fontFamily, children, classname}: IHeadline):JSX.Element=>{

    switch(tag){
        case headlineTagTypes.h1:
            return (
                <> 
                    No way
                </>
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
                        },
                        classname
                    )}
                >
                    {children}
                    <span className={styles.underline}></span>
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
                        },
                        classname
                    )}
                >
                    {children}
                    <span className={styles.underline}></span>
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
                        },
                        classname
                    )}
                >
                    {children}
                    <span className={styles.underline}></span>
                </h4>
            )    
        default:
            return <></>    
    }
}