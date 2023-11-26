import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../API/axiosSecure";

const useFeaturedProducts = () => {
    const { data: FeaturedProducts = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['FeaturedProducts'],
        queryFn: async () => {
            const res = await axiosSecure('/products');
            return res.data;
        },
    });

    return { FeaturedProducts, loading, refetch };
};

export default useFeaturedProducts;
