export default function PhotoLists({ findImgIndex, listOfImgs }) {
  console.log(listOfImgs)
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
        <img
          onClick={() => handleClick(index)}
          key={index}
          src={imgArray[index]}
          alt="picsum test img"
        />
      )
    } else {
      imgList2.push(
        <img
          onClick={() => handleClick(index)}
          key={index}
          src={imgArray[index]}
          alt="picsum test img"
        />
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
