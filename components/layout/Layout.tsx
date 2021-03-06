import Head from 'next/head'
import React from 'react'
import styles from '../../styles/Home.module.scss';

interface Props {
    children: JSX.Element | JSX.Element[];
    title? : string;
}

export const Layout = ({children, title}: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title || 'RobinFood'}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
