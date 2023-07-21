import React from "react"
import ReactDOM from "react-dom/client"
import App from "./routes/App-copy"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import Root from "./routes/root"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])

const el = document.getElementById("root")
const root = ReactDOM.createRoot(el)

root.render(<RouterProvider router={router} />)
