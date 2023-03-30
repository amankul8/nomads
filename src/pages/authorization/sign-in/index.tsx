import { Inter } from '@next/font/google';
import styles from "@/styles/auth.module.css";
import { AuthLayout } from '@/layout/authLayout/AuthLayout';
import F from '@/components/svg/authIcons/withFacebookIcon.svg';
import G from '@/components/svg/authIcons/withGoogleIcon.svg';
import {Input} from '@/components/auth/input/Input';
import Link from "next/link";
import {SubmitButton} from '@/components/buttons/SubmitButton';
import {useForm, SubmitHandler} from "react-hook-form";
import  FormData from 'form-data';
import myAxios from '@/helpers/ApiHelper';

interface ISigninState{
  email: string,
  password: string
}

const inter = Inter({ subsets: ['latin'] })


export default function SignIn() {

  const {register, handleSubmit, reset, watch, formState: { errors, isValid }  } = useForm<ISigninState>({
    mode: "onChange"
  });

  

  const onSubmit: SubmitHandler<ISigninState> = (d):void => {

    let data = new FormData();
    data.append('email', 'amankul.981108@gmail.com');
    data.append('password', 'Asdfg_123');

    myAxios({url: '/auth/jwt/create/', method: 'post',data: data})
    .then(res=>{
      console.log(res);
    })
    .catch(rej=>{
      console.log(rej);
    })
  }


  return (
    <main className={styles.signin_wrapper}>
        <AuthLayout title={"Sign in"} >  

          <div className={styles.wrapper}>
            <div className={styles.form_wrapper}>
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

                <form onSubmit={handleSubmit(onSubmit)} className={styles.form} >

                    <Input 
                      type="email"
                      defaultValue={''} 
                      placeholder="Email"
                      isDisabled={errors?.email? true:false}
                      {...register('email', {
                          required: "This is a required field!", 
                          pattern: {
                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            message: 'Please enter a valid email address!'
                          }
                      })}
                    />

                    <Input
                      type = "password"
                      defaultValue={''}
                      placeholder="Password" 
                      isDisabled={errors?.password? true:false}
                      {...register('password', {
                        required: "This is a required field!", 
                          minLength:{
                            value: 2,
                            message: "Minimum length 8 characters!"
                          }, 
                          maxLength: {
                            value: 255,
                            message: "Maximum length 32 characters!"
                          },
                          pattern: {
                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                            message: "Use upper and lower case characters and numbers!"
                          }
                      })}
                    />
 
                    <div className={styles.forgot_password}>
                        <Link href={"/authorization/forgot-password"}>Forgot password?</Link>
                    </div>

                    <SubmitButton type="submit" enablbed={  isValid}> Sign in </SubmitButton>
                </form>
            </div>
          </div>
        </AuthLayout>
    </main>
  );
};