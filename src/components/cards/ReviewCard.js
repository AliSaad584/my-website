const ReviewCard = ({ review }) => {
    return (
        <article className="review-card">
            <div className="review-user">
                <div className="review-avatar">
                    {review.name.charAt(0)}
                </div>

                <div>
                    <h3>{review.name}</h3>
                    <span>NextFit Member</span>
                </div>
            </div>

            <div className="review-stars">
                {"★".repeat(review.rating)}
            </div>

            <p>{review.text}</p>

            <div className="review-images">
                {review.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Review ${review.id} photo ${index + 1}`}
                    />
                ))}
            </div>
        </article>
    );
};

export default ReviewCard;