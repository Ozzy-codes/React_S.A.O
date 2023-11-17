import axios from "axios"

export const getImgs = async () => {
  return await axios
    .get("https://picsum.photos/v2/list")
    .then((results) => results.data)
    .catch((error) => console.error(error))
}
