import styles from "./Header.module.css";
import {Menu} from '@/components/menu';


export const Header = ():JSX.Element=>{

    return(
        <header className={styles.header_wrapper}>
            <Menu/>
            
        </header>
    )
}