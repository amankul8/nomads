import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from './whoWeAreCard.module.scss';
import cls from "classnames";
import { Headline, Paragraph } from "@/ui";
import Image from "next/image";
import Ornament from "@/components/icons/general/ornament.svg"
import { WhoWeAreDataType } from "@/store/models/who_we_are";
import Link from "next/link";

 
interface IWhoWeAreCard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: WhoWeAreDataType,
    classname?: string
}

export const WhoWeAreCard:React.FC<IWhoWeAreCard> = ({classname, data, ...props}) => {

    return (
        <div className={cls(classname, styles.card)} {...props}>
            <Paragraph classname={styles.up_text}> {data.subtitle || 'Quality, but not luxury'} </Paragraph>
            <Headline color="black" type="section">
                {data.title || ''}
            </Headline>
            <figure className={styles.figure}>
                <Image
                    src={data.image != ''? data.image: '/images/bg/nature_bg.jpg'}
                    className={styles.image}
                    width={1920}
                    height={1080}
                    alt=""
                />
            </figure>
            {
                data.link != ""
                ?   <a className={styles.doc_link} href={`http://localhost:3000/${data.link}`} target="_blank" rel="noopener noreferrer">
                        Document PDF
                    </a>
                : null    
            }
            <div className={styles.description}>
                <Paragraph>
                    {
                        data.description || ''
                    }
                </Paragraph>
                <Paragraph>
                    {
                        data.list.title && data.list.title != '' ?
                        data.list.title: ''
                    }
                </Paragraph>
                <ul className={styles.list}>
                    {
                        data.list.data && data.list.data.map(item => 
                            <li> 
                                <Ornament/>
                                <Paragraph> 
                                    {item}
                                </Paragraph>
                            </li> 
                        )
                    }
                </ul>   
            </div>
        </div>
    )
}