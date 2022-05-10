import React, { MouseEventHandler } from 'react'
import styles from './Button.module.scss'

interface Props {
    children: JSX.Element | JSX.Element[] | string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({children, onClick}: Props) => {
  return (
    <button
        onClick={onClick}
        className={styles['button-container']}
        type={'submit'}
    >
        {children}
    </button>
  )
}
