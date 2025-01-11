import Link from "next/link";
import {useForm, SubmitHandler} from "react-hook-form";
import  FormData from 'form-data';
import myAxios from '@/helpers/ApiHelper';
import { Input, CustomButton} from "@/ui";
import { AuthLayout } from "@/layouts/authLayout/AuthLayout";
import styles from "./signin.module.css";
import FIcon from "public/icons/authIcons/withFacebookIcon.svg";
import GIcon from "public/icons/authIcons/withGoogleIcon.svg";

interface ISigninState{
  email: string,
  password: string
}


export function SignIn() {

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
      <AuthLayout title={'Sign in'}>
          <div className={styles.wrapper}>
            <div className={styles.form_wrapper}>
                <span className={styles.title}>Sign in with</span>
                <div className={styles.signin_with}>
                    <div className={styles.icons}>
                        <FIcon/>
                        <span>Login with Facebook</span>
                    </div>
                    
                    <div className={styles.icons}>
                        <GIcon/>
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
                        <Link href={"/auth/forgot-password"}>Forgot password?</Link>
                    </div>

                    <CustomButton 
                      color="red"
                      handler={()=>{}}
                      active={isValid}
                      classname={styles.button}
                    > Sign in  </CustomButton>
                </form>
            </div>
          </div>
          </AuthLayout>   
  );
};