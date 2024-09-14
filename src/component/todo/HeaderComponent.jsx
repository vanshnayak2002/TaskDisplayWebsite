import { Link } from 'react-router-dom';
import { useAuth } from './security/AuthContext';
import './CSSHeaderComponent.css'; // Ensure this CSS file is created and properly named

export function HeaderComponent() {
    const authContext = useAuth();
    const isAuthenticated = authContext.isAuthenticated;

    function logout() {
        authContext.logout();
    }

    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="https://www.ksolves.com/">Riwaaz</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            {isAuthenticated && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/welcome/in28minutes">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/todos">Events</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {!isAuthenticated ? (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default HeaderComponent;
