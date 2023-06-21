import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useTranslation } from 'react-i18next';
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ foo }) {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>{foo}</p>
          <p>{t('dummy_text')}</p>
        </div>
      </main>
    </>
  )
}

export function getServerSideProps() {
  return {
    props: {
      foo: 'bar',
    },
  }
}
