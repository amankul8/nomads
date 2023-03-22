import { Inter } from '@next/font/google';
import styles from "@/styles/auth.module.css";
import { AuthLayout } from '@/layout/authLayout/AuthLayout';
import {Form, FORGOT_PASSWORD} from '@/components/auth/form/Form'

const inter = Inter({ subsets: ['latin'] })

export default function ForgotPassword() {
  return (
    <main className={styles.home_wrapper}>
        <AuthLayout title=''>
            
          <div className={styles.form_wrapper}>
            <Form form={FORGOT_PASSWORD}/>
          </div>

        </AuthLayout>
    </main>
  );
};