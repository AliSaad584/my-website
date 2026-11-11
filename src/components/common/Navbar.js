import { Link } from "react-router-dom";
import { FaDumbbell, FaUserCircle , FaShoppingCart } from "react-icons/fa";
import "../../styles/App.css";

const Navbar = () => {
    return (
        <nav className="nf-navbar">

            <Link to="/" className="nf-brand">
                <FaDumbbell />
                <span>NextFit</span>
            </Link>

            <div className="nf-nav-links">
                <Link to="/workouts">Workouts</Link>
                <Link to="/coaches">Coaches</Link>
                <Link to="/supplements">Supplements</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/favorites">Favorites</Link>
            </div>
            <div className="nav-icons">
                <Link to="/cart" className="nf-profile"><FaShoppingCart></FaShoppingCart></Link>

                <Link to="/login" className="nf-profile">
                   <FaUserCircle />
                </Link>
            </div>

        </nav>
    );
};

export default Navbar;