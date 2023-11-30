import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../API/axiosSecure";


const useAllProducts = () => {
    const { data: AllProducts = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['AllProducts'],
        queryFn: async () => {
          const res = await axiosSecure('/products');
          return res.data;
        },
      });
    
      return { AllProducts, loading, refetch };
    };
    
export default useAllProducts;