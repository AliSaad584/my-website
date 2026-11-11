
import PageHeader from "../components/common/PageHeader";
import WorkoutFilter from "../components/workouts/WorkoutFilter";
import WorkoutList from "../components/cards/WorkoutList";
import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
const Workouts = () => {

    const {
        category,
        setCategory,
        filteredWorkouts
    } = useContext(WorkoutContext);

    return (
        <main className="page-container">

            <PageHeader
                title="OUR WORKOUTS"
                description="Find activities and programs that you enjoy."
            />

            <WorkoutFilter
                category={category}
                setCategory={setCategory}
            />

            <WorkoutList workouts={filteredWorkouts} />

        </main>
    );
};

export default Workouts;