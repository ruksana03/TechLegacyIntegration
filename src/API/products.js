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
// /product/update/:id

export const updateProductStatus = async (productId, action) => {

    const response = await axiosSecure.put(`/product/${action}/${productId}`);
    return response.data;
  } 
  

// Send user info to database 
export const updateProductFeatured = async ({ id, featured }) => {
  try {
    const currentProduct = {
      id,
      featured,
    };

    const { data } = await axiosSecure.put(`/product/update/${id}`, currentProduct);
    return data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error; // Rethrow the error to handle it in the calling code if needed
  }
}





  
