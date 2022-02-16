import axios from "axios";

const instance = axios.create({
    baseURL: "https://pixabay.com/api",
    params: {
        "key": '25420016-eb91b2af771977a7d26691575',
        "image_type": 'photo',
        "orientation": 'horizontal',
        "per_page": 12
    }
})

export const searchImages = async (page = 1, q = "") => {
    const {data} = await instance.get("/", {
        params: {
            page,
            q,
        }
    })
    return data
}