import type { NextPage, GetStaticProps } from 'next'
// import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/layout/Layout'
import { loginApi } from '../api'
import styles from '../styles/Home.module.scss'
import { LoginInterface } from '../interfaces'

const Home: NextPage = () => {
  return (
    <Layout>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await loginApi.get<LoginInterface>('/RH.json');

  console.log(data)

  return {
    props: {
      
    }
  }
}

export default Home
