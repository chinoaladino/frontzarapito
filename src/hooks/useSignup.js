import { useCallback, useState } from 'react';
import signupServices from '../services/signup';
export default function useSignup() {
    const [state, setState] = useState({ succeed: false, error: false, errormsj: '' })
    const signup = useCallback(({ rut, email, nombre, apellido, telefono, password }) => {
        signupServices({ rut, email, nombre, apellido, telefono, password })
            .then(registeres => {
                if (registeres === "ok") {
                    setState({ succeed: true, error: false, errormsj: '' })

                } else {
                    let errores = []
                    for (let i = 0; i < registeres.length; i++) {
                        errores.push(registeres[i].message)
                    }
                    setState({ succeed: false, error: true, errormsj: errores })

                }

            })
            .catch(err => {

                console.log(err)

            })
    })

    return {
        signup,
        hasSignError: state.error,
        succeedSign: state.succeed,
        errorMsj: state.errormsj

    }
}
