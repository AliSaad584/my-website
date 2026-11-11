import { Link } from "react-router-dom";
const WorkoutCard = ({ workout }) => {
    return (
        <article className="item-card">
            <img src={workout.image} alt={workout.name} />
            <div className="item-card-content">
                <span className="item-category">{workout.category}</span>
                <h3>{workout.name}</h3>
                <p>{workout.description}</p>
            </div>
        </article>
    );
};

export default WorkoutCard;