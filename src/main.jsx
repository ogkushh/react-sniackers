import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import './index.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Favorites from "./pages/Favorites.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/favorites",
        element: <Favorites/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
