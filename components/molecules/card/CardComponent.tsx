import React from 'react'
import pizza from '../../../public/Panos_pizza.png'
import styles from './CardComponent.module.scss';
import Image, { StaticImageData } from 'next/image'

interface Props {
    image: string | StaticImageData,
    alt: string
}

export const CardComponent = ({image, alt}: Props) => {
  return (
      <div className={styles['card-component']}>
          <Image
            src={image}
            alt={alt}
          />
      </div>
  )
}
