// src/actions/recipeActions.js
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

// Fetch recipes for current user
export const fetchRecipes = () => async (dispatch, getState) => {
  dispatch({ type: "RECIPES_FETCH_START" });
  try {
    const state = getState();
    const user = state.auth.user;
    if (!user) {
      dispatch({ type: "RECIPES_FETCH_SUCCESS", payload: [] });
      return;
    }

    const recipesRef = collection(db, "recipes");
    const q = query(
      recipesRef,
      where("userId", "==", user.uid),
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);
    const recipes = snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));

    dispatch({ type: "RECIPES_FETCH_SUCCESS", payload: recipes });
  } catch (err) {
    dispatch({ type: "RECIPES_ERROR", payload: err.message });
  }
};

// Add recipe
export const addRecipe = (recipe) => async (dispatch, getState) => {
  dispatch({ type: "RECIPES_ACTION_START" });
  try {
    const state = getState();
    const user = state.auth.user;
    if (!user) throw new Error("Not authenticated");

    const recipesRef = collection(db, "recipes");
    const docRef = await addDoc(recipesRef, {
      ...recipe,
      userId: user.uid,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    // Local version (without Firestore Timestamp objects)
    const localRecipe = {
      id: docRef.id,
      ...recipe,
      userId: user.uid,
    };

    dispatch({ type: "RECIPES_ADD_SUCCESS", payload: localRecipe });
  } catch (err) {
    dispatch({ type: "RECIPES_ERROR", payload: err.message });
  }
};

// Update recipe
export const updateRecipe = (id, updates) => async (dispatch, getState) => {
  dispatch({ type: "RECIPES_ACTION_START" });
  try {
    const state = getState();
    const user = state.auth.user;
    if (!user) throw new Error("Not authenticated");

    const recipeRef = doc(db, "recipes", id);
    await updateDoc(recipeRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    });

    const updatedRecipe = {
      id,
      ...updates,
      userId: user.uid,
    };

    dispatch({ type: "RECIPES_UPDATE_SUCCESS", payload: updatedRecipe });
  } catch (err) {
    dispatch({ type: "RECIPES_ERROR", payload: err.message });
  }
};

// Delete recipe
export const deleteRecipe = (id) => async (dispatch, getState) => {
  dispatch({ type: "RECIPES_ACTION_START" });
  try {
    const state = getState();
    const user = state.auth.user;
    if (!user) throw new Error("Not authenticated");

    const recipeRef = doc(db, "recipes", id);
    await deleteDoc(recipeRef);

    dispatch({ type: "RECIPES_DELETE_SUCCESS", payload: id });
  } catch (err) {
    dispatch({ type: "RECIPES_ERROR", payload: err.message });
  }
};
