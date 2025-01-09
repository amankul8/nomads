import { Headline } from "@/ui";
import Image from "next/image";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./DestinationCard.module.css";

interface IDescriptionCard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    name: string,
    image: string,
}

export const DestinationCard:React.FC<IDescriptionCard> = ({name, image, ...rest}):JSX.Element =>{

    return(
        <div className={styles.card_wrapper} {...rest}>
            <Image
                src={'https://mcdn.wallpapersafari.com/medium/41/66/2pefBJ.jpg'}
                width={320}
                height={210}
                alt={''}
                className={styles.bg}
            />
            <div className={styles.content}>
                <Headline
                    color='white'
                    type="normal"
                >
                    {name}
                </Headline>
            </div>
        </div>
    )
}