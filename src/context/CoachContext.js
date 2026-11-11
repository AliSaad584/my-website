import { createContext, useState } from "react";
import initialCoaches from "../data/coachesData";

export const CoachContext = createContext();

export const CoachProvider = ({ children }) => {
    const [coaches, setCoaches] = useState(initialCoaches);

    const addCoach = (newCoach) => {
        setCoaches((previous) => [
            ...previous,
            {
                ...newCoach,
                id: Date.now()
            }
        ]);
    };

    return (
        <CoachContext.Provider value={{ coaches, addCoach }}>
            {children}
        </CoachContext.Provider>
    );
};