import styles from "./resetPassword.module.css";
import { AuthLayout } from '@/layout/authLayout/AuthLayout';
import {Input, Button, btnColorType, btnBorderSizeType, btnViewType} from '@/ui';
import {useForm, SubmitHandler} from 'react-hook-form';

interface IResetPassState {
  password: string,
  confirmPassword: string
}

export function ResetPassword() {

  const {register, reset, handleSubmit, formState:{errors, isValid}} = useForm<IResetPassState>({mode: 'onChange'});

  const onSubmit:SubmitHandler<IResetPassState> = data=>{
    console.log(data);
    reset();
  }

  return (
    <AuthLayout title='Reset password'>
        
        <div className={styles.wrapper}>
        <div className={styles.form_wrapper}>
                
                <span className={styles.title}>Reset password</span>

                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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

                  <Button 
                      btnColor={btnColorType.red}
                      btnSize={btnBorderSizeType.l}
                      btnView={btnViewType.button}
                      enabled={isValid}
                      classname={styles.button}
                  > Send  </Button>
                </form>
            </div>
        </div>

    </AuthLayout>
  );
};