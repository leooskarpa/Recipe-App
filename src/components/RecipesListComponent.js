import Recipe from "./Recipe";

const RecipesListComponent = ({ recipes, switchFav, deleteRecipe }) => {

    return (
        <div className="recipes-list-container">
            {recipes.map((recipe) => (
                <Recipe key={recipe.id} recipe={recipe} switchFav={switchFav} deleteRecipe={deleteRecipe} />
            ))}
        </div>
    );
}

export default RecipesListComponent;