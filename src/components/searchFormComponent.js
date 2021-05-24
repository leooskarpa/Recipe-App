import favourite_icon from './images/favourite-empty.svg'

function SearchFormComponent() {
    return (
        <div className="search-form-container">
            <div className="search-form-grid">
                <form className="search-form">
                    <input className='search-form-text' type="text" placeholder="Search" />

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