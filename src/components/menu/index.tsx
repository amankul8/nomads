import styles from "./Menu.module.css";
import Logo from "@/components/svg/logo.svg";
import Link from "next/link";

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



    return(
        <div className={styles.menu_wrapper}>
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
    )
}