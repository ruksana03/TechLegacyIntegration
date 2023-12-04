import axiosSecure from "./axiosSecure"

// Save a room data in db
export const addReport = async reportData => {
    const { data } = await axiosSecure.post(`/reports`, reportData)
    return data
  }