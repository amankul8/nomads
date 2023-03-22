import { Inter } from '@next/font/google';
import styles from "@/styles/auth.module.css";
import { AuthLayout } from '@/layout/authLayout/AuthLayout';
import {Form, RESET_PASSWORD} from '@/components/auth/form/Form'

const inter = Inter({ subsets: ['latin'] })

export default function ResetPassword() {
  return (
    <main className={styles.home_wrapper}>
        <AuthLayout title='Reset password'>
            
          <div className={styles.form_wrapper}>
            <Form form={RESET_PASSWORD}/>
          </div>

        </AuthLayout>
    </main>
  );
};