// useProductsByEmail.js

import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../API/axiosSecure";

const useProductsByEmail = (email) => {
  const { data: ProductsByEmail = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['ProductsByEmail', email],
    queryFn: async () => {
      const res = await axiosSecure(`/products/${email}`);
      return res.data;
    },
  });

  return { ProductsByEmail, loading, refetch };
};

export default useProductsByEmail;

