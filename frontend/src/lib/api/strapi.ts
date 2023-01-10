import axios from "axios";
import process from "node:process"

export const API_URL = process?.env?.API_URL || "https://api.alessiamilla.com"

export const http = axios.create({
  baseURL: API_URL + "/api",
})
