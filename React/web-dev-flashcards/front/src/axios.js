import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:444/"
})

export default instance