
import FeatureCard from "./FeatureCard";

const FeatureList = ({ features }) => {
    return (
        <div className="features-container">
            {features.map((feature) => (
                <FeatureCard key={feature.id} feature={feature} />
            ))}
        </div>
    );
};

export default FeatureList;