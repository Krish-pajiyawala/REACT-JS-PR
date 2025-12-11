// src/components/RecipeForm.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe, updateRecipe } from "../actions/recipeActions";
import { useNavigate, useParams } from "react-router-dom";

const RecipeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); // if present -> editing

  const { items, loading, error } = useSelector((state) => state.recipes);

  const editingRecipe = id ? items.find((r) => r.id === id) : null;

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");
  const [dietary, setDietary] = useState("");

  useEffect(() => {
    if (editingRecipe) {
      setTitle(editingRecipe.title || "");
      setIngredients(editingRecipe.ingredients || "");
      setInstructions(editingRecipe.instructions || "");
      setCategory(editingRecipe.category || "");
      setDietary(editingRecipe.dietary || "");
    }
  }, [editingRecipe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !ingredients.trim()) {
      alert("Title and ingredients are required");
      return;
    }

    const recipeData = {
      title: title.trim(),
      ingredients: ingredients.trim(),
      instructions: instructions.trim(),
      category: category.trim(),
      dietary: dietary.trim(),
    };

    if (id) {
      // update
      await dispatch(updateRecipe(id, recipeData));
    } else {
      // add
      await dispatch(addRecipe(recipeData));
    }

    navigate("/");
  };

  return (
    <div className="container">
      <h2 className="mb-3">
        {id ? "Edit Recipe" : "Add Recipe"}
      </h2>

      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title *</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Recipe title"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ingredients *</label>
          <textarea
            className="form-control"
            rows="3"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List of ingredients"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Instructions</label>
          <textarea
            className="form-control"
            rows="3"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="How to cook"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Breakfast / Lunch / Dinner ..."
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Dietary preference</label>
          <input
            className="form-control"
            value={dietary}
            onChange={(e) => setDietary(e.target.value)}
            placeholder="Veg, Vegan, Non-veg, Gluten-free..."
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
        >
          {id ? "Update" : "Add"} Recipe
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
