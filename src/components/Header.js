import logo from './images/recipe.svg'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

const Header = () => {
    return (
        <Router>
            <div className="header-container">
                <div className="logo-container">
                    <Link to="/">
                        <img className="logo-icon" src={logo} alt="Recipe Logo" />
                    </Link>
                </div>
                <div className="title-container">
                    <Link to="/" className="link">Taste It</Link>
                </div>
                <div className="login-btn-container">
                    <div className="login-btn">
                        Log In
                </div>
                </div>
            </div>
        </Router>
    );
}

export default Header;