
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import ErrorPage from './components/error/ErrorPage';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import CategoryDetails from './components/CategoryDetails/CategoryDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader: () => fetch('category.json'),
      },
    {
      path: '/statistics',
      element: <Statistics></Statistics>,
      loader: () => fetch('category.json'),
    },
    {
      path: '/category/:id',
      element: <CategoryDetails></CategoryDetails>,
      loader: () => fetch('category.json'),
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
