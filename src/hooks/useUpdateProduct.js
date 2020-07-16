import {useCallback, useState} from 'react';
import updateproductServices from '../services/updateproduct';
export default function useUpdateProduct() {
    const [state, setState] = useState({ succeed: false, error: false, errormsj: ''})

    const updateproduct = useCallback(({codigo, cat, nombre, precio, stock, foto }) => {
        updateproductServices({codigo, cat, nombre, precio, stock, foto })
        .then( productres => {
            if (productres === "ok"){
                setState({succeed: true, error: false, errormsj: ''})

            }else{
                let errores = []
                if (productres.length !== 55) {
                    for (let i = 0; i < productres.length; i++) {
                        errores.push(productres[i].message)
    
                    }
                }else{
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
        updateproduct,
        hasUpdateError: state.error,
        succeedUpdate: state.succeed,
        errorUpdateMsj: state.errormsj
    }
}