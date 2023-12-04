import axiosSecure from "./axiosSecure"

// Save a room data in db
export const addReport = async reportData => {
    const { data } = await axiosSecure.post(`/reports`, reportData)
    return data
  }

  export const deleteReport = async id => {
    const { data } = await axiosSecure.delete(`/report/${id}`)
    return data
  }