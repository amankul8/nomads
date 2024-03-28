import { PopularToursBlock } from "@/components/blocks/popularToursBlock";
import styles from "./toursContent.module.css";


const ToursContent = ()=>{

    return (
        <div className={styles.tours_content_wrapper}>
            <PopularToursBlock ind={0}/>
            <PopularToursBlock ind={1}/>
            <PopularToursBlock ind={2}/>
        </div>
    )
}

export default ToursContent;