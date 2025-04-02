import styles from "./footer.module.css";
import cn from "classnames";
import {
    Paragraph,
} from "@/ui";
import { Headline} from "@/ui";
import Logo from "@/components/icons/general/logo.svg";
import {Facebook, Instagram, Twitter, Email, Phone} from '@mui/icons-material';
import YouTube from '@mui/icons-material/YouTube';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Location from '@mui/icons-material/LocationOn';
import { useAppSelector } from "@/store/store";
import { selectStaticData } from "@/store/slices/static_data.slice";
import Link from "next/link";

export const Footer = () => {

    const staticData: Record<string, string> = useAppSelector(selectStaticData);

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
                        {staticData['footer_info_title'] ?? 'Nomad travel'}
                    </Headline>
                    <Paragraph>
                        {staticData['footer_info_text'] ?? ''}
                    </Paragraph>
                </div>
                <div className={styles.col_2}>
                    
                </div>
                <div className={styles.col_3}>
                    <div className={cn(styles.row, styles.row_1)}>
                        <Phone/>
                        <Paragraph>
                            {staticData['phone'] ?? '+996 701 880 016'}
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
                            {staticData['gmail'] ?? 'askat.taalaibekov@gmail.com'}
                        </Paragraph>
                    </div>
                    <div className={styles.row}>
                        <Link href={staticData['whatsapp'] ?? '#'}> <span><WhatsApp/></span> </Link>
                        <Link href={staticData['facebook'] ?? '#'}> <span><Facebook/></span> </Link>
                        <Link href={staticData['instagram'] ?? '#'}> <span><Instagram/></span> </Link>
                        <Link href={staticData['youtube'] ?? '#'}> <span><YouTube/></span> </Link>
                        <Link href={staticData['twitter'] ?? '#'}> <span><Twitter/></span> </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}