import styles from "./footer.module.css";
import cn from "classnames";
import {
    Paragraph,
    NavbarItem,
} from "@/ui";
import { Headline} from "@/ui";
import Logo from "@/components/icons/general/logo.svg";
import {Facebook, Instagram, Twitter, Email, Phone} from '@mui/icons-material';
import YouTube from '@mui/icons-material/YouTube';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Location from '@mui/icons-material/LocationOn';

export const Footer = () => {

    return(
        <footer className={styles.footer_wrapper}>
            <div className={cn('container', styles.container)}>
                <div className={styles.col_1}>
                    <div className={styles.footer_icon_wrapper}>
                        <Logo/>
                        <div className={styles.footer_logo_text}>
                            <Headline 
                                type='subsection'
                                color='white'
                            >
                                Nomads Travel
                            </Headline>
                            <p>Adventures in Central Asia</p>
                        </div>             
                    </div>
                    <Headline 
                        type='normal'
                        color='white'
                        classname={styles.title}
                    >
                        Privacy Policy
                    </Headline>
                    <Paragraph>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque architecto voluptatum fugit doloremque cum soluta ullam officiis praesentium quasi sint quis sit delectus doloribus, perferendis natus labore reprehenderit dolorum!
                    </Paragraph>
                </div>
                <div className={styles.col_2}>
                    <NavbarItem
                        color='white'
                        item={false}
                        classname={styles.item}
                    >
                        Destinations
                    </NavbarItem><br/>
                    <NavbarItem
                        color='white'
                        item={false}
                        classname={styles.item}
                    >
                        Tours
                    </NavbarItem><br/>
                    <NavbarItem
                        color='white'
                        item={false}
                        classname={styles.item}
                    >
                        Map
                    </NavbarItem><br/>
                    <NavbarItem
                        color='white'
                        item={false}
                        classname={styles.item}
                    >
                        Hotels & Lodges
                    </NavbarItem><br/>
                    <NavbarItem
                        color='white'
                        item={false}
                        classname={styles.item}
                    >
                        Check flights
                    </NavbarItem><br/>
                    <NavbarItem
                        color='white'
                        item={false}
                        classname={styles.item}
                    >
                        Useful information
                    </NavbarItem><br/>
                    <NavbarItem
                        color='white'
                        item={false}
                        classname={styles.item}
                    >
                        About us
                    </NavbarItem><br/>
                </div>
                <div className={styles.col_3}>
                    <div className={cn(styles.row, styles.row_1)}>
                        <Phone/>
                        <Paragraph>
                            +996 701 880 016
                        </Paragraph>
                    </div>
                    <div className={cn(styles.row, styles.row_2)}>
                        <Location/>
                        <Paragraph>
                            Kyrgyzstan, Bishkek, J.Pudovkina 58
                        </Paragraph>
                    </div>
                    <div className={cn(styles.row, styles.row_3)}>
                        <Email/>
                        <Paragraph>
                            askat.taalaibekov@gmail.com
                        </Paragraph>
                    </div>
                    <div className={styles.row}>
                        <span><WhatsApp/></span>
                        <span><Facebook/></span>
                        <span><Instagram/></span>
                        <span><YouTube/></span>
                        <span><Twitter/></span>
                    </div>
                </div>
            </div>
        </footer>
    )
}