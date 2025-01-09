import {Paragraph, Headline,} from "@/ui";
import styles from "./TourAdditionalBlock.module.css";

interface ITourAdditionalBlock{
    title: string,
    text: string
}

export const TourAdditionalBlock = ({title, text}:ITourAdditionalBlock):JSX.Element=>{

    return(
        <div className={styles.wrapper}>

            <Headline
                type="subsection"
                color='blue'
                classname={styles.title}
            >
                {title}
            </Headline>

            <Paragraph
                classname={styles.text}
            >
                {text}
            </Paragraph>
        </div>
    )
}