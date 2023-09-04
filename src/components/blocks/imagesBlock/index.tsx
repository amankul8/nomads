import React from "react";
import styles from "./ImagesBlock.module.css";

export const ImagesBlock = ()=>{
    return(
        <section className={styles.wrapper}>
            <img className={styles.image} src='https://alizila.oss-us-west-1.aliyuncs.com/uploads/2018/02/chinese-tourists_featured.jpg' alt={''} key={'1'}/>
            <img className={styles.image} src='https://static.euronews.com/articles/stories/07/20/09/70/1440x810_cmsv2_9fd3e55d-8994-5043-a421-db603f303be9-7200970.jpg' alt={''} key={'2'}/>
            <img className={styles.image} src='https://mcdn.wallpapersafari.com/medium/57/40/lzjXFh.jpg' alt={''} key={'3'}/>
            <img className={styles.image} src='https://mcdn.wallpapersafari.com/medium/0/89/LjaVd1.jpg' alt={''} key={'4'} />
            <img className={styles.image} src='https://www.marketplace.org/wp-content/uploads/2022/05/LastTourist_cropped_nl.jpg?w=1200' alt={''} key={'5'}/>
            <img className={styles.skirt} src={'/icons/blockSkirts/blueBlockSkirt.svg'} alt="" />
        </section>
    )
} 