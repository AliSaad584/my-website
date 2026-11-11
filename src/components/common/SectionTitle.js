const SectionTitle = ({ label, title, description }) => {
    return (
        <div className="section-title">
            {label && <p>{label}</p>}
            <h2>{title}</h2>
            {description && <span>{description}</span>}
        </div>
    );
};

export default SectionTitle;