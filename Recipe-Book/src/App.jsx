import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import RecipeList from "./components/RecipeList.jsx";
import RecipeForm from "./components/RecipeForm.jsx";
import RecipeDetails from "./components/RecipeDetails.jsx";

import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Private Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <RecipeList />
            </PrivateRoute>
          }
        />

        <Route
          path="/add"
          element={
            <PrivateRoute>
              <RecipeForm />
            </PrivateRoute>
          }
        />

        <Route
          path="/recipe/:id"
          element={
            <PrivateRoute>
              <RecipeDetails />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
