const Login = () => {
    return (
        <div className="login-page-container">
            <div className="login-container">
                <div className="login-text-holder">
                    <div className="title-header-holder">
                        Welcome to Taste It!
                    </div>
                    <div className="intro-holder">
                        We hope you are ready to cook some food! (p.s. just type in admin admin)
                    </div>
                </div>

                <form className="form-login-holder">
                    <div className="form-username-holder">
                        <input
                            type="text"
                            placeholder="Username" />
                    </div>
                    <div className="form-password-holder">
                        <input
                            type="text"
                            placeholder="Password" />
                    </div>
                </form>
                <div className="fomr-login-btn-holder">
                    <div className="form-login-btn">
                        Login
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;