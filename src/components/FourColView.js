import useLoading from "../hooks/use-Loading"
import Skeleton from "./Skeleton"

function FourColView({ findImgIndex, listOfImgs }) {
  const { isLoaded, setLoadTrue } = useLoading()

  const loadingContent = isLoaded ? (
    ""
  ) : (
    <Skeleton
      times={1}
      className={"absolute inset-0"}
    />
  )

  const imgArray = listOfImgs
  const imgList = [[], [], [], []]
  let listToAdd = 0

  const handleClick = (index) => {
    findImgIndex(index)
  }

  for (let index = 0; index < imgArray.length; index++) {
    const { imgWidth, imgHeight, imgUrl } = imgArray[index]
    if (listToAdd > 3) listToAdd = 0
    imgList[listToAdd].push(
      <div
        className="relative "
        key={index}>
        <img
          onClick={() => handleClick(index)}
          src={imgUrl}
          alt="picsum test img"
          onLoad={setLoadTrue}
          width={imgWidth}
          height={imgHeight}
          className="w-full"
        />
        {loadingContent}
      </div>
    )
    listToAdd++
  }

  return (
    <>
      <div className="gallery_items flex gap-1.5 flex-col w-full ">
        {imgList[0]}
      </div>
      <div className="gallery_items flex gap-1.5 flex-col w-full ">
        {imgList[1]}
      </div>
      <div className="gallery_items flex gap-1.5 flex-col w-full ">
        {imgList[2]}
      </div>
      <div className="gallery_items flex gap-1.5 flex-col w-full ">
        {imgList[3]}
      </div>
    </>
  )
}
export default FourColView
