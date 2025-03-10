/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import { api } from "../services/api";



export const AuthContext = createContext({})

function AuthProvider({children}) {
    
    const [data, setData] = useState({});
    
    async function signIn({email, password}) {
        try{
            const response = await api.post("/sessions", {email, password});
            
            const {token, user} = response.data;

            localStorage.setItem("@Geomundo:token", token);
            localStorage.setItem("@Geomundo:user", JSON.stringify(user));

            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({user, token});
        }
        catch(error){
            if(error.response) {
                alert(error.response.data.message);
            }
            else{
                alert("Não foi possível realizar o login");
            }
        }
    }

    return(
        <AuthContext.Provider value={{
            signIn,
            user:data.user}}>
            {children}
        </AuthContext.Provider>
    )
}