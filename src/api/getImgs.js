import axios from "axios"

export const getImgs = async () => {
  return await axios
    .get("https://picsum.photos/v2/list")
    .then((results) =>
      results.data.map((element) => {
        return element.download_url
      })
    )
    .catch((error) => console.error(error))
}
