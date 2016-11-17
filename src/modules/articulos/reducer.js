import {LIST} from "./constants";
import {GET_ARTICULOS_SUCCESS} from "./actionTypes";
const initialState = {
    [LIST]:[]
}

export const reducer = (state = initialState,action) => {
    switch(action.type){
        case GET_ARTICULOS_SUCCESS:
            return Object.assign({},state,{[LIST]:action.payload});
        default:
            return state;       
    }
}