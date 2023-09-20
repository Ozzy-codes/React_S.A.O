import PhotoLists from "../components/PhotoLists"
import { useState } from "react"

export default function PhotoPage() {
  const [imgIndex, setImgIndex] = useState("")

  const findImgIndex = (index) => {
    console.log("PhotoPage has received index", index)
    setImgIndex(index)
  }
  const incrementIndex = () => {
    setImgIndex(imgIndex + 1)
  }
  const decrementIndex = () => {
    setImgIndex(imgIndex - 1)
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
        <PhotoLists findImgIndex={findImgIndex} />
      </div>
    </div>
  )
}
