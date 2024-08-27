import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Starter />,
//     errorElement: <NotFound404 />,
//   },
//   {
//     path: "/signup",
//     element: <Register />,
//   },
//   {
//     path: "login",
//     element: <Login />,
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
