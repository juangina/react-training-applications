
import { Outlet, Link, useLocation } from 'react-router-dom';

export default function UpworkProject({loggedIn, setLoggedIn}) {
    const location = useLocation();

    return (
    <div className="upwork-project">
        <nav className = "upwork-project-nav" style={{paddingBottom: '1rem' }}>
            <div className="upwork-project-links">
                <Link to="/" state={{loggedIn: 'No'}}>
                    Home
                    </Link>
            </div>
            <div className="upwork-project-links">
                <Link to="/upwork/login" state={{loggedIn: 'No'}}>
                    Login
                </Link>
            </div>
            <div className="upwork-project-links">
                <Link to="/upwork/jobs">
                    Jobs
                </Link>
            </div>
        </nav>
        {location.state === null ? 
                <h2>Upwork Projects Page - Login to Continue</h2> : 
                    location.state.loggedIn === 'No' ? <h2>Upwork Projects Page - Login to Continue</h2> : ''}
        <Outlet/>
    </div>
  );
}