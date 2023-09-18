export default function PhotoPage() {
  const imgArray = []
  const imgList1 = []
  const imgList2 = []
  for (let index = 0; index < 11; index++) {
    imgArray.push(`Array item ${index}`)
  }
  console.log("imgArray", imgArray)

  for (let index = 0; index < imgArray.length; index++) {
    if (index % 2 === 0) {
      imgList1.push(
        <div
          key={index}
          className="bg-sky-400 border-2 w-auto">
          {imgArray[index]}
        </div>
      )
    } else {
      imgList2.push(
        <div
          key={index}
          className="bg-sky-400 border-2 w-auto">
          {imgArray[index]}
        </div>
      )
    }
  }

  return (
    <div>
      <img
        className="w-full"
        src="https://picsum.photos/200"
        alt="random img"
      />
      <div className="p-4">
        <h2 className="text-3xl py-4 mb-4">Gallery</h2>
        <div className="flex justify-between">
          <div className="gallery_items flex flex-col w-full ">
            {imgList1}
          </div>
          <div className="gallery_items flex flex-col w-full ">
            {imgList2}
          </div>
        </div>
      </div>
    </div>
  )
}
