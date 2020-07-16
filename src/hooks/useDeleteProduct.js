import { useCallback, useState } from 'react';
import deleteproductServices from '../services/deleteproduct';

export default function useDeleteProduct() {
    const [state, setState] = useState({ succeed: false, error: false, errormsj: '' })

    const deleteproduct = useCallback(({ codigo }) => {
        deleteproductServices({ codigo })
            .then(productres => {
                if (productres === "ok") {
                    setState({ succeed: true, error: false, errormsj: '' })

                } else {
                    let errores = []
                    if (productres.length !== 41) {
                        for (let i = 0; i < productres.length; i++) {
                            errores.push(productres[i].message)

                        }
                    } else {
                        errores.push(productres)
                    }
                    console.log(productres)
                    setState({ succeed: false, error: true, errormsj: errores })

                }
            })
            .catch(err => {
                console.log(err)
            })
    })

    return {
        deleteproduct,
        hasDeleteError: state.error,
        succeedDelete: state.succeed,
        errorMsj: state.errormsj
    }
}