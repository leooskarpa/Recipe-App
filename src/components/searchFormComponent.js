import { useState } from 'react'
import favourite_icon from './images/favourite-empty.svg'

function SearchFormComponent({ searchRecipes }) {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        searchRecipes(e.target.value);
    }

    return (
        <div className="search-form-container">
            <div className="search-form-grid">
                <form className="search-form" onSubmit={handleSubmit}>
                    <input className='search-form-text' type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />

                    <input className='search-form-button' type="submit" value="Search" />
                </form>
                <div className="favourites-container">
                    <img className="favourite-icon" src={favourite_icon} alt="Favourites" />
                </div>
            </div>
        </div>
    );
}

export default SearchFormComponent;