import logo from './images/recipe.svg'

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo-icon" src={logo} alt="Recipe Logo" />
            </div>
            <div className="title-container">
                Taste It
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