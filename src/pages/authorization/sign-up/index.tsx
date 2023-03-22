import { Inter } from '@next/font/google';
import styles from "@/styles/auth.module.css";
import { AuthLayout } from '@/layout/authLayout/AuthLayout';
import {Form, SIGNUP} from '@/components/auth/form/Form'

const inter = Inter({ subsets: ['latin'] })

export default function SignUp() {
  return (
    <main className={styles.home_wrapper}>
        <AuthLayout title='Sign up'>
            
          <div className={styles.form_wrapper}>
            <Form form={SIGNUP}/>
          </div>

        </AuthLayout>
    </main>
  );
};