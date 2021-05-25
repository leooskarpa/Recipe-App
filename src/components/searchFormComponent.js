import { useState } from 'react'
import favouriteIconEmpty from './images/favourite-empty.svg'
import favouriteIconColored from './images/favourite-colored.svg'

function SearchFormComponent({ searchRecipes, showFavsClick }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [favs, setFavs] = useState(false);

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

    return (
        <div className="search-form-container">
            <div className="search-form-grid">
                <form className="search-form" onSubmit={handleSubmit}>
                    <input className='search-form-text' type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />

                    <input className='search-form-button' type="submit" value="Search" />
                </form>
                <div className="favourites-container">
                    <img className="favourite-icon" src={favs ? favouriteIconColored : favouriteIconEmpty} alt="Favourites" onClick={showFavs} />
                </div>
            </div>
        </div>
    );
}

export default SearchFormComponent;