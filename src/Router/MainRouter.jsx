import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import Login from "../Pages/Register/Login";
import Register from "../Pages/Register/Register";
import ShareUserPost from "../Components/HomeComponents/HomeBanner/ShareUserPost";
import TLIStory from "../Components/HomeComponents/HomeBanner/TLIStory";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import { getSingleProduct } from "../API/products";


const MainRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: 'share',
            element: <ShareUserPost />,
          },
          {
            path: 'ourStory',
            element: <TLIStory />,
          },
        ],
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path:'products',
        element:<Products/>
      },
      {
        path:'product/:id',
        element:<PrivateRoute><ProductDetails/></PrivateRoute>,
        loader:({params})=>getSingleProduct(params.id),
      },
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

export default MainRouter;
