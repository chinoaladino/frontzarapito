import { useCallback, useState } from 'react';
import recoverypassServices from '../services/recoverypass';
export default function useRecoveryPass() {
    const [state, setState] = useState({ succeed: false, error: false, errormsj: '' })

    const recoveryPass = useCallback(({ email }) => {
        recoverypassServices({ email })
            .then(recoveryres => {
                if (recoveryres === "ok") {
                    setState({ succeed: true, error: false, errormsj: '' })

                } else {
                    let errores = []
                  
                        errores.push(recoveryres)
                    

                    setState({ succeed: false, error: true, errormsj: errores })

                }
            })
            .catch(err => {

                console.log(err)
            })
    })

    return {
        recoveryPass,
        hasRecoveryError: state.error,
        succeedRecovery: state.succeed,
        errorMsj: state.errormsj
    }
}