import { useCallback, useState } from 'react';
import findproductServices from '../services/findproduct';

export default function useDeleteProduct() {
    const [state, setState] = useState({ succeed: false, error: false, errormsj: '', product:''})

    const findproduct = useCallback(({ codigo }) => {
        findproductServices({ codigo })
            .then(productres => {
                if (productres) {
                    setState({ succeed: true, error: false, errormsj: '', product: productres})

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
                    setState({ succeed: false, error: true, errormsj: errores, product: '' })

                }
            })
            .catch(err => {
                setState({ succeed: false, error: true, errormsj: err, product: '' })
                console.log(err)
            })
    })

    return {
        findproduct,
        hasFindError: state.error,
        succeedFind: state.succeed,
        errorFindMsj: state.errormsj,
        product: state.product
    }
}