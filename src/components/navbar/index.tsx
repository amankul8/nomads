import styles from "./Menu.module.css";
import Logo from "public/icons/logo.svg";
import Link from "next/link";
import { useContext } from "react";
import { TokenContext } from "@/context";
import Phone from "public/icons/socialMediaIcons/phone.svg";
import Email from "public/icons/socialMediaIcons/email.svg";
import Facebook from "public/icons/socialMediaIcons/facebook.svg";
import Instagram from "public/icons/socialMediaIcons/instagram.svg";
import Twitter from "public/icons/socialMediaIcons/twitter.svg";

const menu_items:string[] = [
    'Plan a trip',
    'Discover',
    'Check flights',
    'Roads & Tours',
    'Trip planner & Map',
    'Hotels & Lodges',
    'Useful Information',
    'Travel Deals',
];

export const Menu = ():JSX.Element=>{

    const {tokens} = useContext(TokenContext);

    console.log(tokens);

    return(
        <div className={styles.menu_wrapper}>

            <div className={styles.up}>
                <div className={styles.block}>
                    <span>
                        <Phone/>
                        <p>+41 21 634 05 05</p>
                    </span>
                    <span>
                        <Email/>
                        <p>+41 21 634 05 05</p>
                    </span>
                </div>
                <div className={styles.block}>
                    <span>
                        <Facebook/>
                        <Instagram/>
                        <Twitter/>
                    </span>
                    <div className={styles.user_info}>
                        <div className={styles.avatar}>
                            A
                        </div>
                        <p>
                            Askat Taalaybekov
                        </p>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.32157 0.730434C9.32157 0.730434 9.34807 0.756941 9.40109 0.809954C9.4541 0.862967 9.48061 0.962019 9.48061 1.10711C9.48061 1.2522 9.42759 1.37776 9.32157 1.48378L5.57157 5.23378C5.46554 5.33981 5.33998 5.39282 5.19489 5.39282C5.0498 5.39282 4.92425 5.33981 4.81822 5.23378L1.06822 1.48378C0.962193 1.37776 0.90918 1.2522 0.90918 1.10711C0.90918 0.962019 0.962193 0.836461 1.06822 0.730434C1.17425 0.624407 1.2998 0.571394 1.44489 0.571394H8.94489C9.08998 0.571394 9.21554 0.624407 9.32157 0.730434Z" fill="white"/>
                        </svg>

                    </div>
                </div>
            </div>

            <div className={styles.menu}>
                <Link href={"/"}>
                    <Logo/>
                </Link>
                {menu_items.map((item, index)=>{
                    return(
                        <Link className={styles.items} href={'#'} key={index}>
                            {item}
                        </Link>
                    )
                })}
                <div className={styles.languages_wrapper}>
                    <select className={styles.languages}>
                        <option value="kg">kg</option>
                        <option value="kg">ru</option>
                        <option value="kg">en</option>
                        <option value="kg">kg</option>
                        <option value="kg">kg</option>
                    </select>
                    <div className={styles.icon}/>
                </div>
            </div>
        </div>
    )
}