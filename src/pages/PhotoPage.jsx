import PhotoLists from "../components/PhotoLists"

export default function PhotoPage() {
  return (
    <div>
      <img
        className="w-full"
        src="https://picsum.photos/200"
        alt="random img"
      />
      <div className="p-4">
        <h2 className="text-3xl py-4 mb-4">Gallery</h2>
        <PhotoLists />
      </div>
    </div>
  )
}
