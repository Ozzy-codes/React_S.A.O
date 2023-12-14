import useTopImgLoader from "../hooks/use-TopImgLoader"

export default function PhotoLists({ findImgIndex, listOfImgs }) {
  const { isLoaded, setLoadTrue, loadingContent } = useTopImgLoader()

  const imgArray = listOfImgs
  const imgList1 = []
  const imgList2 = []

  const handleClick = (index) => {
    console.log("photoLists cmpnt is sending index up")
    findImgIndex(index)
  }

  for (let index = 0; index < imgArray.length; index++) {
    if (index % 2 === 0) {
      imgList1.push(
        <div
          className={
            "relative " + (isLoaded ? "" : "h-[20vh] w-full")
          }>
          <img
            onClick={() => handleClick(index)}
            key={index}
            src={imgArray[index]}
            alt="picsum test img"
            onLoad={setLoadTrue}
          />
          {loadingContent}
        </div>
      )
    } else {
      imgList2.push(
        <div
          className={
            "relative " + (isLoaded ? "" : "h-[20vh] w-full")
          }>
          <img
            onClick={() => handleClick(index)}
            key={index}
            src={imgArray[index]}
            alt="picsum test img"
            onLoad={setLoadTrue}
          />
          {loadingContent}
        </div>
      )
    }
  }

  return (
    <div className="flex gap-1.5 justify-between">
      <div className="gallery_items flex gap-1.5 flex-col w-full ">
        {imgList1}
      </div>
      <div className="gallery_items flex gap-1.5 flex-col w-full ">
        {imgList2}
      </div>
    </div>
  )
}
