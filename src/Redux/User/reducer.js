import { GET_USER, SET_USER } from "./actionTypes"

export const userReducer = (state = {}, {type, payload})=>{
    switch(type){
        case SET_USER:
            return{
                ...state, 
                user : payload
            }
            case GET_USER:
                return{
                    ...state,
                    user : payload
                }
            default:
                return state;
    }
}