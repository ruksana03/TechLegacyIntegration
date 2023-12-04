import {gradientBorder} from "../Shared/StyleJS/border"

const ReviewCard = ({ review }) => {
    return (
        <div className="border-[1px]" style={{...gradientBorder}}>
            <div className="flex gap-2 justify-start items-center text-center border-[1px] py-2 px-4" >
                <img className="w-12 h-12 rounded-full" src={review?.img} alt="" />
                <p>{review?.reviewerName}</p>
            </div>
            <div>
                  <p>{review.description}</p> 
                  <p>{review.rating}</p>
            </div>
         
        </div>
    );
};

export default ReviewCard;