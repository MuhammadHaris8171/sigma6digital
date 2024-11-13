import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './Root';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About/About';
import ServicesPage from './pages/Services/ServicesPage';
import FAQ from './pages/FAQ/FAQ';
import Contact from './pages/Contact/Contact';
import MainService from './pages/MainService/MainService';
import { webDevelopmentPageContent } from './components/data';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/website-development",
        element: <MainService content={webDevelopmentPageContent} />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
