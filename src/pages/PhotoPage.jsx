export default function PhotoPage() {
  const imgList1 = []
  const imgList2 = []
  for (let index = 0; index < 11; index++) {
    imgList1.push(
      <div className="bg-sky-400 border-2 w-auto">item {index}</div>
    )
    imgList2.push(
      <div className="bg-sky-400 border-2 w-auto">item {index}</div>
    )
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
