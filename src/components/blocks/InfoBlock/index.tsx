import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./InfoBlock.module.css";
import Image from "next/image";
import { 
    SimpleHeadline, 
    headlineColorTypes, 
    headlineFontFamilyTypes, 
    headlineTagTypes, 
    UnderlineHeadLine,
    Paragraph
} from "@/ui";
import Icon1 from "public/icons/infoBlockIcons/Icon1.svg";
import Icon2 from "public/icons/infoBlockIcons/Icon2.svg"
import { IParagraph, textColor, textSize, textFamily} from "@/ui";

interface IInfoBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    title: string,
    text: string,
    imageUrl: string,
    href: string,
    def?: boolean | undefined
}

export const InfoBlock = ({title, text, imageUrl, href, def, ...props}:IInfoBlockProps):JSX.Element=>{

    if(def == false){
        return(
            <div className={styles.wrapper}>
                <div className={styles.image_wrapper}>
                    <Image
                        src={'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg'}
                        alt={''}
                        width={1920}
                        height={1080}
                        className={styles.image}
                    />
                </div>
                <div className={styles.text_wrapper}>
                    <Icon1 className={styles.icon}/>
                    <UnderlineHeadLine 
                        color={headlineColorTypes.black}
                        tag={headlineTagTypes.h2}
                        fontFamily={headlineFontFamilyTypes.caveatBrush}
                    >
                        We are featured in
                    </UnderlineHeadLine>
                    <Paragraph
                        color={textColor.blackGray}
                        size={textSize.l}
                        fontFamily={textFamily.openSanse}
                    >
                        The Alps are the highest and most extensive mountain range system that lies entirely in Europe, separating Southern from Central and Western Europe and stretching approximately 1,200 kilometres across eight Alpine countries: France, Switzerland, Italy, Monaco, Liechtenstein, Austria, Germany, and Slovenia.
                    </Paragraph>
                    {/* More info button */}
                </div>
            </div>
        )
    }else{
        return(
            <div className={styles.wrapper}>
                <div className={styles.text_wrapper}>
                    <Icon1 className={styles.icon}/>
                    <UnderlineHeadLine 
                        color={headlineColorTypes.black}
                        tag={headlineTagTypes.h2}
                        fontFamily={headlineFontFamilyTypes.caveatBrush}
                    >
                        We are featured in
                    </UnderlineHeadLine>
                        
                    <Paragraph
                        color={textColor.blackGray}
                        size={textSize.l}
                        fontFamily={textFamily.openSanse}
                    >
                        The Alps are the highest and most extensive mountain range system that lies entirely in Europe, separating Southern from Central and Western Europe and stretching approximately 1,200 kilometres across eight Alpine countries: France, Switzerland, Italy, Monaco, Liechtenstein, Austria, Germany, and Slovenia.
                    </Paragraph>
                    {/* More info button */}
                </div>
                <div className={styles.image_wrapper}>
                    <Image
                        src={'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg'}
                        alt={''}
                        width={1920}
                        height={1080}
                        className={styles.image}
                    />
                </div>
            </div>
        )
    }
}