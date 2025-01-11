import styles from "./confirmAccount.module.css";
import { AuthLayout } from '@/layouts/authLayout/AuthLayout';
import {Input, CustomButton} from '@/ui';
import {useForm, SubmitHandler} from "react-hook-form";


interface IConfirmAccount{
  email: string,
  code: string
}

export function ConfirmAccount() {

  const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm<IConfirmAccount>({mode: "onChange"});

  const onSubmit: SubmitHandler<IConfirmAccount> = data=>{
    console.log(data);
    reset();
  }

  return (
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

                  <CustomButton 
                      color="red"
                      handler={()=>{}}
                      active={isValid}
                      classname={styles.button}
                  > 
                    Confirm 
                  </CustomButton>
              </form>
          </div>
        </div>

      </AuthLayout>
  );
};