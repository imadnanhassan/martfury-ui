import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import HomePage from "../pages/frontend/home/HomePage";
import FrontendLayout from "../components/layout/FrontendLayout";

const FRONTEND_ROUTES = [{ path: "/", element: <HomePage /> }];

const CUSTOMER_PANEL_ROUTES = [
  { path: "user/dashboard", element: <></> },
  { path: "user/wallet", element: <></> },
  { path: "user/orders", element: <></> },
  { path: "user/wishlist", element: <></> },
  { path: "user/profile", element: <></> },
];
const DASHBOARD_ROUTES = [{ path: "/dashboard", element: <Dashboard /> }];

const AUTH_ROUTES = [
  { path: "dashboard/signin", element: <p>SignIn</p> },
  { path: "dashboard/signup", element: <p>SignUp</p> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontendLayout/>,
    children: [
      ...FRONTEND_ROUTES,
      {
        path: "/",
        element: <p>CustomerPanel</p>,
        children: CUSTOMER_PANEL_ROUTES,
      },
    ],
  },
  {
    path: "/",
    element: <p>DashboardLayout</p>,
    errorElement: <p>ErrorPage</p>,
    children: DASHBOARD_ROUTES,
  },
  ...AUTH_ROUTES,
]);

export default router;
