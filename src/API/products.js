import axiosSecure from "./axiosSecure"
// import { useQuery } from "@tanstack/react-query";

export const getAllProducts = async () => {
    const { data } = await axiosSecure('/products')
    return data
  }
  
