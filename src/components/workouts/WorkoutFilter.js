const WorkoutFilter = ({ category, setCategory }) => {

    const categories = [
        "All",
        "BodyBuilding",
        "Cardio",
        "Flexibility"
    ];

    return (
        <div className="workout-filters">
            {categories.map((item) => (
                <button
                    key={item}
                    className={category === item ? "filter-active" : ""}
                    onClick={() => setCategory(item)}
                >
                    {item}
                </button>
            ))}
        </div>
    );
};

export default WorkoutFilter;