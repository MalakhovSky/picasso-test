import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {newRouteConfig} from "./app/providers/router/config/routeConfig";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(newRouteConfig)
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
