import React, { useState } from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { LoginInterface, Store } from '../../interfaces'
import { Layout } from '../../components/layout/Layout'
import { ListCards, Footer } from '../../components/organisms'
import { useLogin } from '../../hooks/useLogin'
import { loginApi } from '../../api'
import { InfoContent } from '../../components/organisms/infoContent/InfoContent'
import pizza from '../../public/Pizza.png'
import styles from '../../components/templates/List.module.scss'

interface Props {
    user: string,
    stores: Store[]
}

const Lists = ({user, stores}: Props) => {
    const {storesInStore} = useLogin(stores);
    const [storeSelected, setstoreSelected] = useState<Store>()
    const onCardClick = (id: number) => {
        const store = storesInStore.find(store => store.id === id);
        setstoreSelected(store);
    }
    return (
        <Layout>
            <div className={styles.listPage}>
                <div className={styles.imageBackgroundLogin}>
                    <Image
                        src={pizza}
                        alt='imagepizza'
                    />
                </div>
                <div className={styles.listContainer}>
                    {storesInStore.length !== undefined ?
                        <>
                            {storeSelected ? 
                            <InfoContent 
                                onSetStore={() => setstoreSelected(undefined)} 
                                store={storeSelected} 
                            />
                            :<ListCards 
                                storesInStore={storesInStore}
                                onCardClick={onCardClick}
                            />}
                            <Footer
                                onClickBrand={() => setstoreSelected(undefined)}
                            />
                        </>
                        :
                        <h1 className={styles.nosesion}>
                            {'Necesitas iniciar sesión'}
                            <br></br>
                            <Link href="/">
                                <a  className={styles.linklogin}>Login</a>
                            </Link>
                        </h1>
                    }
                </div>
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    if(Object.keys(ctx.query).length !== 0){
        const {email, password} = ctx.query as  {email: string, password: string}
        const { data } = await loginApi.get<LoginInterface>('/RH.json');
        const userExistObj = data.response.users.find(
            user =>  user.email === email && user.password === password);
        if(!userExistObj){
            return{
                redirect:{
                    permanent: false,
                    destination: '/'
                },
            }
        }
        return {
            props: {
                user: userExistObj.name,
                stores: data.response.stores
            }
        }
    }
    else{
        return{
            props:{}
        }
    }
}

export default Lists