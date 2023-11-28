import axiosSecure from "./axiosSecure"
// import { useQuery } from "@tanstack/react-query";

export const getAllProducts = async () => {
    const { data } = await axiosSecure('/products')
    return data
  }

  // Fetch single room data from db
export const getSingleProduct = async id => {
  const { data } = await axiosSecure(`/product/${id}`)
  return data
}
  
