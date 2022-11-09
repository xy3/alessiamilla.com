import axios from "axios";

export const API_URL = "http://127.0.0.1:1337"

export const http = axios.create({
  baseURL: API_URL + "/api",
  headers: {
    Authorization: "bearer f3b1276044df85c34c1bbd1088f7ba127ed6037a0b3721bc1ba5a4ce9d53f81218a7c88dcebb114a5f67bda68cda1e50b5027212fa291ae8c8535e3c328501d6e872c997008da834115e36a53775520975f85dc30434a1e7b4663716c1150208705444c69d86f53a451b9d31083be61ad844a4f4e66ff12788fadfd960d0f4e8"
  }
})
