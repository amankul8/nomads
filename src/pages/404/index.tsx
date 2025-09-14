import React from 'react';
import Link from 'next/link';
import styles from './404.module.css';
import cn from "classnames";
import { Headline, Paragraph } from '@/ui';
import { NextSeo } from 'next-seo';

export default function Custom404() {
  return (
    <>
      <NextSeo
        title="404 | Page not found"
        description="Learn more about our team and mission."
        canonical='http://localhost:3000/404'
        openGraph={{
          url: 'http://localhost:3000/404',
          title: '404 | Page not found',
          description: 'Learn more about our team and mission.',
        }}
      />

      <section className={styles.page_404}>
        <div className={cn('container', styles.content)}>
            <Headline color='black' type='main' classname={styles.title}>
                404
            </Headline>

            <div className={styles.contant_box_404}>
                <Headline color='black' type='normal'>
                    Look like you're lost
                </Headline>
                <Paragraph>The page you are looking for is not available!</Paragraph>
                <Link href="/" className={styles.link_404}>
                    Go to Home
                </Link>
            </div>
        </div>
      </section>
    </>
  );
}
