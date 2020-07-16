import {useCallback, useContext, useState} from 'react';
import Context from '../context/UserContextAdmin';
import loginAdminServices from '../services/loginadmin';

export default function useUser() {
    const {token, setTOKEN} = useContext(Context);
    const [state, setState] = useState({ loading: false, error: false})

    const loginAdmin = useCallback(({email, password}) => {
        setState({loading: true, error: false})
        loginAdminServices({email, password})
        .then( token => {
            if (token != null){
                localStorage.setItem('email', email);
                window.sessionStorage.setItem('tokenadmin', token)
                setState({loading: false, error: false})
                setTOKEN(token);

            }else{
                localStorage.removeItem('email');
                window.sessionStorage.removeItem('tokenadmin')
                setState({loading: false, error: true})
            }
           
            
        })
        .catch(err => {
            console.log(err)
            localStorage.removeItem('email');
            window.sessionStorage.removeItem('tokenadmin')
            setState({loading: false, error: true})
            
        })
    }, [setTOKEN])

    const logoutAdmin = useCallback(() =>{
        localStorage.removeItem('email');
        window.sessionStorage.removeItem('tokenadmin')
        localStorage.clear()
        window.sessionStorage.clear()
        setTOKEN(null)
    }, [setTOKEN])


    return {
        isLoggedAdmin: Boolean(token),
        isLoginLoading: state.loading,
        hasLoginError: state.error, 
        loginAdmin,
        logoutAdmin
    }
}
