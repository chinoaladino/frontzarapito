import { useCallback, useState } from 'react';
import addproductServices from '../services/addproduct';
export default function useAddProduct() {
    const [state, setState] = useState({ succeed: false, error: false, errormsj: '' })

    const addproduct = useCallback(({codigo, cat, nombre, precio, stock, foto }) => {
        addproductServices({ codigo, cat, nombre, precio, stock, foto  })
            .then(productres => {
                if (productres === "ok") {
                    setState({ succeed: true, error: false, errormsj: '' })

                } else {
                    let errores = []
                    console.log(productres.length)
                    if (productres.length > 1 && productres.length < 10) {
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