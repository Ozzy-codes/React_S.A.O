import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage"
import App from "./App"
import Location from "./pages/Location"

// import Root from "./routes/root"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "location/:locationId",
        element: <Location />
      }
    ]
  }
])

const el = document.getElementById("root")
const root = ReactDOM.createRoot(el)

root.render(<RouterProvider router={router} />)
