import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";

import App from "./Pages/App";
import store from "./Store/store.jsx";
import RootLayout from "./Pages/RootLayout";
import ErrorPage from "./Pages/ErrorPage";

import Services from "./Pages/Services.jsx";
import Blog from "./Pages/Blog.jsx";
import AboutMe from "./Pages/AboutMe.jsx";
import BlogOne from "./Pages/BlogOne.jsx";

import Admin from "./Pages/Admin/Admin.jsx";
import Partner from "./Pages/Admin/partner.jsx";
import EditService from "./Pages/Admin/EditService.jsx";
import Email from "./Pages/Admin/Email.jsx";
import Login from "./Pages/Admin/Login.jsx";
import EditBlogs from "./Pages/Admin/EditBlogs.jsx";
import Analysis from "./Pages/Admin/Analysis.jsx";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationAR from "./locales/translationAR.json";
import translationEN from "./locales/translationEN.json";
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,

    resources: {
      ar: {
        translation: translationAR,
      },
      en: {
        translation: translationEN,
      },
    },
    fallbackLng: "ar", // fallback language

    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },
    detection: {
      order: [
        "htmlTag",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
        "querystring",
      ],
      caches: ["localStorage", "cookie"],
    },
  });
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
    ],
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
