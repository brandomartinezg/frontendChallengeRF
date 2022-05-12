import React from 'react'
import Image from 'next/image'
import facebook from '../../../public/facebook.jpg';
import instagram from '../../../public/instagram.png';
import bestPizza from '../../../public/bestpizza.png';
import styles from './Footer.module.scss';

interface Props {
    onClickBrand: () => void;
}

export const Footer = ({onClickBrand}:Props) => {
    return (
        <div className={styles.listFooter}>
            <div className={styles.socialMedia}>
                <Image 
                    src={facebook} 
                    alt='facebook' 
                    height={30}
                    width={30}
                    onClick={() =>  window && window.open('https://www.facebook.com/', "_blank")}
                />
                <Image
                    src={instagram}
                    alt='instagram'
                    height={30}
                    width={25}
                    onClick={() => window && window.open('https://www.instagram.com/', "_blank")}
                />
            </div>
            <div className={styles.bestPizza}>
                <Image
                    src={bestPizza}
                    alt='bestpizza'
                    height={30}
                    width={30}
                    onClick={() => onClickBrand()}
                />
            </div>
        </div>
    )
}
