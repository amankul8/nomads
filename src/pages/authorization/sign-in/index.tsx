import { Inter } from '@next/font/google';
import styles from "@/styles/auth.module.css";
import { AuthLayout } from '@/layout/authLayout/AuthLayout';
import {Form, SIGNIN} from '@/components/auth/form/Form'


const inter = Inter({ subsets: ['latin'] })

export default function SignIn() {
  return (
    <main className={styles.signin_wrapper}>
        <AuthLayout title={"Sign in"} >  

          <div className={styles.form_wrapper}>
              <Form form={SIGNIN}/>
          </div>

        </AuthLayout>
    </main>
  );
};