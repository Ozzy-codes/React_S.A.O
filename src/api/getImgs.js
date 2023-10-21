import axios from "axios"

const getImgs = async () => {
  await axios
    .get("https://picsum.photos/v2/list")
    .then((results) => results.data)
    .catch((error) => console.error(error))
}

getImgs()
