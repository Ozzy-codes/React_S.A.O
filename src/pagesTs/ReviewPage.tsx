import TopImg from "../componentsTs/TopImg"
import UserReviews from "../componentsTs/UserReviews"
import { useEffect } from "react"

const ReviewPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <TopImg />
      <div className="p-4 bg-white ">
        <h2 className="text-3xl py-4 mb-4">Reviews</h2>
        <UserReviews />
      </div>
    </div>
  )
}
export default ReviewPage
