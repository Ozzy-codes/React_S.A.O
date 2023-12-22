import TopImg from "../components/TopImg"
import UserReviews from "../components/UserReviews"
import { useEffect } from "react"

export default function ReviewPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <TopImg />
      <div className="p-4">
        <h2 className="text-3xl py-4 mb-4">Reviews</h2>
        <UserReviews />
      </div>
    </div>
  )
}
