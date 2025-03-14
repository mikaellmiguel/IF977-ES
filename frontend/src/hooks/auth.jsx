/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

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
                toast.error(error.response.data.message);
            }
            else{
                toast.error("Erro ao realizar login, tente novamente mais tarde");
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@Geomundo:token");
        localStorage.removeItem("@Geomundo:user");
        setData({});
    }

    useEffect(() => {
        const token = localStorage.getItem('@Geomundo:token')
        const user = JSON.parse(localStorage.getItem('@Geomundo:user'))
        
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        setData({ token, user })
    }, [])     

    return(
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user:data.user}}>
            {children}
        </AuthContext.Provider>
    )

}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}


export {AuthProvider, useAuth}