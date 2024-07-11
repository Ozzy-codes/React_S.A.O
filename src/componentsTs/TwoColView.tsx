import useLoading from "../hooksTs/use-Loading"
import Skeleton from "./Skeleton"
import { PhotoListProps } from "./PhotoLists"

const TwoColView: React.FC<PhotoListProps> = ({ findImgIndex, listOfImgs }) => {
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
  const imgList1 = []
  const imgList2 = []

  const handleClick = (index: number) => {
    findImgIndex(index)
  }

  for (let index = 0; index < imgArray.length; index++) {
    const { imgWidth, imgHeight, imgUrl } = imgArray[index]
    if (index % 2 === 0) {
      imgList1.push(
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
    } else {
      imgList2.push(
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
    }
  }
  return (
    <>
      <div className="gallery_items flex gap-1.5 flex-col w-full ">
        {imgList1}
      </div>
      <div className="gallery_items flex gap-1.5 flex-col w-full ">
        {imgList2}
      </div>
    </>
  )
}
export default TwoColView
