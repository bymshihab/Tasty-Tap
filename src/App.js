import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Contract from "./components/Contract";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";

// restaurent information in card...

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Outlet></Outlet>
      {/* body */}
      {/* footer */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contract",
        element: <Contract></Contract>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurentMenu></RestaurentMenu>,
      },
    ],

    errorElement: <Error></Error>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <AppLayout></AppLayout>

  <RouterProvider router={appRouter} />
);
