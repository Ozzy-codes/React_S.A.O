import { useEffect } from "react"
import TopImg from "../components/TopImg"
import BookAndInquiry from "../components/BookAndInquiry"

export default function BookingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <TopImg />
      <div className="p-4">
        <h2 className="text-3xl py-4 mb-4">Booking and Inquiry</h2>
        <BookAndInquiry />
      </div>
    </div>
  )
}
