import React from 'react';
import 'core-js';
import {createRoot} from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import {createRoutes} from './pages/routes.js';
import './styles.css';

const router = createBrowserRouter(createRoutes());

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
