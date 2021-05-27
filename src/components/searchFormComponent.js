import { useState } from 'react'
import favouriteIconEmpty from './images/favourite-empty.svg'
import favouriteIconColored from './images/favourite-colored.svg'

function SearchFormComponent({ searchRecipes, showFavsClick, addNewRecipeFunc, cancelNewRecipeFunc }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [favs, setFavs] = useState(false);
    const [addNew, setAddNew] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("rgb(5, 203, 5)")

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        searchRecipes(e.target.value);
    }

    const showFavs = () => {
        showFavsClick();
        setFavs(!favs);
    }

    const addNewRecipe = () => {
        addNewRecipeFunc();
        setAddNew(true);
        setBackgroundColor("rgba(230, 55, 70, 0.95)");
    }

    const cancelNewRecipe = () => {
        cancelNewRecipeFunc();
        setAddNew(false);
        setBackgroundColor("rgb(5, 203, 5)")
    }

    return (
        <div className="search-form-container">
            <div className="search-form-grid">
                <form className="search-form" onSubmit={handleSubmit}>
                    <input className='search-form-text' type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />

                    <div className='add-form-button' style={{ backgroundColor: backgroundColor }} onClick={addNew ? cancelNewRecipe : addNewRecipe}>
                        {addNew ? "Cancel" : "Add New"}
                    </div>
                </form>
                <div className="favourites-container">
                    <img className="favourite-icon" src={favs ? favouriteIconColored : favouriteIconEmpty} alt="Favourites" onClick={showFavs} />
                </div>
            </div>
        </div>
    );
}

export default SearchFormComponent;