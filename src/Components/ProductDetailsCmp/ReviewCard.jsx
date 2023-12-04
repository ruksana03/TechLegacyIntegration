import { gradientBorder } from "../Shared/StyleJS/border";
import StarRating from "./StarRating";
// import StarRating from "./StarRating";

const ReviewCard = ({ review }) => {
  return (
    <div className="border-[1px] my-2" style={{ ...gradientBorder }}>
      <div className="flex gap-2 justify-start items-center text-center border-[1px] py-2 px-4">
        <img className="w-12 h-12 rounded-full" src={review?.img} alt="" />
        <p>{review?.reviewerName}</p>
      </div>
      <div className="px-4">
        <p>{review?.description}</p>
        <StarRating rating={review?.rating} />
      </div>
    </div>
  );
};

export default ReviewCard;