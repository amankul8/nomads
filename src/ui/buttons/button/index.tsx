import React, { ReactNode } from "react";
import {forwardRef, ForwardedRef,} from "react";
import { IButton, btnBorderSizeType, btnViewType, btnColorType, btnArrowType} from "@/ui";
import cn from "classnames";
import styles from "./button.module.css";
import XlBorder from "../svg/btnSvgBorders/xlBorder.svg";
import LBorder from "../svg/btnSvgBorders/lBorder.svg";
import MBorder from "../svg/btnSvgBorders/mBorder.svg";
import ArrowBorder from "../svg/btnSvgBorders/arrowBorder.svg";
import Arrow from "../svg/arrow/arrow.png";
import Image from "next/image";

export const Button = forwardRef(({btnSize, btnView, btnColor, enabled=false, btnArrow, children, classname, ...props}:IButton, ref:ForwardedRef<HTMLButtonElement>):JSX.Element=>{

    const btnViewHandler = ():JSX.Element=>{
        switch(btnView){
            case btnViewType.button:
                if(btnSize===btnBorderSizeType.xl){
                    return(
                        <>
                            <XlBorder/>
                            <span>{children}</span>
                        </>
                    )
                }else if(btnSize===btnBorderSizeType.l){
                    return(
                        <>
                            <LBorder/>
                            <span>{children}</span>
                        </>
                    )
                }else if(btnSize===btnBorderSizeType.m){
                    return(
                        <>
                            <MBorder/>
                            <span>{children}</span>
                        </>
                    )
                }else{
                    return <></>
                }
            case btnViewType.arrow:
                return(
                    <>
                        <ArrowBorder/>
                        <Image 
                            src={Arrow} 
                            width={15} 
                            height={15} 
                            alt={''}
                            className={
                                cn({
                                    [styles.up]:btnArrow===btnArrowType.up,
                                    [styles.right]:btnArrow===btnArrowType.right,
                                    [styles.down]:btnArrow===btnArrowType.down
                                })
                            }
                        />
                    </>
                );
            default:
                return(<> </>);     
        }
    }

    return(
        <button 
            ref={ref}
            className={cn(
                styles.button_wrapper,
                {
                    [styles.xl]: btnSize === btnBorderSizeType.xl,
                    [styles.l]: btnSize === btnBorderSizeType.l,
                    [styles.m]: btnSize === btnBorderSizeType.m,
                    [styles.s]: btnSize === btnBorderSizeType.arrow,

                    [styles.btn]: (btnView === btnViewType.button),
                    [styles.arrow]: btnView === btnViewType.arrow,

                    [styles.white]: btnColor === btnColorType.white,
                    [styles.blue]: btnColor === btnColorType.blue,
                    [styles.red]: btnColor === btnColorType.red,

                    [styles.enabledForWhite]: enabled && btnColor === btnColorType.white,
                    [styles.enabledForBlue]: enabled && btnColor === btnColorType.blue,
                    [styles.enabledForRed]: enabled && btnColor === btnColorType.red
                },
                classname,
            )}
            {...props}
        >
            {btnViewHandler()}
        </button>
    )
}) 

Button.displayName = 'Button';
