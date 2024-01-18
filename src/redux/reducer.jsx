import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./Type";

export const cartData = (data = [], action) => {

    switch (action.type) {
        case ADD_TO_CART:
            console.log("addcart condition", action);
            return [action.data, ...data]

        case REMOVE_FROM_CART:
            console.log("remove condition", action);
            // data.length = data.length ? data.length - 1 : [];
            const remainingItem = data.filter((item) => item.id !== action.data);
            return [...remainingItem]

        case EMPTY_CART:
            console.warn("empty Cart condition", action);
            data = []
            return [...data]

        default:
            return data
    }
}