import Modal from "../components/Modal"
import PhotoLists from "../components/PhotoLists"
import TopImg from "../components/TopImg"
import { useLoaderData } from "react-router-dom"
// import { getPicsumImgs } from "../api/getPicsumImgs"
import { getLocalImgs } from '../api/getLocalImgs'
import { useState, useEffect } from "react"

export function loader() {
  const testImgs = getLocalImgs()
  return testImgs
}

export default function PhotoPage() {
  const testImgs = useLoaderData()

  const [showModal, setShowModal] = useState(false)
  const [imgIndex, setImgIndex] = useState("")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const findImgIndex = (index) => {
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
