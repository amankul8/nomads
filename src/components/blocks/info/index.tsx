import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./InfoBlock.module.css";
import Image from "next/image";
import cls from "classnames";

import { 
    Headline,
    Paragraph,
    CustomButton
} from "@/ui";
import Icon1 from "public/icons/infoBlockIcons/Icon1.svg";
import Icon2 from "public/icons/infoBlockIcons/Icon2.svg"

interface IInfoBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    title: string,
    text: string,
    imageUrl: string,
    href: string,
    def?: boolean | undefined
}

export const InfoBlock = ({title, text, imageUrl, href, def, ...props}:IInfoBlockProps):JSX.Element=>{

    if(def == null || def == false){
        return(
            <div className={cls(styles.wrapper, styles.right)}>
                <div className={cls(styles.image_wrapper)}>
                    <Image
                        src={'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg'}
                        alt={''}
                        width={1920}
                        height={1080}
                        className={cls(styles.image)}
                    />
                </div>
                <div className={styles.text_wrapper}>
                    <Icon1 className={styles.icon}/>
                    <Headline 
                        type="section"
                        color='black'
                        underline={true}
                        classname={styles.h}
                    >
                        We are featured in
                    </Headline>
                    <Paragraph>
                        The Alps are the highest and most extensive mountain range system that lies entirely in Europe, separating Southern from Central and Western Europe and stretching approximately 1,200 kilometres across eight 
                        Alpine countries: France, Switzerland, Italy, Monaco, Liechtenstein, Austria, Germany, and Slovenia.
                        
                    </Paragraph>
                    
                    <CustomButton
                        color="blue"
                        handler={()=>{}}
                    >
                        Discover
                    </CustomButton>
                </div>
            </div>
        )
    }else{
        return(
            <div className={styles.wrapper}>
                <div className={styles.text_wrapper}>
                    <Icon1 className={styles.icon}/>
                    <Headline 
                        type="section"
                        color='black'
                        underline={true}
                        classname={styles.h}
                    >
                        We are featured in
                    </Headline>
                        
                    <Paragraph>
                        The Alps are the highest and most extensive mountain range system that lies entirely in Europe, separating Southern from Central and Western Europe and stretching approximately 1,200 kilometres across eight Alpine countries: France, Switzerland, Italy, Monaco, Liechtenstein, Austria, Germany, and Slovenia.
                    </Paragraph>
                    
                    <CustomButton
                        color="blue"
                        handler={()=>{}}
                    >
                        Discover
                    </CustomButton>
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