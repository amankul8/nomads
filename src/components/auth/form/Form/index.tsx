import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Form.module.css";
import F from '@/components/svg/authIcons/withFacebookIcon.svg';
import G from '@/components/svg/authIcons/withGoogleIcon.svg';
import {Input} from '@/components/auth/input/Input';
import Link from "next/link";
import {SubmitButton} from '@/components/buttons/SubmitButton';

export const SIGNIN = 'SIGNIN';
export const SIGNUP = 'SIGNUP';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const CONFIRM_ACCOUNT = 'CONFIRM_ACCOUNT';
export const RESET_PASSWORD = 'RESET_PASSWORD';

interface formProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    form: typeof SIGNIN | typeof SIGNUP | typeof FORGOT_PASSWORD | typeof CONFIRM_ACCOUNT | typeof RESET_PASSWORD;
}

export function Form({form}: formProps):JSX.Element{

    if(form===SIGNIN){
        return(
            <div className={styles.wrapper}>

                <span className={styles.title}>Sign in with</span>

                <div className={styles.signin_with}>
                    <div className={styles.icons}>
                        <F/>
                        <span>Login with Facebook</span>
                    </div>
                    
                    <div className={styles.icons}>
                        <G/>
                        <span>Login with Google</span>
                    </div>
                </div>

                <div className={styles.divider}>
                    <div className={styles.dividing_line}/>
                    <span>OR</span>
                    <div className={styles.dividing_line}/>
                </div>

                <form action="" className={styles.form}>
                    <Input type="email" disabled={false} placeholder="Email"/>
                    <Input type="password" placeholder="Password"/>
 
                    <div className={styles.forgot_password}>
                        <Link href={"/authorization/forgot-password"}>Forgot password?</Link>
                    </div>

                    <SubmitButton enablbed={false}> Sign in </SubmitButton>
                </form>
            </div>
        )
    }else if(form===SIGNUP){
        return(
            <div className={styles.wrapper}>
                
                <span className={styles.title}>Registration</span>

                <form action="" className={styles.form}>
                    <Input type="text" placeholder="Full Name"/>
                    <Input type="text" placeholder="Username"/>
                    <Input type="email" disabled={false} placeholder="Email"/>
                    <Input type="password" placeholder="Password"/>
                    <Input type="password" placeholder=" Confirm Password"/>
 
                    <div className={styles.agree}>
                        <input id='check' type="checkbox" />
                        <label htmlFor="check"> 
                            Creating account and accepting 
                            <Link href={'/'}>Term & Conditions.</Link>
                        </label>
                    </div>

                    <SubmitButton enablbed={false}> Sign up </SubmitButton>
                </form>
            </div>
        )
    }else if(form===FORGOT_PASSWORD){
        return(
            <div className={styles.wrapper}>
                
                <span className={styles.title}>Forgot password</span>

                <form action="" className={styles.form}>
                    <Input type="email" disabled={false} placeholder="Email"/>

                    <SubmitButton enablbed={false}> Send </SubmitButton>
                </form>
            </div>
        )
    }else if(form===CONFIRM_ACCOUNT){
        return(
            <div className={styles.wrapper}>
                
                <span className={styles.title}>Confirm account</span>

                <form action="" className={styles.form}>
                    <Input type="email" disabled={false} placeholder="Email"/>
                    <Input type="text" disabled={false} placeholder="Code"/>

                    <SubmitButton enablbed={false}> Send </SubmitButton>
                </form>
            </div>
        )
    }else if(form===RESET_PASSWORD){
        return(
            <div className={styles.wrapper}>
                
                <span className={styles.title}>Reset password</span>

                <form action="" className={styles.form}>
                    <Input type="password" disabled={false} placeholder="Password"/>
                    <Input type="password" disabled={false} placeholder="Confirm password"/>

                    <SubmitButton enablbed={false}> Send </SubmitButton>
                </form>
            </div>
        )
    }
    else{
        return(
            <></>
        )
    }
}
