import useReview from "../../Hooks/useReview";
import ReviewCard from "./ReviewCard";


const Reviews = ({ product }) => {
    // console.log("product", product)
    const { AllReviews } = useReview();
    // console.log("all Review", AllReviews)

    const filteredReviews = AllReviews.filter((review) => review.ProductId === product._id);
    // console.log("filteredReviews", filteredReviews);

    return (
        <div className="flex flex-col">
            {
                filteredReviews.map((review) => (<ReviewCard key={review._id} review={review} />))
            }
        </div>
    );
};

export default Reviews;