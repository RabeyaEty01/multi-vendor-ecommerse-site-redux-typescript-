//action=>add to cart
//action type??
//add to cart => state modify
//return modified state

import { cartActionType } from "redux/actions/cartAction";
import { cartActionTypes } from "redux/types";

//dispatcher=>dispatch=>{type:"add_to_cart",payload:{}}

function cartReducer(state: IProduct[] = [], action: any) {
    switch (action.type) {
        case cartActionTypes.ADD_TO_CART:
            return [...state, action.payload]

        case cartActionTypes.REMOVE_FROM_CART:
            return state.filter((item) => item._id !== action.payload.id)
        case cartActionTypes.CLEAR_CART:
            return [];
        default:
            return state;
    }

}

export default cartReducer;