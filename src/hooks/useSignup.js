import { useCallback, useState } from 'react';
import signupServices from '../services/signup';
import signupAdminServices from '../services/signupadmin';

export default function useSignup() {
    const [state, setState] = useState({ succeed: false, error: false, errormsj: '' })
    const signup = useCallback(({ rut, email, nombre, apellido, telefono, password1, password2 }) => {
        if (password1 === password2) {
        
        signupServices({ rut, email, nombre, apellido, telefono, password1 })
            .then(registeres => {
                if (registeres === "ok") {
                    setState({ succeed: true, error: false, errormsj: '' })

                } else {
                    let errores = []

                    console.log(registeres);
                    
                    if (registeres.length === 22 || registeres.length === 24 ) {
                        errores.push(registeres)
                        
                    } else {
                        for (let i = 0; i < registeres.length; i++) {
                            errores.push(registeres[i].message)

                        }
                    }
                    setState({ succeed: false, error: true, errormsj: errores })
                    console.log(errores)
                }

            })
            .catch(err => {

                console.log(err)

            })
        }else{
            let errores = []

            errores.push("No coinciden las contraseñas")

            setState({ succeed: false, error: true, errormsj: errores })
        }
    })

    const signupadmin = useCallback(({ email, nombre, apellido, password1, password2 }) => {
        if (password1 === password2) {
            console.log(password1)
        
        signupAdminServices({email, nombre, apellido, password1 })
            .then(registeres => {
                if (registeres === "ok") {
                    setState({ succeed: true, error: false, errormsj: '' })

                } else {
                    let errores = []

                    console.log(registeres);
                    
                    if (registeres.length === 22 || registeres.length === 24 ) {
                        errores.push(registeres)
                        
                    } else {
                        for (let i = 0; i < registeres.length; i++) {
                            errores.push(registeres[i].message)

                        }
                    }
                    setState({ succeed: false, error: true, errormsj: errores })
                    console.log(errores)
                }

            })
            .catch(err => {

                console.log(err)

            })
        }else{
            let errores = []

            errores.push("No coinciden las contraseñas")

            setState({ succeed: false, error: true, errormsj: errores })
        }
    })

    return {
        signup,
        signupadmin,
        hasSignError: state.error,
        succeedSign: state.succeed,
        errorMsj: state.errormsj

    }
}
