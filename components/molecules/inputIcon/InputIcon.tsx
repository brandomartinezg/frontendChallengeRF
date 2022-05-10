import React from 'react'
import Image, { StaticImageData } from 'next/image';
import { Input, InputProps } from '../../atoms'
import styles from './InputIcon.module.scss';

interface Props extends InputProps {
    image: string | StaticImageData,
    className?: string; 
}

export const InputIcon = ({image, className, value, onChange,name, onBlur, placeholder, type }:Props) => {
  return (
    <div className={`${styles['input-icon-container']} ${className}`}>
        <Input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            onBlur={onBlur}
            type={type}
            classNameInput={styles['input-comp']}
        />
        <Image
            src={image}
            alt='user icon'
            width={30}
            height={30}
            layout="fixed"
            className={styles.icon}
        />
    </div>
  )
}
