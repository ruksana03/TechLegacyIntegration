import axiosSecure from "./axiosSecure";


// Send user info to database 
export const storeUserInfo = async (user) => {
  if (!user || !user.email) {
    return null;
  }

  const currentUser = {
    email: user.email,
    // role: 'TechEnthusiasts',
    role: 'Admin',
    status: 'Verified',
  };

  const { data } = await axiosSecure.put(`/users/${user.email}`, currentUser);
  return data;
};

// get token from server  
export const getToken = async email => {
  const { data } = await axiosSecure.post('/jwt', email)
  console.log('Token:', data)
  return data
};

// remove token from browser 
export const clearCookie = async () => {
  const { data } = await axiosSecure.get('/logout')
  console.log('Token gone?', data)
  return data
}

