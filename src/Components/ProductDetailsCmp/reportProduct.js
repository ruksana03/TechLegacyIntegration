

import axiosSecure from "../../API/axiosSecure";

const reportProduct = async (productId, productName, userEmail) => {
    try {
        const response = await axiosSecure.post("/report", {
            productId,
            productName,
            userEmail,
            status: "reported",
        });

        return response.data;
    } catch (error) {
        console.error("Error reporting product:", error);
        throw error;
    }
};

export default reportProduct;
