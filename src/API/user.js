
import axiosSecure from "./axiosSecure"


export const getAllUsers = async () => {
    const { data } = await axiosSecure('/users')
    return data
  }

  export const getSingleUser = async userEmail => {
    try {
      const data = await axiosSecure(`/user/id/${userEmail}`);
      console.log('getSingleUser data:', data);
      return data;
    } catch (error) {
      console.error('Error in getSingleUser:', error);
      throw error;
    }
  };
  
