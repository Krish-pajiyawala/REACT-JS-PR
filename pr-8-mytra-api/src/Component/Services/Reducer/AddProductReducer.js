// AddProductReducer.js
const initialvalue = {
    products: [],
    product: null,
    iscreated: false,
    isLoding: false,
};

export const AddProductRedux = (state = initialvalue, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                iscreated: true,
                // add the created product from payload (server returns id)
                products: [...state.products, action.payload],
            };

        case "GET_PRODUCTS":
            return {
                ...state,
                iscreated: false,
                products: action.payload,
            };

        case "DELETE_PRODUCT":
            return {
                ...state,
                products: state.products.filter((p) => p.id !== action.payload),
            };

        case "EDIT_PRODUCT":
            // payload is the product object to edit
            return {
                ...state,
                product: action.payload,
            };

        case "UPDATE_PRODUCT":
            return {
                ...state,
                products: state.products.map((p) =>
                    p.id === action.payload.id ? action.payload : p
                ),
                product: null,
            };

        default:
            return state;
    }
};
