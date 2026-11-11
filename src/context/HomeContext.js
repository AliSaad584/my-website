import { createContext, useState } from "react";
import featuresData from "../data/homeData";

export const HomeContext = createContext(null);

export const HomeProvider = ({ children }) => {

    const [features] = useState(featuresData);

    return (
        <HomeContext.Provider value={{ features }}>
            {children}
        </HomeContext.Provider>
    );
};

