import { useLoaderData } from "react-router-dom";


const Dashboard = () => {
    const activeUser = useLoaderData();
    console.log('active USer:', activeUser)
    return (
        <div>
            Dashboard
        </div>
    );
};

export default Dashboard;