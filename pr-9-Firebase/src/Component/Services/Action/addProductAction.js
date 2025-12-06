import { db } from "../../../../firebase.config";
import { 
  collection, 
  deleteDoc, 
  doc, 
  getDocs, 
  setDoc, 
  getDoc,
  updateDoc 
} from "firebase/firestore";

/* Sync actions */
export const addproduct = () => ({ type: "ADD_PRODUCT" });
export const getallproduct = (payload) => ({ type: "GET_PRODUCTS", payload });
export const deleteproduct = (payload) => ({ type: "DELETE_PRODUCT", payload });
export const editproduct = (payload) => ({ type: "EDIT_PRODUCT", payload });
export const updateProduct = (payload) => ({ type: "UPDATE_PRODUCT", payload });

/* Add product */
export const addproductAsync = (data) => {
  return async (dispatch) => {
    try {
      await setDoc(doc(db, "products", data.id), data);
      dispatch(addproduct());
    } catch (error) {
      console.error("addproductAsync error:", error.message);
    }
  };
};

/* Get all products */
export const getallproductAsync = () => {
  return async (dispatch) => {
    try {
      let records = [];
      const res = await getDocs(collection(db, "products"));

      res.forEach((rec) => {
        records.push({
          ...rec.data(),
          id: rec.id
        });
      });

      dispatch(getallproduct(records));
    } catch (error) {
      console.error("getallproductAsync error:", error.message);
    }
  };
};

/* Delete product */
export const deleteproductAsync = (id) => {
  return async (dispatch) => {
    try {
      await deleteDoc(doc(db, "products", id));
      dispatch(getallproductAsync());
    } catch (error) {
      console.error("deleteproductAsync error:", error.message);
    }
  };
};

/* Fetch single product for editing */
export const editproductAsync = (id) => {
  return async (dispatch) => {
    try {
      const ref = doc(db, "products", id);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        dispatch(editproduct({ ...snap.data(), id }));
      }
    } catch (error) {
      console.error("editproductAsync error:", error.message);
    }
  };
};

/* Update product */
export const updateProductAsync = (data) => {
  return async (dispatch) => {
    try {
      const ref = doc(db, "products", data.id);
      await updateDoc(ref, data);
      dispatch(updateProduct(data));
    } catch (error) {
      console.error("updateProductAsync error:", error.message);
    }
  };
};
