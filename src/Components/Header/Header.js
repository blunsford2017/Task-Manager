import './Header.css';

import { Link } from 'react-router-dom';

function Header (props) {
    return(
        <header className="Header">
            <Link to='/'> 
                <h1>Task Manager</h1>
            </Link>
            <nav>
                <ul className="NavLinks">
                    <li>
                        <Link to='/logout' >Logout</Link>
                    </li>
                    <li>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                    <li>
                    <   Link to='/signup'>Signup</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

};

export default Header;