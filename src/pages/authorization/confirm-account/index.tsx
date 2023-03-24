import { Inter } from '@next/font/google';
import styles from "@/styles/auth.module.css";
import { AuthLayout } from '@/layout/authLayout/AuthLayout';
import {Input} from '@/components/auth/input/Input';
import {SubmitButton} from '@/components/buttons/SubmitButton';
import {useForm, SubmitHandler} from "react-hook-form";

const inter = Inter({ subsets: ['latin'] })

interface IConfirmAccount{
  email: string,
  code: string
}

export default function ConfirmAccount() {

  const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm<IConfirmAccount>({mode: "onChange"});

  const onSubmit: SubmitHandler<IConfirmAccount> = data=>{
    console.log(data);
    reset();
  }

  return (
    <main className={styles.home_wrapper}>
        <AuthLayout title='Confirm account'>
            
          <div className={styles.wrapper}>
            <div className={styles.form_wrapper}>
                
                <span className={styles.title}>Confirm account</span>

                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <Input 
                      type="email" 
                      placeholder="Email"
                      isDisabled={errors?.email?true:false}
                      {...register('email', {
                        required: "This is a required field!",
                        pattern: {
                          value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                          message: "Use upper and lower case characters and numbers!"
                        }
                      })}
                    />
                    <Input 
                      type="text"
                      placeholder="Code"
                      isDisabled={errors?.code?true:false}
                      {...register('code',{
                        required: "This is a required field!",
                        minLength: 4
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