import axiosSecure from "./axiosSecure";

// create checkout session
export const createCheckoutSession = async payAmount => {
    try {
      const { data } = await axiosSecure.post('/create-checkout-session', payAmount);
      console.log('Data received from server:', data);
      return data;
    } catch (error) {
      console.error('Error in createCheckoutSession:', error);
      throw error;
    }
  }
  
  // save subscriptionInfo in db
  // export const saveSubscriptionInfo = async paymentInfo => {
  //   const { data } = await axiosSecure.post('/subscriptions', paymentInfo)
  //   return data
  // }
  
  // update user status after subscription 
  // export const updateSubscribeStatus = async (id, subscribe) => {
  //   const { data } = await axiosSecure.patch(`/user/subscribe/${id}`, { subscribe })
  //   return data
  // }
  
  // get all bookings for a guest by email
//   export const getBookings = async email => {
//     const { data } = await axiosSecure(`/bookings?email=${email}`)
//     return data
//   }
  // get all bookings for a host by email
//   export const getHostBookings = async email => {
//     const { data } = await axiosSecure(`/bookings/host?email=${email}`)
//     return data
//   }