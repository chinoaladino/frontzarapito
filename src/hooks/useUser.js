import {useCallback, useContext, useState} from 'react';
import Context from '../context/UserContext';
import loginServices from '../services/login';
export default function useUser() {
    const {token, setTOKEN} = useContext(Context);
    const [state, setState] = useState({ loading: false, error: false})

    const login = useCallback(({email, password}) => {
        setState({loading: true, error: false})
        loginServices({email, password})
        .then( token => {
            window.sessionStorage.setItem('token', token)
            setState({loading: false, error: false})

            setTOKEN(token);
        })
        .catch(err => {
            window.sessionStorage.removeItem('token')
            setState({loading: false, error: true})
            console.error(err)
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
        logout
    }
}
