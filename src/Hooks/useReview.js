import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../API/axiosSecure";


const useReview = () => {
    const { data: AllReviews = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['AllReviews'],
        queryFn: async () => {
          const res = await axiosSecure('/reviews');
          return res.data;
        },
      });
    

      return { AllReviews, loading, refetch };
    };

export default useReview;