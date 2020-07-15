import { useCallback, useState } from 'react';
import addcategoryServices from '../services/addcategory';

export default function useAddCategory() {
    const [state, setState] = useState({ succeed: false, error: false, errormsj: '' })

    const addcategory = useCallback(({ categoria }) => {
        addcategoryServices({ categoria })
            .then(categoryres => {
                if (categoryres === "ok") {
                    setState({ succeed: true, error: false, errormsj: '' })

                } else {
                    let errores = []
                    if (categoryres.length !== 55) {
                        for (let i = 0; i < categoryres.length; i++) {
                            errores.push(categoryres[i].message)

                        }
                    } else {
                        errores.push(categoryres)
                    }

                    setState({ succeed: false, error: true, errormsj: errores })

                }
            })
            .catch(err => {
                console.log(err)
            })
    })

    return {
        addcategory,
        hasAddError: state.error,
        succeedAdd: state.succeed,
        errorMsj: state.errormsj
    }
}