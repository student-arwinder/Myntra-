import React from "react";
import ReactDOM from "react-dom/client";
import App from "./router/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bags from "./router/Bags.jsx";
import Home from "./router/Home.jsx";
import {Provider} from "react-redux";
import myntrastore from "./store/index.js";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/bag",
        element: <Bags/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<Provider store={myntrastore}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
