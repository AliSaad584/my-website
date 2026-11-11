import { Link } from "react-router-dom";
import {
    FaInstagram,
    FaFacebook,
    FaTiktok
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="nf-footer">

            <div className="footer-content">

                <div>
                    <h2>NextFit</h2>
                    <p>IT'S THE NEXTFIT GENERATION.</p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <Link to="/">Home</Link>
                    <Link to="/workouts">Workouts</Link>
                    <Link to="/coaches">Coaches</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <a href="https://www.instagram.com/" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com/" aria-label="Facebook">
                        <FaFacebook />
                    </a>
                    <a href="https://www.tiktok.com/" aria-label="TikTok">
                        <FaTiktok />
                    </a>
                </div>

            </div>

            <div className="footer-bottom">
                © 2026 NextFit. All Rights Reserved.
            </div>

        </footer>
    );
};

export default Footer;