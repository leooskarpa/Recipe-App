import diffIcon from './images/difficulty_knife.svg'
import prepIcon from './images/prep_icon.svg'
import cookIcon from './images/cook_icon.svg'
import servingsIcon from './images/servings_icon.svg'

const Recipe = ({ recipe }) => {
    var difficulty = [];

    for (let i = 0; i < recipe.difficulty; i++) {
        difficulty.push(
            <div className="recipe-diff-icon" key={i + 1}>
                <img src={diffIcon} alt="Icon" />
            </div>)
    }

    return (
        <div className="recipe">
            <div className="recipe-template">
                <div className="recipe-picture">
                    <div className="recipe-picture-circle">
                        <img src={recipe.pictureUrl} alt={recipe.name} />
                    </div>
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
                        Difficulty:{difficulty}
                    </div>
                    <div className="recipe-full-time">
                        <div className="prep-time summary-list">
                            <img className="icon" src={prepIcon} alt="Prep icon" />
                            Prep time: {recipe.prep}
                        </div>
                        <div className="cook-time summary-list">
                            <img className="icon" src={cookIcon} alt="Cook icon" />
                            Cook time: {recipe.cook}
                        </div>
                        <div className="servings summary-list">
                            <img className="icon" src={servingsIcon} alt="Servings icon" />
                            Servings: {recipe.servings}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recipe;