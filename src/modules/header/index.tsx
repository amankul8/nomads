import styles from "./Header.module.css";
import {Menu} from '@/components/navbar';
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { TripCard1 } from "@/components/cards/TripCard1";
import Image from "next/image";
import HeaderSkirt from "public/images/headerSkirt.png";
import { headlineColorTypes, SimpleHeadline, headlineFontFamilyTypes, headlineTagTypes } from "@/ui";
import { Paragraph, textColor, textFamily, textSize} from "@/ui";

interface IHeader extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>,HTMLHeadElement>{
}

interface ICard{
    imageUrl: string,
    title: string,
    text: string,
    href: string
  }

const cards:ICard[] = [
    {
        imageUrl: "https://cdn.wallpapersafari.com/43/71/H9wItm.jpg",
        title: 'The Virgin Nature',
        text: 'Lorem ipsum dolor sit amet',
        href: '/#'
    },
    {
        imageUrl: "https://cdn.wallpapersafari.com/43/71/H9wItm.jpg",
        title: 'The Virgin Nature',
        text: 'Lorem ipsum dolor sit amet',
        href: '/#'
    },
    {
        imageUrl: "https://cdn.wallpapersafari.com/43/71/H9wItm.jpg",
        title: 'The Virgin Nature',
        text: 'Lorem ipsum dolor sit amet',
        href: '/#'
    },
    {
        imageUrl: "https://cdn.wallpapersafari.com/43/71/H9wItm.jpg",
        title: 'The Virgin Nature',
        text: 'Lorem ipsum dolor sit amet',
        href: '/#'
    }
  ]

export const Header = ({...props}:IHeader):JSX.Element=>{

    
    return(
        <header className={styles.header_wrapper} {...props}>
            <div className={styles.header_bg_wrapper}>
                <Image
                src={'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg'}
                alt={''}
                width={1920}
                height={1080}
                className={styles.header_bg_image}
                priority={true}
                />
                <Image
                src={HeaderSkirt}
                alt={''}
                width={1920}
                className={styles.header_cloud_image}
                priority={true}
                />
            </div>
            <div className={styles.header_context_wrapper}>
                <Menu/>
                <div className={styles.header_context}>

                  <div className={styles.header_text_wrapper}>
                    <Paragraph 
                        color={textColor.white}
                        size={textSize.xl}
                        fontFamily={textFamily.openSanse}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, amet.
                    </Paragraph>
                    <SimpleHeadline
                        tag={headlineTagTypes.h1}
                        color={headlineColorTypes.white}
                        fontFamily={headlineFontFamilyTypes.caveatBrush}
                    >
                        The Virgin Nature
                    </SimpleHeadline>
                    <button>Discover</button>
                  </div>
                  {
                    cards.map((item, index)=>{
                        return(
                            <TripCard1 
                                imageUrl={item.imageUrl}
                                title={item.title}
                                text={item.text}
                                href={item.href}
                                key={index}
                            />
                        )   
                    })
                  }
                </div>
            </div>
        </header>
    )
}