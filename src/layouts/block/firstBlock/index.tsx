import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styles from "./firstBlockLayout.module.scss";
import cn from "classnames";
import ReactPlayer from 'react-player';
import { DEFAULT_IMAGE_URL } from '@/config';

interface IFirstBlockLayout extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isFullSize?: boolean,
  withCloud?: boolean,
  bg_image?: string,
  bg_video?: string,
  children?: ReactNode,
  classname?: String
}

export const FirstBlockLayout: React.FC<IFirstBlockLayout> = ({ children, bg_image, bg_video, classname, isFullSize = true, withCloud = true }) => {

  return (
    <section className={cn(styles.wrapper, {
      [styles.helf]: !isFullSize
    },
      classname
    )}
      style={bg_image ? { backgroundImage: `url(${bg_image})` } : {}}
    >
      {
        bg_video &&
        <div className={styles.video_wrapper}>
          <ReactPlayer
            url={bg_video}
            playing={true}
            muted={true}
            controls={false}
            loop={true}
            width='100%'
            height='100%'
          />
        </div>
      }
      <div
        className={
          cn(styles.content_layout, {
            [styles.hidden_cloud]: !withCloud
          })
        }
      >
        {children}
      </div>
    </section>
  )
}

