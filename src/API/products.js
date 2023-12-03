import axiosSecure from "./axiosSecure"


export const getAllProducts = async () => {
    const { data } = await axiosSecure('/products')
    return data
  }

  // Fetch single room data from db
export const getSingleProduct = async id => {
  const { data } = await axiosSecure(`/product/${id}`)
  return data
}

export const deleteSingleProduct = async id => {
  const { data } = await axiosSecure.delete(`/product/${id}`)
  return data
}

export const updateProductInfo = async (id, product) => {
  const { data } = await axiosSecure.put(`/product/${id}`, product);
  return data;
}

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
    throw error; 
  }
}

// Save a room data in db
export const addProduct = async productData => {
  const { data } = await axiosSecure.post(`/products`, productData)
  return data
}

// Fetch all rooms for host
export const getOwnProducts = async email => {
  const { data } = await axiosSecure(`/product/${email}`)
  return data
}





  
