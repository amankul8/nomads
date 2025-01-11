import styles from "./signup.module.css";
import { AuthLayout } from '@/layouts/authLayout/AuthLayout';
import {Input, CustomButton} from '@/ui';
import Link from "next/link";
import {useForm} from "react-hook-form";
import { SubmitHandler } from 'react-hook-form/dist/types';

interface ISignupState{
  fullName: string,
  userName: string,
  email: string,
  password: string,
  confirmPassword: string,
  agree: boolean
}

export function SignUp() {

  const {register, handleSubmit, reset, watch, formState:{errors, isValid}} = useForm<ISignupState>({mode: "onChange"});
  
  const onSubmit: SubmitHandler<ISignupState> = (data)=>{
    console.log(data);
    reset();
  }

  return (
    <AuthLayout title='Sign up'>
        
        <div className={styles.wrapper}>
        <div className={styles.form_wrapper}>
            
            <span className={styles.title}>Registration</span>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <Input 
                    type="text" 
                    placeholder="Full Name"
                    isDisabled={errors?.fullName? true:false}
                    {...register('fullName', {
                        required: "This is a required field!", 
                        minLength:{
                        value: 2,
                        message: "Minimum length 2 characters!"
                        }, 
                        maxLength: {
                        value: 255,
                        message: "Maximum length 255 characters!"
                        }
                    })}
                />
                <Input 
                    type="text" 
                    placeholder="Username"
                    isDisabled={errors?.userName? true:false}
                    {...register('userName', {
                        required: "This is a required field!", 
                        minLength:{
                        value: 2,
                        message: "Minimum length 2 characters!"
                        }, 
                        maxLength: {
                        value: 50,
                        message: "Maximum length 50 characters!"
                        }
                    })}
                />
                <Input 
                    type="email" 
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
                    type="password" 
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
                <Input 
                    type="password" 
                    placeholder=" Confirm Password"
                    isDisabled={errors?.confirmPassword? true:false}
                    {...register('confirmPassword', {
                    required: "This is a required field!", 
                    validate: (value, formValues)=> value === formValues.password
                    })}
                />

                <div className={styles.agree}>
                    <input 
                        id='check' 
                        type="checkbox"
                        { ...register('agree',{
                        validate: value=> value===true
                        })} 
                    />
                    <label htmlFor="check"> 
                        Creating account and accepting 
                        <Link href={'/'}>Term & Conditions.</Link>
                    </label>
                </div>

                <CustomButton 
                    color="red"
                    handler={()=>{}}
                    active={isValid}
                    classname={styles.button}
                > 
                    Sign up 
                </CustomButton>
            </form>
        </div>
        </div>

    </AuthLayout>
  );
};