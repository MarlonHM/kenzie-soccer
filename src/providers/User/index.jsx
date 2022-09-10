import { createContext, useState } from "react";
import api from '../../service';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    
    const [token, setToken] = useState(localStorage.getItem('@Kenzie-soccer: token')||'');
    const login = (data) => {
        api.post('/login', data).then(res => {
                                        setToken(res.data.accessToken)
                                        localStorage.setItem('@Kenzie-soccer: token', res.data.accessToken)
                                        
                                    })
                                .catch(err => console.log(err));
    }

    return (
        <UserContext.Provider value={{login}}> {children} </UserContext.Provider>
    )
}