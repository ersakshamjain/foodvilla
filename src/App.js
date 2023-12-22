import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; 
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";
// import Instamart from "./components/Instamart";
import ShimmerUI from "./components/ShimmerUI";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";

const Instamart = lazy(() => import("./components/Instamart")); // Lazy Loading
//On demand loading

const About = lazy(() => import("./components/About"));

const AppLayout = () => {

  const[user,setUser] = useState({
    name:"Saksham Jain",
    gmail:"sakshamjain@gmail.com"
  })

  return (
    <Provider store={store}>
    <userContext.Provider value={{
      user:user,
      setUser:setUser
    }}>
      <Header />
      <Outlet />
      <Footer />
    </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Body
            // user={{ name: "Saksham Jain", Email: "sakshamjain2804@gmail.com" }}
          />
        ),
      },

      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />, // Path is localhost:1234/about/profile
          },
        ],
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },

      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
root.render(<RouterProvider router={appRouter} />);
