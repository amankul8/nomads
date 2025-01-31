import { FirstBlockLayout, Layout } from "@/layouts";
import { Headline, Paragraph } from "@/ui";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import cls from "classnames";

import styles from "./useful.module.scss";


export default function UsefulInfo() {
    
    return (
        <Layout>

      <FirstBlockLayout
        bg_image="https://mcdn.wallpapersafari.com/medium/55/12/PZ6DvS.jpg"
      >
        <div className={cls('container', styles.main_section)}>

          <div className={styles.content}>
            <Headline color="white" type="main"> Useful Info </Headline>
          </div>

          <div className={styles.bread_crumbs}>
            <Paragraph color='white'> Home / Useful Info </Paragraph>
          </div>

        </div>
      </FirstBlockLayout>
      </Layout>
    )
}

