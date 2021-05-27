import Recipe from "./Recipe";

const RecipesListComponent = ({ recipes, switchFav, deleteRecipe, editRecipe }) => {

    return (
        <div className="recipes-list-container">
            {recipes.map((recipe) =>
                < Recipe key={recipe.id}
                    recipe={recipe}
                    switchFav={switchFav}
                    deleteRecipe={deleteRecipe}
                    editRecipe={editRecipe} />
            )}
        </div>
    );
}

export default RecipesListComponent;