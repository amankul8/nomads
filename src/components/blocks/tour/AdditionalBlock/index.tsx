import { headlineColorTypes, headlineFontFamilyTypes, headlineTagTypes, Paragraph, SimpleHeadline, textColor, textFamily, textSize } from "@/ui";
import styles from "./TourAdditionalBlock.module.css";

interface ITourAdditionalBlock{
    title: string,
    text: string
}

export const TourAdditionalBlock = ({title, text}:ITourAdditionalBlock):JSX.Element=>{

    return(
        <div className={styles.wrapper}>

            <SimpleHeadline
                color={headlineColorTypes.blue}
                fontFamily={headlineFontFamilyTypes.caveatBrush}
                tag={headlineTagTypes.h3}
                classname={styles.title}
            >
                {title}
            </SimpleHeadline>

            <Paragraph
                color={textColor.black}
                fontFamily={textFamily.openSanse}
                size={textSize.l}
                classname={styles.text}
            >
                {text}
            </Paragraph>
        </div>
    )
}