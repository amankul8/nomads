import styles from "./Footer.module.css";
import cn from "classnames";
import {
    Paragraph,
    textColor,
    textSize,
    textFamily,
    Item,
    itemTextColorTypes,
    Span
} from "@/ui";
import { SimpleHeadline, headlineColorTypes, headlineFontFamilyTypes, headlineTagTypes} from "@/ui";
import Logo from "public/icons/logo.svg";
import Whatsapp from "public/icons/socialMediaIcons/whatsapp.svg";
import Facebook from "public/icons/socialMediaIcons/facebook.svg";
import Instagram from "public/icons/socialMediaIcons/instagram.svg";
import Youtube from "public/icons/socialMediaIcons/youtube.svg";
import Twitter from "public/icons/socialMediaIcons/twitter.svg";
import Email from "public/icons/socialMediaIcons/email.svg";
import Phone from "public/icons/socialMediaIcons/phone.svg";
import Location from "public/icons/socialMediaIcons/location.svg";


export const Footer = ():JSX.Element=>{

    return(
        <footer className={styles.footer_wrapper}>
            <div className={styles.col_1}>
                <div className={styles.footer_icon_wrapper}>
                    <Logo/>
                    <div className={styles.footer_logo_text}>
                        <SimpleHeadline 
                            tag={headlineTagTypes.h3} 
                            color={headlineColorTypes.white}
                            fontFamily={headlineFontFamilyTypes.montserrat}
                        >
                            Nomads Travel
                        </SimpleHeadline>
                        <p>Adventures in Central Asia</p>
                    </div>             
                </div>
                <SimpleHeadline 
                    tag={headlineTagTypes.h4} 
                    color={headlineColorTypes.white}
                    fontFamily={headlineFontFamilyTypes.montserrat}
                    classname={styles.title}
                >
                    Privacy Policy
                </SimpleHeadline>
                <Paragraph
                    size={textSize.l}
                    color={textColor.white}
                    fontFamily={textFamily.openSanse}
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque architecto voluptatum fugit doloremque cum soluta ullam officiis praesentium quasi sint quis sit delectus doloribus, perferendis natus labore reprehenderit dolorum!
                </Paragraph>
            </div>
            <div className={styles.col_2}>
                <Item
                    itemTextColor={itemTextColorTypes.white}
                    classname={styles.item}
                >
                    Destinations
                </Item><br/>
                <Item
                    itemTextColor={itemTextColorTypes.white}
                    classname={styles.item}
                >
                    Tours
                </Item><br/>
                <Item
                    itemTextColor={itemTextColorTypes.white}
                    classname={styles.item}
                >
                    Map
                </Item><br/>
                <Item
                    itemTextColor={itemTextColorTypes.white}
                    classname={styles.item}
                >
                    Hotels & Lodges
                </Item><br/>
                <Item
                    itemTextColor={itemTextColorTypes.white}
                    classname={styles.item}
                >
                    Check flights
                </Item><br/>
                <Item
                    itemTextColor={itemTextColorTypes.white}
                    classname={styles.item}
                >
                    Useful information
                </Item><br/>
                <Item
                    itemTextColor={itemTextColorTypes.white}
                    classname={styles.item}
                >
                    About us
                </Item><br/>
            </div>
            <div className={styles.col_3}>
                <div className={cn(styles.row, styles.row_1)}>
                    <Phone/>
                    <Paragraph
                        color={textColor.white}
                        fontFamily={textFamily.openSanse}
                        size={textSize.m}
                    >+996 701 880 016</Paragraph>
                </div>
                <div className={cn(styles.row, styles.row_2)}>
                    <Location/>
                    <Paragraph
                        color={textColor.white}
                        fontFamily={textFamily.openSanse}
                        size={textSize.m}
                    >Kyrgyzstan, Bishkek, J.Pudovkina 58</Paragraph>
                </div>
                <div className={cn(styles.row, styles.row_3)}>
                    <Email/>
                    <Paragraph
                        color={textColor.white}
                        fontFamily={textFamily.openSanse}
                        size={textSize.m}
                    >askat.taalaibekov@gmail.com</Paragraph>
                </div>
                <div className={styles.row}>
                    <span><Whatsapp/></span>
                    <span><Facebook/></span>
                    <span><Instagram/></span>
                    <span><Youtube/></span>
                    <span><Twitter/></span>
                </div>
            </div>
        </footer>
    )
}