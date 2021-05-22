import logo from './images/recipe.svg'

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img src={logo} alt="Recipe Logo" />
            </div>
            <div className="title-container">
                <h1>Taste It</h1>
            </div>
            <div className="login-btn-container">
                <div className="login-btn">
                    Log In
                </div>
            </div>
        </div>
    );
}

export default Header;