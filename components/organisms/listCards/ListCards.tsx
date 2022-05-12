import React, { ChangeEvent, useState } from 'react'
import { Input } from '../../atoms';
import { CardComponent } from '../../molecules';
import { Store } from '../../../interfaces';
import pizzapanos from '../../../public/Panos_pizza.png';
import pizzapanos1 from '../../../public/panos_pizza_1.png';
import sbarro from '../../../public/SBarro.png';
import sbarro1 from '../../../public/sbarro_pizza.png';
import camion from '../../../public/pizzeria_camion.png';
import camion1 from '../../../public/pizzeria_camion_pizza.png';
import voglia from '../../../public/voglia_di_pizza.png';
import voglia1 from '../../../public/vogliadipizza_pizza.png';
import stroller from '../../../public/stroller_pizza.png';
import stroller1 from '../../../public/stroller_pizza_1.png';
import styles from './ListCards.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
    storesInStore: Store[],
    onCardClick: (id: number) => void;
}

export const ListCards = ({storesInStore, onCardClick}:Props) => {
    const [filtered, setfiltered] = useState('');
    const getImage = (id: number) => {
        switch (id) {
            case 1:
                return [pizzapanos, pizzapanos1];
            case 2:
                return [sbarro, sbarro1];
            case 3:
                return [camion, camion1];
            case 4:
                return [voglia, voglia1];
            case 5:
                return [stroller, stroller1];
            default:
                return [sbarro, sbarro1];
        }
    }
    const onHandleCardClick = (id: number) => {
        onCardClick(id);
    }
    return (
        <div className={styles.listContent}>
            <div className={styles.storeTitle}>Tiendas</div>
            <div className={styles.storeSubtitle}>Escoge tu pizzeria favorita</div>
            <Input 
                value={filtered} 
                placeholder='Buscar' 
                onChange={(value:ChangeEvent<HTMLInputElement>) => setfiltered(value.target.value)}
                classNameInput={styles.inputSearch}
            />
            {storesInStore.filter(store =>  store.name.toLowerCase().includes(filtered.toLowerCase())).map(store => (
                <div key={store.id} className={styles.pizzaCard}>
                    <CardComponent 
                        images={getImage(store.id)} 
                        alt='pizza' 
                        onCardClick={() => onHandleCardClick(store.id)}
                    />
                    <div className={styles.name}>{store.name}</div>
                    <div className={styles.address}>{store.address}</div>
                </div>
            ))} 
        </div>
    )
}
