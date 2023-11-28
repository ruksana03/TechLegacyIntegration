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

  const fetchProductsByTag = async (tag, setFeaturedProducts) => {
    try {
      const response = await axiosSecure(`/products/tag/${tag}`);
      setFeaturedProducts(response.data);
    } catch (error) {
      console.error('Error fetching products by tag:', error);
    }
  };

  return { FeaturedProducts, loading, refetch, fetchProductsByTag };
};

export default useFeaturedProducts;

