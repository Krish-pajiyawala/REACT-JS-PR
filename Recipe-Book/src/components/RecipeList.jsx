// src/components/RecipeList.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes, deleteRecipe } from "../actions/recipeActions";
import RecipeDetails from "./RecipeDetails";
import { useNavigate } from "react-router-dom";

const RecipeList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, loading, error } = useSelector((state) => state.recipes);

  const [sortOption, setSortOption] = useState("name"); // 'name' | 'date'
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this recipe?")) {
      dispatch(deleteRecipe(id));
    }
  };

  // Get unique categories for filter dropdown
  const categories = [...new Set(items.map((r) => r.category).filter(Boolean))];

  let visibleRecipes = [...items];

  // Filtering by category
  if (filterCategory) {
    visibleRecipes = visibleRecipes.filter(
      (r) => r.category === filterCategory
    );
  }

  // Sorting
  if (sortOption === "name") {
    visibleRecipes.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === "date") {
    visibleRecipes.sort((a, b) => {
      const aTime = a.createdAt?.seconds || 0;
      const bTime = b.createdAt?.seconds || 0;
      return bTime - aTime;
    });
  }

  return (
    <div className="container">
      <h2 className="mb-3">My Recipes</h2>

      <div className="d-flex flex-wrap gap-3 mb-3">
        <div>
          <label className="form-label me-2">Sort by:</label>
          <select
            className="form-select"
            style={{ width: "180px" }}
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="date">Date added</option>
          </select>
        </div>

        <div>
          <label className="form-label me-2">Filter category:</label>
          <select
            className="form-select"
            style={{ width: "180px" }}
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading && <p>Loading recipes...</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && visibleRecipes.length === 0 && <p>No recipes yet.</p>}

      {visibleRecipes.map((recipe) => (
        <RecipeDetails
          key={recipe.id}
          recipe={recipe}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default RecipeList;
