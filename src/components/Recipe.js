const Recipe = ({ recipe }) => {
    return (
        <div className="recipe">
            <div className="recipe-template">
                <div className="recipe-picture">
                    <img src={recipe.pictureUrl} alt={recipe.name} />
                </div>
                <div className="recipe-name-and-desc-container">
                    <div className="recipe-title">
                        {recipe.name}
                    </div>
                    <div className="recipe-desc">
                        {recipe.briefDesc}
                    </div>
                </div>
                <div className="recipe-diff-and-full-time-container">
                    <div className="recipe-diff">
                        Difficulty: {recipe.difficulty}
                    </div>
                    <div className="recipe-full-time">
                        Full-time: {recipe.prep + recipe.cook}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recipe;