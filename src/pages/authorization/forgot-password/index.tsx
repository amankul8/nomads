import { Inter } from '@next/font/google';
import styles from "@/styles/auth.module.css";
import { AuthLayout } from '@/layout/authLayout/AuthLayout';
import {Input} from '@/components/auth/input/Input';
import {SubmitButton} from '@/components/buttons/SubmitButton';
import {useForm} from "react-hook-form";
import { SubmitHandler } from 'react-hook-form/dist/types';

const inter = Inter({ subsets: ['latin'] })

interface IForgotPassword{
  email: string
}

export default function ForgotPassword() {

  const {register, handleSubmit, reset, formState:{errors, isValid}} = useForm<IForgotPassword>({mode:"onChange"});

  const onSubmit: SubmitHandler<IForgotPassword> = data =>{
    console.log(data);
    reset();
  }

  return (
    <main className={styles.home_wrapper}>
        <AuthLayout title=''>
            
          <div className={styles.wrapper}>
            <div className={styles.form_wrapper}>
                  
                  <span className={styles.title}>Forgot password</span>

                  <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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

                      <SubmitButton enablbed={isValid}> Send </SubmitButton>
                  </form>
              </div>
          </div>

        </AuthLayout>
    </main>
  );
};