// @ts-ignore
import useLoading from "../hooksTs/use-Loading"
import Skeleton from "./Skeleton"
import { PhotoListProps } from "./PhotoLists"

const FourColView: React.FC<PhotoListProps> = ({ findImgIndex, listOfImgs }) => {
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
  const imgList = [[], [], [], []] as any[][]
  let listToAdd = 0

  const handleClick = (index: number) => {
    findImgIndex(index)
  }

  for (let index = 0; index < imgArray.length; index++) {
    const { imgWidth, imgHeight, imgUrl, altText } = imgArray[index]
    if (listToAdd > 3) listToAdd = 0
    imgList[listToAdd].push(
      <button
        className="relative "
        key={index}
        onClick={() => handleClick(index)}
      >
        <img
          src={imgUrl}
          alt={altText}
          onLoad={setLoadTrue}
          width={imgWidth}
          height={imgHeight}
          className="w-full"
        />
        {loadingContent}
      </button>
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
