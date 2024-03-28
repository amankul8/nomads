import styles from "./HeaderBlock.module.css";
import cn from "classnames";
import { headlineColorTypes, headlineFontFamilyTypes, headlineTagTypes, Paragraph, textColor, textFamily, textSize, UnderlineHeadLine } from "@/ui";
import {motion} from "framer-motion";
import OnFootImage from "./svgs/OnFoot.svg";
import Up from "./skirts/up.svg";
import Down from "./skirts/down.svg";

export enum headerBlockColorType{
    blue='blue',
    green='green',
    pink='pink',
    orange='orange',
    yellow='yellow',
    darkYellow='dark yellow'
}

export enum headerBlockTourType{
    trek,
    ski,
    horseRiding,
    bicycle
}

interface IHeaderBlock {
    type: headerBlockTourType,
    title: string,
    description: string,
    color?: headerBlockColorType,
    isFirst?: boolean
}

export const HeaderBlock = ({type, title, description, color, isFirst}: IHeaderBlock):JSX.Element=>{

    return(
        <motion.div className={cn( styles.header_wrapper,{
            [styles.blue]:  color==headerBlockColorType.blue && !isFirst,
            [styles.green]:  color==headerBlockColorType.green && !isFirst,
            [styles.pink]:  color==headerBlockColorType.pink && !isFirst,
            [styles.orange]:  color==headerBlockColorType.orange && !isFirst,
            [styles.yellow]:  color==headerBlockColorType.yellow && !isFirst,
            [styles.darkYellow]:  color==headerBlockColorType.darkYellow && !isFirst,
        })}>

            { isFirst? '':<Up className={styles.up}/> } 

            <OnFootImage className={styles.image}/>
            
            <UnderlineHeadLine
                color={!isFirst?headlineColorTypes.white:headlineColorTypes.black}
                fontFamily={headlineFontFamilyTypes.caveatBrush}
                tag={headlineTagTypes.h3}
            >
                {title}
            </UnderlineHeadLine>

            <Paragraph
                color={!isFirst?textColor.white:textColor.black}
                fontFamily={textFamily.openSanse}
                size={textSize.m}
            >
                {description}
            </Paragraph>

            <Down className={styles.down}/>

        </motion.div>
    )
}