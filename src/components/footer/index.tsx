import styles from "./Footer.module.css";
import cn from "classnames";
import {Ptag} from "@/components/Ptag";
import { Htag } from "../Htag";
import Logo from "../svg/logo.svg";
import Whatsapp from "../svg/socialMediaIcons/whatsapp.svg";
import Facebook from "../svg/socialMediaIcons/facebook.svg";
import Instagram from "../svg/socialMediaIcons/instagram.svg";
import Youtube from "../svg/socialMediaIcons/youtube.svg";
import Twitter from "../svg/socialMediaIcons/twitter.svg";
import Email from "../svg/socialMediaIcons/email.svg";
import Phone from "../svg/socialMediaIcons/phone.svg";
import Location from "../svg/socialMediaIcons/location.svg";


export const Footer = ():JSX.Element=>{

    return(
        <footer className={styles.footer_wrapper}>
            <div className={styles.col_1}>
                <div className={styles.footer_icon_wrapper}>
                    <Logo></Logo>
                    <div className={styles.footer_logo_text}>
                        <span>Nomads Travel</span>
                        <p>Adventures in Central Asia</p>
                    </div>             
                </div>
                <Htag tag="h3" color="white">Privacy Policy</Htag>
                <Ptag size="m" color="white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque architecto voluptatum fugit doloremque cum soluta ullam officiis praesentium quasi sint quis sit delectus doloribus, perferendis natus labore reprehenderit dolorum! Veritatis accusamus porro dignissimos fugiat tenetur?
                </Ptag>
            </div>
            <div className={styles.col_2}>
                <span>destinations</span>
                <span>tours</span>
                <span>map</span>
                <span>hotels & lodges</span>
                <span>check flights</span>
                <span>useful information</span>
                <span>about us</span>
            </div>
            <div className={styles.col_3}>
                <div className={cn(styles.row, styles.row_1)}>
                    <Phone/>
                    <p>+996 701 880 016</p>
                </div>
                <div className={cn(styles.row, styles.row_2)}>
                    <Location/>
                    <p>Kyrgyzstan, Bishkek, J.Pudovkina 58</p>
                </div>
                <div className={cn(styles.row, styles.row_3)}>
                    <Email/>
                    <p>askat.taalaibekov@gmail.com</p>
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