import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Correct import
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

// Define your router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '', // '' is for the index route
        element: <Home />,
      },
      {
        path: 'about', // Use 'about' to navigate to /about
        element: <About />,
      },
      {
        path: 'contact', // Use 'about' to navigate to /about
        element: <Contact />,
      },
    ],
  },
]);

// Use createRoot directly (don't use ReactDOM)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
