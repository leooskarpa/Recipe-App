import Recipe from "./Recipe";

const RecipesListComponent = ({ recipes, switchFav, recipeClick }) => {

    return (
        <div className="recipes-list-container">
            {recipes.map((recipe) => (
                <Recipe key={recipe.id} recipe={recipe} switchFav={switchFav} recipeClick={recipeClick} />
            ))}
        </div>
    );
}

export default RecipesListComponent;