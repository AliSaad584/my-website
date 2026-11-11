import { FaWhatsapp } from "react-icons/fa";
const CoachCard = ({ coach }) => {
    return (
        <article className="item-card">
            
            <img src={coach.image} alt={coach.name} />

            <div className="item-card-content">
                <h3>{coach.name}</h3>
                <span className="item-category">{coach.specialty}</span>
                <small>Experience: {coach.experience}</small>
                <button className="whatsapp-button">
                        <FaWhatsapp size={28} /><h2>{coach.phoneNumber}</h2>
                </button>
            </div>
        </article>
    );
};

export default CoachCard;