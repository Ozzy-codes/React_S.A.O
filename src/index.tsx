import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./pagesTs/ErrorPage"
import App from "./App"
import PhotoPage, { loader as photoLoader } from "./pagesTs/PhotoPage"
import AvailabilityPage from "./pagesTs/AvailabilityPage"
import ReviewPage from "./pagesTs/ReviewPage"
import HomePage from "./pagesTs/HomePage"
import BookingPage from "./pagesTs/BookingPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "photos",
        element: <PhotoPage />,
        loader: photoLoader
      },
      {
        path: "availability",
        element: <AvailabilityPage />
      },
      {
        path: "reviews",
        element: <ReviewPage />
      },
      {
        path: "booking",
        element: <BookingPage />
      }
    ]
  }
])

const el = document.getElementById("root") as HTMLDivElement
const root = ReactDOM.createRoot(el)

root.render(<RouterProvider router={router} />)
