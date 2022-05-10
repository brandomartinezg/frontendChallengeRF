import React, { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { loginApi } from '../../api'
import { LoginInterface, Store } from '../../interfaces'
import { useDispatch, useSelector } from 'react-redux'
import { setStores } from '../../redux/actions/storeActions'
import { useRouter } from 'next/router';
import { StoreInterface } from '../../redux/types/storeInterface';
import styles from '../../components/templates/List.module.scss';
import facebook from '../../public/iconsfacebook.svg';
import Image from 'next/image'
import pizzapanos from '../../public/Panos_pizza.png'
import sbarro from '../../public/SBarro.png';
import camion from '../../public/pizzeria_camion.png';
import voglia from '../../public/voglia_di_pizza.png';
import stroller from '../../public/stroller_pizza.png';
import { CardComponent } from '../../components/molecules'
import { Layout } from '../../components/layout/Layout'

interface Props {
    user: string,
    stores: Store[]
}

const Lists = ({user, stores}: Props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const storesInStore = useSelector<StoreInterface, Store[]>(state => state.storeReducer);
    console.log(storesInStore)
    useEffect(() => {
        if(stores)
        {
            dispatch(setStores(stores));
            router.replace('/list');
        }
    }, [stores, dispatch, router]);

    useEffect(() => {
        if(!stores && !storesInStore)
            router.replace('/')
    }, [stores, storesInStore, router])
    
    const getImage = (id: number) => {
        switch (id) {
            case 1:
                return pizzapanos;
            case 2:
                return sbarro;
            case 3:
                return camion;
            case 4:
                return voglia;
            case 5:
                return stroller;
            default:
                return sbarro;
        }
    }
    
    return (
        <Layout>
            <div className={styles.listContainer}>
                <div className={styles.listContent}>
                    <div className={styles.storeTitle}>Tiendas</div>
                    <div className={styles.storeSubtitle}>Escoge tu pizzeria favorita</div>
                    {storesInStore.length !== undefined ?
                        storesInStore.map(store => (
                            <div key={store.id} className={styles.pizzaCard}>
                                <CardComponent image={getImage(store.id)} alt='pizza' />
                                <div className={styles.name}>{store.name}</div>
                                <div className={styles.address}>{store.address}</div>
                            </div>
                        )) :
                        <div>{'Necesitas iniciar sesión'}</div>
                    }
                </div>
                <div className={styles.listFooter}>
                    <Image src={facebook} alt='facebook' />
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