import React, { ChangeEvent, FocusEventHandler, HTMLInputTypeAttribute } from 'react'
import styles from './Input.module.scss';

export interface InputProps{
    value: string;
    onChange: { 
        (e: ChangeEvent<any>): void; 
        <T_1 = string | ChangeEvent<any>>(field: T_1): 
        T_1 extends ChangeEvent<any> ? void : (e: string | ChangeEvent<any>) => void; };
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    name?: string;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    classNameInput?: string;
}

export const Input = ({value, onChange, type, placeholder, name, classNameInput, onBlur}: InputProps) => {
  return (
    <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        name={name}
        onBlur={onBlur}
        className={`${styles.input} ${classNameInput}`}
        autoComplete='off'
    />
  )
}
