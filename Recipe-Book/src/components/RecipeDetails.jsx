
import { useSelector } from "react-redux";

const RecipeDetails = ({ recipe, onEdit, onDelete }) => {
  const user = useSelector((state) => state.auth.user);
  const isOwner = user && recipe.userId === user.uid;

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        {recipe.category && (
          <h6 className="card-subtitle mb-2 text-muted">
            Category: {recipe.category}
          </h6>
        )}
        {recipe.dietary && (
          <p className="card-text">
            Dietary: {recipe.dietary}
          </p>
        )}

        <p className="card-text">
          <strong>Ingredients:</strong>
          <br />
          {recipe.ingredients}
        </p>

        {recipe.instructions && (
          <p className="card-text">
            <strong>Instructions:</strong>
            <br />
            {recipe.instructions}
          </p>
        )}

        {isOwner && (
          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-primary"
              onClick={() => onEdit(recipe.id)}
            >
              Edit
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => onDelete(recipe.id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
