import Head from "next/head";
import { ReactNode } from "react";
import styles from "./AuthLayout.module.css";
import {AuthMenu} from "@/components/navbar";

interface IAuthLayoutProps {
    children: ReactNode,
    title: string
}

export  const AuthLayout:React.FC<IAuthLayoutProps> = ({children, title}) => {

    return(
        <div className={styles.wrapper}>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <AuthMenu/>
            {children}
        </div>
    )
}