import styles from "./Menu.module.css";
import Logo from "public/icons/logo.svg";
import {useRouter} from "next/router";
import Link from "next/link";
import cn from "classnames";

export function Menu():JSX.Element {

    const router = useRouter();

    switch(router.pathname){
        case "/auth/sign-in":
            return(
                <div className={styles.wrapper}>
                    <Logo/>
                    <div className={styles.items}>
                        <span className={styles.text}>Do not have an account?</span>
                        <Link href={"/auth/sign-up"} className={styles.text}>Sign up</Link>         
                    </div>
                </div>
            )
            break;
        case "/auth/sign-up":
            return(
                <div className={styles.wrapper}>
                    <Logo/>
                    <div className={styles.items}>
                        <span className={styles.text}>Have an account?</span>
                        <Link href={"/auth/sign-in"} className={styles.text}>Sign in</Link>       
                    </div>
                </div>
            )
            break;
        case "/auth/forgot-password":
        case "/auth/confirm-account":
        case "/auth/reset-password":
            return(
                <div className={styles.wrapper}>
                    <Logo/>
                    <div className={styles.items}>
                        <Link href={"/auth/sign-in"} className={styles.text}>Sign in</Link>            
                    </div>
                </div>
            )
            break;
        default: 
            return <></>    
    }
}

            
                               