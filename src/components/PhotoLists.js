export const imgArray = []
for (let index = 0; index < 11; index++) {
  imgArray.push(`Array item ${index}`)
}
console.log("imgArray", imgArray)

export default function PhotoLists({ findImgIndex }) {
  const imgList1 = []
  const imgList2 = []
  for (let index = 0; index < 11; index++) {
    imgArray.push(`Array item ${index}`)
  }

  for (let index = 0; index < imgArray.length; index++) {
    if (index % 2 === 0) {
      imgList1.push(
        <div
          key={index}
          className="bg-sky-400 border-2">
          {imgArray[index]}
        </div>
      )
    } else {
      imgList2.push(
        <div
          key={index}
          className="bg-sky-400 border-2">
          {imgArray[index]}
        </div>
      )
    }
  }

  return (
    <div className="flex justify-between">
      <div className="gallery_items flex flex-col w-full ">
        {imgList1}
      </div>
      <div className="gallery_items flex flex-col w-full ">
        {imgList2}
      </div>
    </div>
  )
}
