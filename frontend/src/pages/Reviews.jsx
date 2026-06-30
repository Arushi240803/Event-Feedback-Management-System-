import { useEffect, useState } from "react";
import axios from "axios";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/feedback")
      .then((res) => setReviews(res.data))
      .catch((err) => console.log(err));
  }, []);

  const renderStars = (rating) => {
    return "⭐".repeat(rating || 0);
  };

  return (
    <div className="container page">
      <h1 className="reviews-title">User Reviews</h1>

      {reviews.length === 0 ? (
        <p className="no-review">No reviews yet.</p>
      ) : (
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div className="review-card" key={review._id}>
              <div className="review-header">
                <div className="avatar">
                  {review.name ? review.name.charAt(0).toUpperCase() : "U"}
                </div>

                <div>
                  <h3>{review.name}</h3>
                  <p className="event-name">{review.eventName}</p>
                </div>
              </div>

              <div className="stars">
                {renderStars(review.rating)}
              </div>

              <p className="review-text">{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Reviews;