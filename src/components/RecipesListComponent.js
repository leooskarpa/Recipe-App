import Recipe from "./Recipe";

const RecipesListComponent = ({ recipes }) => {

    return (
        <div className="recipes-list-container">
            {recipes.map((recipe) => (
                <Recipe key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
}

export default RecipesListComponent;