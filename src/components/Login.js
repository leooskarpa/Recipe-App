import { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Login = ({ isLoged }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const login = (e) => {
        e.preventDefault();

        if (username === 'admin' && password === 'admin') {
            isLoged();
            setRedirect(true);
        } else {
            console.log("login failed")
        }

        setPassword("");
        setUsername("");
    }

    return (
        <div className="login-page-container">
            <div className="login-container">
                <div className="login-text-holder">
                    <div className="title-header-holder">
                        Welcome to Taste It!
                    </div>
                    <div className="intro-holder">
                        We hope you are ready to cook some food!<br />
                        (p.s. just type in admin : admin) :)
                    </div>
                </div>

                <div className="login-form-container">
                    <form onSubmit={login}>
                        <div className="form-login-holder">
                            <div className="form-text-holder">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="form-text-holder">
                                <input
                                    type="text"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-login-btn-holder">
                            <button type="submit" className="form-login-btn">
                                Login
                            </button>
                        </div>
                    </form>
                </div>

            </div>
            {redirect && <Redirect to="/home" />}
        </div>
    );
}

export default Login;