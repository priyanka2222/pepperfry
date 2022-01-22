import { GET_USER, SET_USER } from "./actionTypes"
export const getUser = (data)=>{
    return{
        type : GET_USER,
        payload : data
    }
}

export const setUser = (data)=>{
    return{
        type : SET_USER,
        payload : data
    }
}