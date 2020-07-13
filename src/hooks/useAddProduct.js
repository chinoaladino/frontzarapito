import { useCallback, useState } from 'react';
import addproductServices from '../services/addproduct';
export default function useAddProduct() {
    const [state, setState] = useState({ succeed: false, error: false, errormsj: '' })

    const addproduct = useCallback(({ nombre, codigo, stock, foto }) => {
        addproductServices({ nombre, codigo, stock, foto })
            .then(productres => {
                if (productres === "ok") {
                    setState({ succeed: true, error: false, errormsj: '' })


                } else {
                    let errores = []
                    if (productres.length !== 55) {
                        for (let i = 0; i < productres.length; i++) {
                            errores.push(productres[i].message)

                        }
                    } else {
                        errores.push(productres)
                    }

                    setState({ succeed: false, error: true, errormsj: errores })

                }
            })
            .catch(err => {

                console.log(err)
            })
    })

    return {
        addproduct,
        hasAddError: state.error,
        succeedAdd: state.succeed,
        errorMsj: state.errormsj
    }
}