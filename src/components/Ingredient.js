import ingredientIcon from './images/ingredient-icon.svg'

const Ingredient = ({ name, amount, unit }) => {
    return (
        <div className="ingredient-template">
            <div className="ingredient-icon-holder">
                <img className="ingredient-icon" src={ingredientIcon} alt="Ingredient icon" />
            </div>
            <div className="ingredient-amount-type-holder">
                {amount} {unit}
            </div>
            <div className="ingredient-name-holder">
                {name}
            </div>
        </div>
    );
}

export default Ingredient;