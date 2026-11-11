import ReviewCard from "./ReviewCard";

const ReviewList = ({ reviews }) => {
    return (
        <div className="reviews-grid">
            {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
            ))}
        </div>
    );
};

export default ReviewList;