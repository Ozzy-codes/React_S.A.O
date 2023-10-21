import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage"
import App from "./App"
import LocationPage from "./pages/LocationPage"
import PhotoPage, { loader as photoLoader } from "./pages/PhotoPage"
import AvailabilityPage from "./pages/AvailabilityPage"
import ReviewPage from "./pages/ReviewPage"
import HomePage from "./pages/HomePage"
import BookingPage from "./pages/BookingPage"

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
        path: "location",
        element: <LocationPage />
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

const el = document.getElementById("root")
const root = ReactDOM.createRoot(el)

root.render(<RouterProvider router={router} />)
