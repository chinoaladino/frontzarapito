import {useCallback, useContext, useState} from 'react';
import Context from '../context/UserContext';
import loginServices from '../services/login';
import loginAdminServices from '../services/login';

export default function useUser() {
    const {token, setTOKEN} = useContext(Context);
    const [state, setState] = useState({ loading: false, error: false})

    const login = useCallback(({email, password}) => {
        setState({loading: true, error: false})
        loginServices({email, password})
        .then( token => {
            if (token != null){
                window.sessionStorage.setItem('token', token)
                setState({loading: false, error: false})
                setTOKEN(token);
            }else{
                window.sessionStorage.removeItem('token')
                setState({loading: false, error: true})
            }
           
            
        })
        .catch(err => {
            window.sessionStorage.removeItem('token')
            setState({loading: false, error: true})
            
        })
    }, [setTOKEN])


    const loginAdmin = useCallback(({email, password}) => {
        setState({loading: true, error: false})
        loginAdminServices({email, password})
        .then( token => {
            if (token != null){
                window.sessionStorage.setItem('token', token)
                setState({loading: false, error: false})
                setTOKEN(token);
            }else{
                window.sessionStorage.removeItem('token')
                setState({loading: false, error: true})
            }
           
            
        })
        .catch(err => {
            window.sessionStorage.removeItem('token')
            setState({loading: false, error: true})
            
        })
    }, [setTOKEN])

    const logout = useCallback(() =>{
        window.sessionStorage.removeItem('token')
        setTOKEN(null)
    }, [setTOKEN])

    return {
        isLogged: Boolean(token),
        isLoginLoading: state.loading,
        hasLoginError: state.error, 
        login,
        loginAdmin,
        logout
    }
}
