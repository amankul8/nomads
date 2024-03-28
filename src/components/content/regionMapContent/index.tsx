import styles from "./RegionMapContent.module.css";

export const RegionMapContent = ():JSX.Element=>{
    return(
        <section className={styles.wrapper}>
            <div className={styles.first_block}/>

            <div className={styles.content_wrapper}>
                Region map 
            </div>
        </section>
    )
}