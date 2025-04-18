import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styles from "./firstBlockLayout.module.css";
import cn from "classnames";

interface IFirstBlockLayout extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    isFullSize?: boolean,
    withCloud?: boolean,
    bg_image?: string
    children?: ReactNode,
    classname?: String
}

export const FirstBlockLayout:React.FC<IFirstBlockLayout> = ({children, bg_image, classname, isFullSize=true, withCloud=true}) => {
  return (
    <section className={cn(styles.wrapper, {
          [styles.helf]: !isFullSize
        },
        classname
      )}
      style={bg_image?{backgroundImage: `url(${bg_image})`}:{}}
    >
        <div className={cn(styles.content_layout, {
              [styles.hidden_cloud]: !withCloud
            })}>
          {children}
        </div>
    </section>
  )
}

