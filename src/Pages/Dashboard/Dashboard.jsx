
import useAllUsers from "../../Hooks/useAllUsers";
import useAllProducts from "../../Hooks/useAllProducts";

const Dashboard = () => {
    const { AllUsers } = useAllUsers();
    const { AllProducts } = useAllProducts();
    return (
        <div className="my-auto h-64 grid grid-cols-4 gap-4 font-mono">
            <div className="flex flex-col">
                <div className="border border-black m-2 bg-[#FEBD59] h-40 flex justify-center py-auto items-center text-2xl font-semibold px-8 text-center">
                    We Have Total: {AllUsers.length} Users
                </div>
            </div>
            <div className="flex flex-col">
                <div className="border border-black m-2 bg-[#6F1111]  h-40 flex justify-center py-auto items-center text-2xl font-semibold px-8 text-center text-white">
                We Have Total: {AllProducts.length} Products
                </div>
            </div>
        </div>
    );
};

export default Dashboard;