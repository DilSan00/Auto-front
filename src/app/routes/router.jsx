import { createBrowserRouter } from "react-router-dom";
import { ROUTE } from "../../shared/api/router.map";
import { Layout } from "../layout/Layout";
import { lazy } from "react";
import { AdminLayout } from "../layout/AdminLayout";

const Home = lazy(() => import("../../modules/home"));
const About = lazy(() => import("../../modules/about-us"));
const CarDetails = lazy(() => import("../../modules/car-details"));
const SignIn = lazy(() => import("../../modules/sign-in"));
const SignUp = lazy(() => import("../../modules/sign-up"));
const AdminPage = lazy(() => import("../../modules/admin"));

export const router = createBrowserRouter([
  {
    path: ROUTE.base,
    element: <Layout />,
    children: [
      { path: ROUTE.home, element: <Home /> },
      { path: ROUTE.about, element: <About /> },
      { path: ROUTE.signIn, element: <SignIn /> },
      { path: ROUTE.signUp, element: <SignUp /> },
      {
        path: `${ROUTE.home}/:id`,
        element: <CarDetails />,
      },
    ],
  },

  {
    path: ROUTE.admin,
    element: <AdminLayout />,
    children: [{ path: ROUTE.admin, element: <AdminPage /> }],
  },
]);
