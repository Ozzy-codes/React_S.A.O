import Modal from "../components/Modal"
import PhotoLists from "../components/PhotoLists"
import TopImg from "../components/TopImg"
import { useLoaderData } from "react-router-dom"
// import { getPicsumImgs } from "../api/getPicsumImgs"
import { useState, useEffect } from "react"

export async function loader() {
  const testImgs = await getImgs()
  return testImgs
}

export default function PhotoPage() {
  const testImgs = useLoaderData()
  console.log("testImgs in component: ", testImgs)

  const [showModal, setShowModal] = useState(false)
  const [imgIndex, setImgIndex] = useState("")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
      <TopImg />
      <div className="p-4 bg-white ">
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
