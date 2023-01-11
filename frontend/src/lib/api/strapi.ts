import axios from "axios";

const PUBLIC_API_URL = process.env.PUBLIC_API_URL

export const http = axios.create({
    baseURL: PUBLIC_API_URL + "/api",
})
