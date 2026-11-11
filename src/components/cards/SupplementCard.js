import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";

const SupplementCard = ({ supplement }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    return (
        <article className="item-card">
            <img src={supplement.image} alt={supplement.name} />
            <div className="item-card-content">
                <h3>{supplement.name}</h3>
                <small>{supplement.description}</small>
                <div className="price-heart-row">
                    <button className="price-btn">
                        ${supplement.price}
                    </button>
                    <button className="heart-button"
                    onClick={() => setIsFavorite(!isFavorite)}>
                        {isFavorite ? <FaHeart /> : <FaRegHeart />}
                    </button>
                </div>
            </div>
        </article>
    );
};

export default SupplementCard;