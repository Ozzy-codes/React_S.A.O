import axios from "axios"

export const getPicsumImgs = async () => {
  return await axios
    .get("https://picsum.photos/v2/list")
    .then((results) =>
      results.data.map((element:{[key:string]:any}) => {
        return {
          imgWidth: element.width,
          imgHeight: element.height,
          imgUrl: element.download_url
        }
      })
    )
    .catch((error) => console.error(error))
}
