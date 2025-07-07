import TwoColView from "../componentsTs/TwoColView"
import FourColView from "./FourColView"
import useResize from "../hooksTs/use-Resize"
import { testImgType } from "../pagesTs/PhotoPage"

export interface PhotoListProps {
  findImgIndex: (index: number) => void,
  listOfImgs: testImgType
}

// TODO: consider how the Photolist is browsed by screen readers and for accessibility 
//
const PhotoList: React.FC<PhotoListProps> = ({ findImgIndex, listOfImgs }) => {
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
export default PhotoList
