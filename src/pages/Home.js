import { Link } from "react-router-dom";
import { useContext } from "react";
import {HomeContext} from "../context/HomeContext"
import FeatureList from "../components/cards/FeatureList";
import { FaDumbbell, FaArrowRight , FaCheckCircle} from "react-icons/fa";
import creatinePromo from "../assets/creatinePromo.jpg";
import SectionTitle from "../components/common/SectionTitle";
import "../styles/Home.css";
import gym from "../assets/gym.jpg";
const Home = () => {

    const { features } = useContext(HomeContext);

    return (
        <main className="home-page">




            <section className="home-hero">
                        <div className="hero-overlay"></div>
            
                        <div className="hero-content">
                            <p className="hero-small-title">
                                WELCOME TO THE NEXT GENERATION
                            </p>
            
                            <h1>UNLEASH YOUR NEXT LEVEL.</h1>
            
                            <p className="hero-description">
                                Train smarter, get stronger, and discover what
                                you're capable of. Your fitness journey starts here.
                            </p>
            
                            <Link to="/workouts" className="nf-button">
                                EXPLORE WORKOUTS <FaArrowRight />
                            </Link>
            
                            <h3 className="hero-tagline">
                                <FaDumbbell /> IT'S THE NEXTFIT GENERATION.
                            </h3>
                        </div>
                    </section>




            <section className="why-section">
                <SectionTitle
                    label="THE NEXTFIT EXPERIENCE"
                    title="WHY NEXTFIT?"
                    description="Everything you need to enjoy an active lifestyle."
                />

                <FeatureList features={features} />
            </section>




        <section className="home-workout-section">

            <div className="home-workout-image">
                <img
                    src={gym}
                    alt="Gym training"
                />
            </div>

            <div className="home-workout-content">
                <p className="section-label">TRAIN WITH PURPOSE</p>

                <h2>YOUR GOALS. YOUR WORKOUT.</h2>

                <p>
                    Find activities and training programs
                    that match your interests and goals.
                </p>

                <ul>
                    <li><FaCheckCircle /> Strength Training</li>
                    <li><FaCheckCircle /> Cardio Workouts</li>
                    <li><FaCheckCircle /> Yoga and Flexibility</li>
                    <li><FaCheckCircle /> Functional Training</li>
                </ul>

                <Link to="/workouts" className="nf-button">
                    VIEW WORKOUTS <FaArrowRight />
                </Link>
            </div>

        </section>





            <section className="coaches-banner">
            <div className="coaches-banner-content">
                <p className="section-label">MEET YOUR SUPPORT TEAM</p>

                <h2>GREAT COACHES. GREAT ENERGY.</h2>

                <p>
                    Meet our coaches and discover how they
                    can support your fitness journey.
                </p>

                <Link to="/coaches" className="nf-button">
                    MEET OUR COACHES <FaArrowRight />
                </Link>
            </div>
        </section>





         <section className="supplement-promo">

            <div className="supplement-promo-image">
                <img
                    src={creatinePromo}
                    alt="Healthy food"
                />
            </div>

            <div className="supplement-promo-content">
                <p className="section-label">NEXTFIT Market</p>

                <h2>FUEL YOUR ACTIVE LIFESTYLE.</h2>

                <p>
                    Discover supplements information, hydration tips
                    and educational resources about supplements.
                </p>

                <Link to="/supplements" className="nf-button">
                    Shop Now <FaArrowRight />
                </Link>
            </div>

        </section>


        <section className="home-cta">
            <h2>READY FOR YOUR NEXT LEVEL?</h2>

            <p>
                Explore NextFit and discover activities
                that make fitness enjoyable.
            </p>

            <Link to="/workouts" className="nf-button">
                START EXPLORING
            </Link>
        </section>

        </main>
    );
};

export default Home;