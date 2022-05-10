import { useFormik } from 'formik';
import React from 'react'
import * as yup from 'yup';
import { Button } from '../../atoms';
import { InputIcon } from '../../molecules';
import styles from './Form.module.scss';
import usuario from '../../../public/ic_usuario.png';
import password from '../../../public/ic_password.png';

export interface InitialObject {
    email: string;
    password: string;
}

interface Props {
    onLogin: (value: InitialObject) => void;
}

export const Form = ({onLogin}:Props) => {
    const {values, handleChange, handleSubmit, handleBlur, touched, errors} = useFormik<InitialObject>({
        initialValues: {
          email: '',
          password: ''
        },
        onSubmit: (values) => {
          onLogin(values);
        },
        validationSchema: yup.object({
          email: yup.string()
            .required('Campo requerido')
            .email('No es un correo electrónico válido'),
          password: yup.string()
            .required('Campo requerido')
        })
      });
    return (
        <form autoComplete='off' onSubmit={handleSubmit}>
            <InputIcon
                value={values.email}
                image={usuario}
                onChange={handleChange}
                placeholder='Usuario'
                className={styles.inputUser}
                name='email'
                onBlur={handleBlur}
                type='email'
            />
            {touched.email && errors.email && <div className={styles.errorsField}>{errors.email}</div>}
            <InputIcon
                value={values.password}
                image={password}
                onChange={handleChange}
                placeholder='Contraseña'
                type={'password'}
                name='password'
                onBlur={handleBlur}
                className={styles.inputPassword}
            />
            {touched.password && errors.password && <div className={styles.errorsField}>{errors.password}</div>}
            <h4 className={styles.forgotPassword}>¿Olvisdate tu contraseña?</h4>
            <div className={styles.buttonSubmit}>
                <Button >
                    {'Iniciar sesión'}
                </Button>
            </div>
        </form>
    )
}
