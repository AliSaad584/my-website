import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomeProvider } from "./context/HomeContext";
import { WorkoutProvider } from "./context/WorkoutContext";
import { CoachProvider } from "./context/CoachContext";
import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import Coaches from "./pages/Coaches";
import Supplements from "./pages/Supplements";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";

import "./styles/App.css";

function App() {
    return (
        <BrowserRouter>

            <HomeProvider>
                <WorkoutProvider>
                    <CoachProvider>
                        <AuthProvider>

                            <Navbar />

                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/workouts" element={<Workouts />} />
                                <Route path="/coaches" element={<Coaches />} />
                                <Route path="/supplements" element={<Supplements />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/signup" element={<SignUp />} />
                                <Route path="/favorites" element={<Favorites />} />
                                <Route path="/cart" element={<Cart />} />

                            </Routes>

                            <Footer />

                        </AuthProvider>
                    </CoachProvider>
                </WorkoutProvider>
            </HomeProvider>

        </BrowserRouter>
    );
}

export default App;