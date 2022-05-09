//add
//remove
//clear

import { type } from "os"
import { cartActionTypes } from "redux/types"

// { type: "add_to_cart", payload: [] }

const add_to_cart = (payload: IProduct) => {
    return {
        type: "add_to_cart",
        payload: payload
    }
}

const remove_from_cart = (id: string) => {
    return {
        type: "remove_from_cart",
        payload: id
    }
}

const clear_cart = () => {
    return {
        type: "clear_cart",

    }
}

type x = ReturnType<typeof add_to_cart>;
type y = ReturnType<typeof remove_from_cart>;
type z = ReturnType<typeof clear_cart>;

export type cartActionType = x | y | z