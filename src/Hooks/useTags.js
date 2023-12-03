import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../API/axiosSecure";

const useTags = () => {
  const { data: AllTags = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['AllTags'],
    queryFn: async () => {
      try {
        const res = await axiosSecure('/tags');
        return res.data;
      } catch (error) {
        console.error('Error fetching tags:', error);
        throw error; 
      }
    },
  });

  return { AllTags, loading, refetch };
};

export default useTags;
