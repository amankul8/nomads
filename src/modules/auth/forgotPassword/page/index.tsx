import styles from "./forgotPassword.module.css";
import { AuthLayout } from '@/layouts/authLayout/AuthLayout';
import {Input, CustomButton} from '@/ui';
import {useForm} from "react-hook-form";
import { SubmitHandler } from 'react-hook-form/dist/types';

interface IForgotPassword{
  email: string
}

export function ForgotPassword() {

  const {register, handleSubmit, reset, formState:{errors, isValid}} = useForm<IForgotPassword>({mode:"onChange"});

  const onSubmit: SubmitHandler<IForgotPassword> = data =>{
    console.log(data);
    reset();
  }

    return (
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

                        <CustomButton 
                            color="red"
                            active={isValid}
                            handler={()=>{}}
                            classname={styles.button}
                        > Send </CustomButton>
                    </form>
                </div>
            </div>

        </AuthLayout>
    );
};