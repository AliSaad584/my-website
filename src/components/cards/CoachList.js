import CoachCard from "./CoachCard";

const CoachList = ({ coaches }) => {
    return (
        <div className="cards-grid">
            {coaches.map((coach) => (
                <CoachCard key={coach.id} coach={coach} />
            ))}
        </div>
    );
};

export default CoachList;