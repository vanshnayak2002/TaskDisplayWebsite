import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';
// import { GoogleOAuthProvider, GoogleLogin } from 'react-oauth/google';
//import GitHubLogin from 'react-github-login';
import './CSSLoginComponent.css';
import { Navbar } from 'react-bootstrap'; // Remove this if you're not using react-bootstrap

export function LoginComponent() {
    const [username, setUsername] = useState('Vansh Nayak');
    const [password, setPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const navigate = useNavigate();
    const authContext = useAuth();

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    async function handleSubmit() {
        if (await authContext.login(username, password)) {
            navigate(`/welcome/${username}`);
        } else {
            setShowErrorMessage(true);
        }
    }

    function handleGitHubSuccess(response) {
        console.log('GitHub Login Success:', response);
    }

    function handleGitHubFailure(error) {
        console.error('GitHub Login Failed:', error);
        setShowErrorMessage(true);
    }

    useEffect(() => {
        function handleScroll() {
            const offset = window.scrollY * 0.5; // Adjust the parallax effect here
            document.querySelector('.Login').style.backgroundPositionY = `${offset}px`;
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="Login">
            {/* <Navbar /> */}
            <h1>Time to Login!</h1>

            {showErrorMessage && <div className="errorMessage">Authentication Failed. Please check your credentials.</div>}
            <div className="LoginForm">
                <div className="form-group">
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder=" "
                    />
                    <label>User Name:</label>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder=" "
                    />
                    <label>Password:</label>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
                <div>
                    <h3>Or login using</h3>
                    <div className="oauth-buttons">
                        {/* <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
                            <GoogleLogin
                                onSuccess={handleGoogleSuccess}
                                onFailure={handleGoogleFailure}
                                cookiePolicy={'single_host_origin'}
                            />
                        </GoogleOAuthProvider> */}
                        {/* <GitHubLogin
                            clientId="YOUR_GITHUB_CLIENT_ID"
                            onSuccess={handleGitHubSuccess}
                            onFailure={handleGitHubFailure}
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;
