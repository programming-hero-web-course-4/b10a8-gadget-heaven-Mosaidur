import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './component/Root/Root';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Home from './component/Home/Home';
import ViewGadget from './component/ViewGadget/ViewGadget';
import Dashboard from './component/Dashboard/Dashboard';
import Statistics from './component/Statistics/Statistics';
import Post from './component/Post/Post';

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
        path: 'gadget/:product_id',
        element: <ViewGadget></ViewGadget>,
        loader: () => fetch('/product.json')
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/product.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'post',
        element: <Post></Post>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
