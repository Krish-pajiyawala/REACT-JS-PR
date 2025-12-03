// addProductAction.js
import axios from "axios";

/* --- Sync action creators --- */
export const addproduct = (payload) => ({ type: "ADD_PRODUCT", payload });
export const getallproduct = (payload) => ({ type: "GET_PRODUCTS", payload });
export const deleteproduct = (payload) => ({ type: "DELETE_PRODUCT", payload });
export const editproduct = (payload) => ({ type: "EDIT_PRODUCT", payload });
export const updateProduct = (payload) => ({ type: "UPDATE_PRODUCT", payload });

/* --- Async thunks using JSON-server as single source-of-truth --- */
const API = "http://localhost:3000/products";

export const addproductAsync = (data) => async (dispatch) => {
    try {
        const res = await axios.post(API, data);
        dispatch(addproduct(res.data));
    } catch (error) {
        console.error("addproductAsync error:", error.message);
    }
};

export const getallproductAsync = () => async (dispatch) => {
    try {
        const res = await axios.get(API);
        dispatch(getallproduct(res.data));
    } catch (error) {
        console.error("getallproductAsync error:", error.message);
    }
};

export const deleteproductAsync = (id) => async (dispatch) => {
    try {
        await axios.delete(`${API}/${id}`);
        dispatch(deleteproduct(id));
    } catch (error) {
        console.error("deleteproductAsync error:", error.message);
    }
};

export const editproductAsync = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API}/${id}`);
        dispatch(editproduct(res.data));
    } catch (error) {
        console.error("editproductAsync error:", error.message);
    }
};

export const updateProductAsync = (data) => async (dispatch) => {
    try {
        const res = await axios.put(`${API}/${data.id}`, data);
        dispatch(updateProduct(res.data));
    } catch (error) {
        console.error("updateProductAsync error:", error.message);
    }
};

/* Backwards-compatible aliases if components use capitalized names */
export const Editproduct = editproduct;
export const EditproductAsync = editproductAsync;
