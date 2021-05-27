import logo from './images/recipe.svg'
import { Link } from 'react-router-dom'

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
                <Link className="login-link" to="/login">
                    <div className="login-btn">
                        Log Out
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;