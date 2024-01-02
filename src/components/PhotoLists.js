import TwoColView from "../components/TwoColView"
import FourColView from "./FourColView"
import useResize from "../hooks/use-Resize"

export default function PhotoLists({ findImgIndex, listOfImgs }) {
  const { nextViewPort } = useResize(1024)

  const colOption = nextViewPort ? (
    <FourColView
      findImgIndex={findImgIndex}
      listOfImgs={listOfImgs}
    />
  ) : (
    <TwoColView
      findImgIndex={findImgIndex}
      listOfImgs={listOfImgs}
    />
  )

  return (
    <div className="flex gap-1.5 justify-between">{colOption}</div>
  )
}
