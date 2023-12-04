// StarRating.js
import StarRatings from 'react-rating-stars-component';

const StarRating = ({ rating }) => {
  return (
    <StarRatings
      count={5}
      value={rating}
      size={24}
      activeColor="#ffd700"
      edit={false}
    />
  );
};

export default StarRating;
