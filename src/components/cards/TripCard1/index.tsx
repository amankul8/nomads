import { 
    Paragraph,
    textColor,
    textFamily,
    textSize
} from "@/ui";
import Image from "next/image";
import { useRouter } from "next/router";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { LittleMan } from "../iconComponents/littleMan";
import styles from "./TripCard1.module.css";

interface IToureCard1Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    imageUrl: string,
    title: string,
    text: string,
    href: string,
    className?: string
}

export const TripCard1 = ({imageUrl, title, text, href, className, ...props}:IToureCard1Props):JSX.Element=>{

    const route = useRouter();

    const onClickHandler = ():void => {
        if(href){
            route.push(href);
        }
    }

    return(
        <div 
            className={styles.wrapper+' '+ className} 
            onClick={onClickHandler} {...props}
        >
            <Image
                src={imageUrl}
                alt="My Card Image"
                width={800}
                height={800}
                className={styles.image}
                quality={75}
                priority={true}
            />
            <div className={styles.text_wrapper}>
                <div>
                    <Paragraph
                        size={textSize.s}
                        color={textColor.white}
                        fontFamily={textFamily.openSanse}
                    >
                        {text}
                    </Paragraph>

                    <h2>{title}</h2>

                    <div className={styles.icons_wrapper}>
                        {
                            new Array(1,2,3,4,5,6).map((i)=>{
                                return(
                                    <LittleMan className={styles.little_man_icon} opacity={2/i} key={i}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}