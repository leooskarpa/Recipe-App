import { useState } from 'react'
import ingredientIcon from './images/ingredient-icon.svg'

const EditIngredient = ({ ingredient, saveIngredient }) => {

    const [newName, setNewName] = useState(ingredient.name)
    const [newAmount, setNewAmount] = useState(ingredient.amount)
    const [newUnit, setNewUnit] = useState(ingredient.unit)

    return (
        <div className="edit-ingredient-template">
            <div className="ingredient-icon-holder">
                <img className="ingredient-icon" src={ingredientIcon} alt="Ingredient icon" />
            </div>
            <div className="edit-ingredient-container">
                <div className="edit-ingredient-name-holder">
                    <span>Name:</span>
                    <input type="text"
                        className="edit-text-input"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)} />
                </div>
                <div className="edit-ingredient-amount-holder">
                    <span>Amount:</span>
                    <input type="text"
                        className="edit-text-input little-input"
                        value={newAmount}
                        onChange={(e) => setNewAmount(e.target.value)} />
                </div>
                <div className="edit-ingredient-type-holder">
                    <span>Type:</span>
                    <input type="text"
                        className="edit-text-input little-input"
                        value={newUnit}
                        onChange={(e) => setNewUnit(e.target.value)} />
                </div>
                <div className="edit-ingredient-save-btn">
                    <div className="save-btn" onClick={() => saveIngredient(ingredient.id, newName, newAmount, newUnit)}>
                        Save
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditIngredient;