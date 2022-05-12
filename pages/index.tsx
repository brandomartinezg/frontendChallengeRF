import { useRef } from 'react';
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { Layout } from '../components/layout/Layout'
import bestPizza from '../public/Login-Best-Pizza.png';
import styles from '../components/templates/Login.module.scss';
import { Form, InitialObject } from '../components/organisms';
import pizza from '../public/Pizza.png';


const Home: NextPage = () => {
  const router = useRouter();
  const refRouter = useRef(false);
  const onLogin = ({email, password}:InitialObject ) => {
    router.replace({pathname:'list', query:{email, password}});
    refRouter.current = true;
  }
  return (
    <Layout title='Login  -  RobinFood'>
      <div className={styles.login}>
        <div className={styles.imageBackgroundLogin}>
          <Image
            src={pizza}
            alt='Imagepizza'
          />
        </div>
        <div className={styles.loginContainer}>
          <div className={styles.brandImage}>
            <Image
              src={bestPizza}
              alt='brand'
            />
          </div>
          <h1 className={styles.welcomeTitle} >Bienvenido</h1>
          <div className={styles.subtitle}>A las mejores pizzas del país</div>
          {refRouter.current ? <div>Credenciales erroneas</div>: <></>}
          <Form onLogin={onLogin}/>
        </div>
      </div>
    </Layout>
  )
}


export default Home
