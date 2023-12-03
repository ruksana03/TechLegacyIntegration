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
import MyProfile from "../Pages/Dashboard/TechEnthusiasts/MyProfile";
import PostProduct from "../Pages/Dashboard/TechEnthusiasts/PostProduct";
import MyProducts from "../Pages/Dashboard/TechEnthusiasts/MyProducts";
import ModeratorRouter from "./moderatorRouter";
import MngProductReview from "../Pages/Dashboard/Moderator/MngProductReview";
import MngReportedContent from "../Pages/Dashboard/Moderator/MngReportedContent";
import AdminRoute from "./AdminRouter";
import Statistics from "../Pages/Dashboard/Admin/Statistics";
import MngUsers from "../Pages/Dashboard/Admin/MngUsers";
import MngCoupons from "../Pages/Dashboard/Admin/MngCoupons";
import Default from "../Components/HomeComponents/HomeBanner/Default";
import UpdateProduct from "../Pages/Dashboard/TechEnthusiasts/UpdateProduct";


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
            path: '/',
            element: <Default />,
          },
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
        path: 'products',
        element: <Products />
      },
      {
        path: 'product/:id',
        element: <PrivateRoute>
          <ProductDetails />
        </PrivateRoute>,
        loader: ({ params }) => getSingleProduct(params.id),
      },
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute>
      <DashboardLayout />
    </PrivateRoute>,
    
    
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
    
      },
      {
        path: 'myProfile',
        element: <PrivateRoute>
          <MyProfile />
        </PrivateRoute>,
      },

      {
        path: 'postProduct',
        element: <PrivateRoute>
          <PostProduct />
        </PrivateRoute>
      },
      {
        path: 'myProducts',
        element: <PrivateRoute>
          <MyProducts />
        </PrivateRoute>
      },
      {
        path: 'updateProducts/:id',
        element: <PrivateRoute>
          <UpdateProduct />
        </PrivateRoute>,
         loader: ({ params }) => getSingleProduct(params.id),
      },
      {
        path: 'mngProductReview',
        element: <PrivateRoute>
          <ModeratorRouter>
            <MngProductReview />
          </ModeratorRouter>
        </PrivateRoute>
      },
      {
        path: 'mngReportedProduct',
        element: <PrivateRoute>
          <ModeratorRouter>
            <MngReportedContent />
          </ModeratorRouter>
        </PrivateRoute>
      },
      {
        path: 'statistics',
        element: <PrivateRoute>
          <AdminRoute>
            <Statistics />
          </AdminRoute>
        </PrivateRoute>
      },
      {
        path: 'mngUsers',
        element: <PrivateRoute>
          <AdminRoute>
            <MngUsers />
          </AdminRoute>
        </PrivateRoute>
      },
      {
        path: 'mngCoupons',
        element: <PrivateRoute>
          <AdminRoute>
            <MngCoupons />
          </AdminRoute>
        </PrivateRoute>
      },

    ],
  },
]);

export default MainRouter;
