import { Inter } from '@next/font/google';
import styles from "@/styles/auth.module.css";
import { AuthLayout } from '@/layout/authLayout/AuthLayout';
import {Form, CONFIRM_ACCOUNT} from '@/components/auth/form/Form'

const inter = Inter({ subsets: ['latin'] })

export default function ConfirmAccount() {
  return (
    <main className={styles.home_wrapper}>
        <AuthLayout title='Confirm account'>
            
          <div className={styles.form_wrapper}>
            <Form form={CONFIRM_ACCOUNT}/>
          </div>

        </AuthLayout>
    </main>
  );
};