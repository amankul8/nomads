import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./ReviewCard.module.css";

interface IReviewCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{

}

export const ReviewCard = ({}:IReviewCardProps):JSX.Element=>{

    return(
        <div className={styles.wrapper}>
            adffd
        </div>
    )
}
