import useLoading from "../hooks/use-Loading"
import Skeleton from "../components/Skeleton"

function TopImg() {
  const { isLoaded, setLoadTrue } = useLoading()

  const loadingContent = isLoaded ? (
    ""
  ) : (
    <Skeleton
      times={1}
      className={"absolute inset-0"}
    />
  )

  return (
    <div className={"relative header_gradient  "}>
      <img
        className="w-full md:h-[100vw] "
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
