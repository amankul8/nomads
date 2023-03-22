import styles from "./Menu.module.css";
import Logo from "@/components/svg/logo.svg";
import {useRouter} from "next/router";
import Link from "next/link";
import cn from "classnames";

export function Menu():JSX.Element {

    const router = useRouter();

    switch(router.pathname){
        case "/authorization/sign-in":
            return(
                <div className={styles.wrapper}>
                    <Logo/>
                    <div className={styles.items}>
                        <span className={styles.text}>Do not have an account?</span>
                        <Link href={"/authorization/sign-up"} className={styles.text}>Sign up</Link>         
                    </div>
                </div>
            )
            break;
        case "/authorization/sign-up":
            return(
                <div className={styles.wrapper}>
                    <Logo/>
                    <div className={styles.items}>
                        <span className={styles.text}>Have an account?</span>
                        <Link href={"/authorization/sign-in"} className={styles.text}>Sign in</Link>       
                    </div>
                </div>
            )
            break;
        case "/authorization/forgot-password":
        case "/authorization/confirm-account":
        case "/authorization/reset-password":
            return(
                <div className={styles.wrapper}>
                    <Logo/>
                    <div className={styles.items}>
                        <Link href={"/authorization/sign-in"} className={styles.text}>Sign in</Link>            
                    </div>
                </div>
            )
            break;
        default: 
            return <></>    
    }
}

            
                               