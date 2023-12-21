import useTopImgLoader from "../hooks/use-TopImgLoader"
import Skeleton from "../components/Skeleton"

function TopImg() {
  const { isLoaded, setLoadTrue } = useTopImgLoader()

  const loadingContent = isLoaded ? (
    ""
  ) : (
    <Skeleton
      times={1}
      className={"absolute inset-0"}
    />
  )

  return (
    <div className={"relative header_gradient "}>
      <img
        className="w-full"
        src="https://picsum.photos/200/?blur=1"
        alt="random img"
        width={200}
        height={200}
        onLoad={setLoadTrue}
      />
      {loadingContent}
    </div>
  )
}
export default TopImg
