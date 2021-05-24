const RecipesListComponent = ({ recipes }) => {

    return (
        <div className="recipes-container">
            {recipes.map((recipe) => (
                <h3 key="recipe.id">{recipe.name}</h3>
            ))}
        </div>
    );
}

export default RecipesListComponent;