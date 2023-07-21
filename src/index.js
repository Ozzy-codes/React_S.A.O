import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage"
import App from "./routes/App-copy"
import Location from "./routes/Location"

// import Root from "./routes/root"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "location/:locationId",
    element: <Location />
  }
])

const el = document.getElementById("root")
const root = ReactDOM.createRoot(el)

root.render(<RouterProvider router={router} />)
