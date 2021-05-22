function SearchFormComponent() {
    return (
        <div className="search-form-container">
            <form className="search-form">
                <input className='search-form-text' type="text" placeholder="Search" />

                <input className='search-form-button' type="submit" value="Search" />
            </form>
        </div>
    );
}

export default SearchFormComponent;