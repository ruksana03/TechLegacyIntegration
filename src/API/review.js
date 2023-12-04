import axiosSecure from "./axiosSecure"

// Save a room data in db
export const addReview = async reviewData => {
    const { data } = await axiosSecure.post(`/reviews`, reviewData)
    return data
  }