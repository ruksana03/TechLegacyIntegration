import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../API/axiosSecure";


const useReport = () => {
    const { data: AllReport = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['AllReport'],
        queryFn: async () => {
          const res = await axiosSecure('/reports');
          return res.data;
        },
      });
    

      return { AllReport, loading, refetch };
    };

export default useReport;