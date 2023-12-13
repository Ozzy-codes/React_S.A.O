import Modal from "../components/Modal"
import PhotoLists from "../components/PhotoLists"
import useTopImgLoader from "../hooks/use-TopImgLoader"
import { useLoaderData } from "react-router-dom"
import { getImgs } from "../api/getImgs"
import { useState } from "react"

export async function loader() {
  const testImgs = await getImgs()
  return testImgs
}

export default function PhotoPage() {
  const { isLoaded, setLoadTrue, loadingContent } = useTopImgLoader()

  const testImgs = useLoaderData()
  console.log("testImgs in component: ", testImgs)

  const [showModal, setShowModal] = useState(false)
  const [imgIndex, setImgIndex] = useState("")

  const findImgIndex = (index) => {
    console.log("PhotoPage has received index", index)
    setImgIndex(index)
    setShowModal(true)
  }
  const incrementIndex = () => {
    setImgIndex(imgIndex + 1)
  }
  const decrementIndex = () => {
    setImgIndex(imgIndex - 1)
  }
  const handleClose = () => {
    setShowModal(false)
    console.log("handleClose function fired")
  }

  const modal = (
    <Modal
      imgIndex={imgIndex}
      nextImg={incrementIndex}
      previousImg={decrementIndex}
      onClose={handleClose}
      listOfImgs={testImgs}
    />
  )
  return (
    <div>
      <div
        className={"relative " + (isLoaded ? "" : "h-[65vh] w-full")}>
        <img
          className="w-full"
          src="https://picsum.photos/200/?blur=1"
          alt="random img"
          onLoad={setLoadTrue}
        />
        {loadingContent}
      </div>
      <div className="p-4">
        <h2 className="text-3xl py-4 mb-4">Gallery</h2>
        <PhotoLists
          listOfImgs={testImgs}
          findImgIndex={findImgIndex}
        />
      </div>
      {showModal && modal}
    </div>
  )
}
