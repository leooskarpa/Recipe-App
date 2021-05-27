import logo from './images/recipe.svg'
import { Redirect } from 'react-router-dom'

const Header = ({ loged, logOut }) => {

    const logOutClick = () => {
        logOut();
    }

    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo-icon" src={logo} alt="Recipe Logo" />
            </div>
            <div className="title-container">
                Taste It
            </div>
            <div className="login-btn-container">
                {loged &&
                    <div className="login-link">
                        <div className="login-btn" onClick={logOutClick}>
                            Log Out
                        </div>
                    </div>}
            </div>
            {!loged && <Redirect to="/login" />}
        </div>
    );
}

export default Header;