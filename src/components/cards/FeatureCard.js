import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const FeatureCard = ({ feature }) => {
    return (
        <article
            className="feature-card"
            style={{ backgroundImage: `url(${feature.image})` }}
        >
            <div className="feature-overlay">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>

            </div>
        </article>
    );
};

export default FeatureCard;