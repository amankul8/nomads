import { Layout } from '@/layout/layout/Layout';
import { Inter } from '@next/font/google';
import styles from "@/styles/home.module.css";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.home_wrapper}>
        <Layout>
            Home page 
        </Layout>
    </main>
  );
};
