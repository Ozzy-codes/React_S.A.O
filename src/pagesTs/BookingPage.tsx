import { useEffect } from "react"
import TopImg from "../componentsTs/TopImg"
import BookAndInquiry from "../componentsTs/BookAndInquiry"

const BookingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <TopImg />
      <div className="p-4 bg-white ">
        <h2 className="text-3xl py-4 mb-4">Booking and Inquiry</h2>
        <BookAndInquiry />
      </div>
    </div>
  )
}
export default BookingPage
