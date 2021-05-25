import Recipe from "./Recipe";

const RecipesListComponent = ({ recipes, switchFav }) => {

    return (
        <div className="recipes-list-container">
            {recipes.map((recipe) => (
                <Recipe key={recipe.id} recipe={recipe} switchFav={switchFav} />
            ))}
        </div>
    );
}

export default RecipesListComponent;