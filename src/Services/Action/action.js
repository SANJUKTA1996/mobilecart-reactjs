import { ADD_TO_CART,REMOVE_TO_CART } from "../Constants"
export const addToCart=(data)=>{
   // console.warn("action",data)//action {price: 1000, name: 'I phone 11pro'}
    return{
        type:ADD_TO_CART,
        data:data
    }
}
export const removeToCart=(data)=>{
    console.warn("action")
    return{
        type:REMOVE_TO_CART,
        data:data
    }
}