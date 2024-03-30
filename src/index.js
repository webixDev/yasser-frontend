import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./Pages/App"
import store from "./Store/store.jsx"
import RootLayout from "./Pages/RootLayout"
import ErrorPage from "./Pages/ErrorPage"

import Services from "./Pages/Services.jsx"
import Blog from "./Pages/Blog.jsx"
import AboutMe from "./Pages/AboutMe.jsx"
import BlogOne from "./Pages/BlogOne.jsx";

import Admin from "./Pages/Admin/Admin.jsx"
import Partner from "./Pages/Admin/partner.jsx";
import EditService from "./Pages/Admin/EditService.jsx";
import Email from "./Pages/Admin/Email.jsx"
import Login from "./Pages/Admin/Login.jsx"
import EditBlogs from "./Pages/Admin/EditBlogs.jsx";
import Analysis from "./Pages/Admin/Analysis.jsx";
const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <App /> },
        { path: "Blog", element: <Blog /> },    
        { path: "Services", element: <Services /> },    
        { path: "AboutMe", element: <AboutMe /> },
        { path: "/BlogOne/:id", element: <BlogOne /> },   
        { path: "admin", element: <Admin /> },
        { path: "admin/analysis", element: <Analysis /> },
        { path: "admin/partner", element: <Partner /> },
        { path: "admin/editservice/:id", element: <EditService /> },
        { path: "admin/editblog/:id", element: <EditBlogs /> },

      
        { path: "admin/email", element: <Email /> },
        { path: "admin/login", element: <Login /> },




      ]
    }
  ]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

