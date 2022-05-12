import React from 'react'
import styles from './CardComponent.module.scss';
import Image, { StaticImageData } from 'next/image'
import { Carousel } from 'react-responsive-carousel';

interface Props {
  images: string[] | StaticImageData[];
  alt: string;
  onCardClick: (id: number) =>  void;
  
}

export const CardComponent = ({images, alt, onCardClick}: Props) => {
  return (
      <div className={styles['card-component']}>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          onClickItem={onCardClick}
        >
          {
            images.map(image => (
              <div 
                key={JSON.stringify(image)}
              >
                <Image
                  src={image}
                  alt={alt}
                />
              </div>
            ))
          }
        </Carousel>
      </div>
  )
}
