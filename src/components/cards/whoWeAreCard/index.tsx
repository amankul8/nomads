import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from './whoWeAreCard.module.scss';
import cls from "classnames";
import { Headline, Paragraph } from "@/ui";
import Image from "next/image";
import Ornament from "@/components/icons/general/ornament.svg"

 
interface IWhoWeAreCard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    classname?: string
}

export const WhoWeAreCard:React.FC<IWhoWeAreCard> = ({classname, ...props}) => {

    return (
        <div className={cls(classname, styles.card)} {...props}>
            <Paragraph classname={styles.up_text}> Quality, but not luxury </Paragraph>
            <Headline color="black" type="section">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet neque neque. 
            </Headline>
            <figure className={styles.figure}>
                <Image
                    src={'/images/bg/nature_bg.jpg'}
                    className={styles.image}
                    width={1920}
                    height={1080}
                    alt=""
                />
            </figure>
            <div className={styles.description}>
                <Paragraph>
                    We offer adventure trips of all levels, accessible to the uninitiated as well
                    as suitable for the more experienced, adults and families. With us, there is no mass tourism.
                </Paragraph>
                <ul className={styles.list}>
                    <li> 
                        <Ornament/>
                        <Paragraph> 
                            We offer adventure trips of all levels, accessible to the uninitiated as well
                            as suitable for the more experienced, adults and families. With us, there is no mass tourism. 
                        </Paragraph>
                    </li>
                    <li> 
                        <Ornament/>
                        <Paragraph> 
                            We offer adventure trips of all levels, accessible to the uninitiated as well
                            as suitable for the more experienced, adults and families. With us, there is no mass tourism. 
                        </Paragraph>
                    </li>
                    <li> 
                        <Ornament/>
                        <Paragraph> 
                            We offer adventure trips of all levels, accessible to the uninitiated as well
                            as suitable for the more experienced, adults and families. With us, there is no mass tourism. 
                        </Paragraph>
                    </li>

                </ul>   
            </div>
        </div>
    )
}