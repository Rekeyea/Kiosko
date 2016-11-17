import {createAction} from "redux-actions";
import * as ActionTypes from "./actionTypes";
import {articulos} from "./list";

export const RequestArticulos = createAction(ActionTypes.GET_ARTICULOS_REQUEST);
export const RequestArticulosSuccess = createAction(ActionTypes.GET_ARTICULOS_SUCCESS);
export const RequestArticulosFail = createAction(ActionTypes.GET_ARTICULOS_FAIL);
export const RequestArticulosAsync = () => dispatch => {
    dispatch(RequestArticulos());
    // **** change when having server
    dispatch(RequestArticulosSuccess(articulos));
};