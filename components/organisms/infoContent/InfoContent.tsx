import Image from 'next/image';
import React from 'react'
import { Store } from '../../../interfaces'
import { Button } from '../../atoms';
import styles from './InfoContent.module.scss';

interface Props {
    store: Store;
    onSetStore: () => void;
}

export const InfoContent = ({store, onSetStore}:Props) => {
  return (
    <div className={styles.infoContent}>
        <h2>{store.name}</h2>
        <div className={styles.address}>Direccion: {store.address}</div>
        <div className={styles.description}>{store.description}</div>
        <div className={styles.presentation}>{'Nuestros productos'}</div>
        <ul className={styles.ourProduct}>
            {
                store.products.map(product => (
                    <li key={product.id}>
                        <h5>{product.name}</h5>
                    </li>
                ))
            }
        </ul>
        <div className={styles.buttonBack}>
            <Button onClick={onSetStore} >{'Regresar'}</Button>
        </div>
    </div>
  )
}
