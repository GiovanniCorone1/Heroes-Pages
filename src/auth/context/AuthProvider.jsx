import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const init = () => {
  const user=JSON.parse(localStorage.getItem('user'))
  return {
    logged :!!user ,
    user:user
    }
}
export const AuthProvider = ({children}) => {
  const [ authState , dispatch ]=useReducer(authReducer , {} , init)

  const login = ( name = '') => {
    const user = {id:'ABC',name : name}
    //action(objeto) que se manda con dispatch
    const action = {
      type : types.login ,
      payload:user
    };
    
    //guardamos en el localStorage el objeto user en forma de cadena
    localStorage.setItem('user',JSON.stringify(user))
    dispatch(action);
  }

  const logout = () => {
    localStorage.removeItem('user')
    const action = {
      type : types.logout
    }
    dispatch(action)
  }

  return (
    <AuthContext.Provider value = {{
      ...authState,
      login : login,
      logout :logout
    }}>
      {children} 
    </AuthContext.Provider>
  );
}
