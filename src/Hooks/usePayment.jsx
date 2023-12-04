import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../API/axiosSecure";


const usePayment = () => {
    const { data: AllPayments = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['AllPayments'],
        queryFn: async () => {
          const res = await axiosSecure('/payments');
          return res.data;
        },
      });
    
      return {AllPayments, loading, refetch };
    };
    
export default usePayment;