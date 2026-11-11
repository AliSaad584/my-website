import { createContext, useState } from "react";
import initialWorkouts from "../data/workoutsData";

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {

    const [workouts, setWorkouts] = useState(initialWorkouts);
    const [category, setCategory] = useState("All");

    const filteredWorkouts = category === "All"
        ? workouts
        : workouts.filter((workout) => workout.category === category);

    return (
        <WorkoutContext.Provider value={{
            workouts,
            setWorkouts,
            category,
            setCategory,
            filteredWorkouts
        }}>
            {children}
        </WorkoutContext.Provider>
    );
};

