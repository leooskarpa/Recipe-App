import { useState } from 'react'

import prepIcon from './images/prep_icon.svg'
import cookIcon from './images/cook_icon.svg'
import servingsIcon from './images/servings_icon.svg'

import EditIngredient from './EditIngredient'

const EditRecipe = ({ recipe, changeRecipe, cancelChanges }) => {

    const [title, setTitle] = useState(recipe.name)
    const [desc, setDesc] = useState(recipe.briefDesc)
    const [imageUrl, setImageUrl] = useState(recipe.pictureUrl)
    const [difficulty, setDifficulty] = useState(recipe.difficulty)
    const [prep, setPrep] = useState(recipe.prep)
    const [cook, setCook] = useState(recipe.cook)
    const [servings, setServings] = useState(recipe.servings)
    const [ingredients, setIngredients] = useState(recipe.ingredients)

    const saveChanges = () => {
        const newRecipe = {
            id: recipe.id,
            name: title,
            pictureUrl: imageUrl,
            favourite: recipe.favourite,
            prep: prep,
            cook: cook,
            servings: servings,
            difficulty: difficulty,
            briefDesc: desc,
            ingredients: ingredients,
            method: recipe.method
        };

        changeRecipe(recipe.id, newRecipe)
    }

    const saveIngredient = (id, newName, newAmount, newUnit) => {
        const newIngredient = {
            id: id,
            name: newName,
            amount: newAmount,
            type: newUnit
        }
        setIngredients(ingredients.map(ingredient =>
            ingredient.id === id ? newIngredient : ingredient))
    }

    const deleteIngredient = (id) => {
        setIngredients(ingredients.filter(ingredient => ingredient.id !== id));
    }

    const addIngredient = () => {
        const lastId = ingredients.length;

        const newIngredient = {
            id: lastId + 1,
            name: "",
            amount: "",
            type: ""
        };

        setIngredients([...ingredients, newIngredient]);
        console.log(ingredients.length)
    }

    return (
        <div className="edit-recipe-container">
            <form onSubmit={changeRecipe}>
                <div className="recipe">
                    <div className="edit-recipe-template">
                        <div className="left-edit-pane">
                            <span className="edit-header-title">Edit Page</span>
                            <div className="edit-title-holder">
                                <label htmlFor="title">Title:</label>
                                <input className="edit-text-input"
                                    name="title"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="edit-desc-holder">
                                <label htmlFor="desc">Brief description:</label>
                                <textarea className="edit-text-input"
                                    name="desc"
                                    rows="10"
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)} />
                            </div>
                            <div className="edit-image-holder">
                                <label htmlFor="image">Image URL:</label>
                                <input name="image"
                                    className="edit-text-input"
                                    type="text"
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)} />
                            </div>
                            <div className="edit-summary-holder">
                                <div className="edit-diff-holder">
                                    <label htmlFor="difficulty">Difficulty (1 - 5):</label>
                                    <input name="difficulty" className="edit-input-number" type="number"
                                        min="1"
                                        max="5"
                                        value={difficulty}
                                        onChange={(e) => setDifficulty(e.target.value)} />
                                </div>
                                <div className="edit-prep-time-holder">
                                    <label htmlFor="prep">
                                        <img className="edit-icon" src={prepIcon} alt="Prep icon" />
                                        <span>Prep time (in minutes):</span>
                                    </label>
                                    <input name="prep"
                                        className="edit-text-input"
                                        type="text"
                                        value={prep}
                                        onChange={(e) => setPrep(e.target.value)} />
                                </div>
                                <div className="edit-cook-time-holder">
                                    <label htmlFor="cook">
                                        <img className="edit-icon" src={cookIcon} alt="cook icon" />
                                        <span>Cook time (in minutes):</span>
                                    </label>
                                    <input name="cook"
                                        className="edit-text-input"
                                        type="text"
                                        value={cook}
                                        onChange={(e) => setCook(e.target.value)} />
                                </div>
                                <div className="edit-servings-holder">
                                    <label htmlFor="servings">
                                        <img className="edit-icon" src={servingsIcon} alt="Servings icon" />
                                        <span>Servings:</span>
                                    </label>
                                    <input name="servings"
                                        className="edit-text-input"
                                        type="text"
                                        value={servings}
                                        onChange={(e) => setServings(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="right-edit-pane">
                            <div className="edit-ingredients-holder">
                                <span>Ingredients:</span>
                                {ingredients.map(ingredient =>
                                    <EditIngredient
                                        key={ingredient.id}
                                        ingredient={ingredient}
                                        saveIngredient={saveIngredient}
                                        deleteIngredient={deleteIngredient}
                                    />
                                )}

                                <div className="edit-add-ingredient">
                                    <div className="add-ingredient-btn" onClick={addIngredient}>
                                        Add Ingredient
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="breakline-holder">
                        <div className="breakline"></div>
                    </div>
                    <div className="edit-footer">
                        <div className="edit-buttons-holder">
                            <div className="edit-btn-holder">
                                <div className="cancel-changes-btn" onClick={cancelChanges}>
                                    Cancel
                            </div>
                            </div>
                            <div className="edit-btn-holder">
                                <div className="save-changes-btn" onClick={saveChanges}>
                                    Save
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditRecipe;