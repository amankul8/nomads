import Image from 'next/image';
import React, { ReactNode } from 'react';
import styles from "./FirstBlockLayout.module.css";
import cloudImage from '/public/images/headerSkirt.png';
import cn from "classnames";

interface IFirstBlockLayout{
    children?: ReactNode,
    isFullSize?: boolean,
    withCloud?: boolean,
    bg_image?: string
}

export function FirstBlockLayout({children, bg_image, isFullSize=false, withCloud=true}:IFirstBlockLayout):JSX.Element{
  return (
    <section className={cn(styles.wrapper, {
        [styles.helf]: isFullSize
      })}
      style={bg_image?{backgroundImage: `url(${bg_image})`}:{}}
    >
        {children}
        <Image
            className={cn(styles.skirt, {
              [styles.hidden_skirt]: !withCloud
            })}
            height={1080}
            width={1920}
            src={cloudImage}
            alt={''}
        />
    </section>
  )
}

