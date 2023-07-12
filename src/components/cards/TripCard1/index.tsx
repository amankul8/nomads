import { 
    Paragraph,
    textColor,
    textFamily,
    textSize
} from "@/ui";
import Image from "next/image";
import { useRouter } from "next/router";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { LittleMan } from "../icons/littleMan";
import styles from "./TripCard1.module.css";

interface IToureCard1Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    imageUrl: string,
    title: string,
    text: string,
    href: string
}

export const TripCard1 = ({imageUrl, title, text, href, ...props}:IToureCard1Props):JSX.Element=>{

    const route = useRouter();

    const onClickHandler = ():void => {
        if(href){
            route.push(href);
        }
    }

    return(
        <div className={styles.wrapper} onClick={onClickHandler} {...props}>
            <Image
                src="https://cdn.wallpapersafari.com/43/71/H9wItm.jpg"
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
                        Lorem ipsum dolor sit amet.
                    </Paragraph>

                    <h2>The Virgin Nature</h2>

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