import axios from "axios";
import env from "dotenv";

env.config()

export const API_URL = process.env.API_URL

export const http = axios.create({
  baseURL: API_URL + "/api",
  headers: {
    Authorization: "bearer " + process.env.BEARER
  }
})
