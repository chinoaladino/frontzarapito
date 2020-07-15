import React, {useState} from 'react';

const Context = React.createContext({});

export function UserContextProviderAdmin ({children}) {
    const [token, setTOKEN] = useState( 
        () => window.sessionStorage.getItem('tokenadmin')
        )

    return <Context.Provider value={{
        token,
        setTOKEN
        }}>
       
        {children}
    </Context.Provider>
    
}

export default Context;