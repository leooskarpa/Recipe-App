import logo from './images/recipe.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <Link to="/">
                    <img className="logo-icon" src={logo} alt="Recipe Logo" />
                </Link>
            </div>
            <div className="title-container">
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Taste It</Link>
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