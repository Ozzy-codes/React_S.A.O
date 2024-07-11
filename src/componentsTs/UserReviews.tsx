import Skeleton from "../componentsTs/Skeleton"
// @ts-ignore
import useLoading from "../hooksTs/use-Loading"

interface UserReviewsProps{
  className?: string
}

const UserReviews: React.FC<UserReviewsProps> = ({ className }) => {
  const { isLoaded, loadingRef } = useLoading()

  const widgetLoadingContent = isLoaded ? (
    ""
  ) : (
    <Skeleton
      times={1}
      className={"absolute inset-0"}
    />
  )

  return (
    <div
      className={
        "relative " + (isLoaded ? "" : "h-[90vh] w-full " + className)
      }>
      <div
        className="ownerrez-widget"
        data-widget-type="Reviews"
        data-widget-id="8a125fd30fad44ef8ae744fa28121db2"
        ref={loadingRef}></div>
      {widgetLoadingContent}
    </div>
  )
}
export default UserReviews
