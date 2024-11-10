import { types } from "../types/types";

//funcion "reducer" que define como cambia el estado en funcion de una accion recibida
export const authReducer = ( state = {} , action ) => {
  switch (action.type) {
    case types.login: 
      return {
        ...state, 
        logged : true, 
        user :action.payload 
      }
    case types.logout: 
      return {
        logged : false , 
      }

    default:
      return state;
  }
}