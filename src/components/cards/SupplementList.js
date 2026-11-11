import SupplementCard from "./SupplementCard";

const SupplementList = ({ supplements }) => {
    return (
        <div className="cards-grid">
            {supplements.map((supplement) => (
                <SupplementCard
                    key={supplement.id}
                    supplement={supplement}
                />
            ))}
        </div>
    );
};

export default SupplementList;