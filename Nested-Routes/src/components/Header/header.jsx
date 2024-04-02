import '../Header/Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h3>Nav</h3>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/posts">Posts</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header;