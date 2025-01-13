import Image from 'next/image';
import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styles from "./firstBlockLayout.module.css";
import cloudImage from '/public/images/headerSkirt.png';
import cn from "classnames";

interface IFirstBlockLayout extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    isFullSize?: boolean,
    withCloud?: boolean,
    bg_image?: string
    children?: ReactNode,
    classname?: String
}

export const FirstBlockLayout:React.FC<IFirstBlockLayout> = ({children, bg_image, classname, isFullSize=false, withCloud=true}) => {
  return (
    <section className={cn(styles.wrapper, {
          [styles.helf]: !isFullSize
        },
        classname
      )}
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

