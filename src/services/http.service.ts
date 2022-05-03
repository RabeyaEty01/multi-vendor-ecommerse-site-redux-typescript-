import axios from "axios";

const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 15000,


}
const instance: AxiosInstance = axios.create(axiosConfig);

instance.get("/product").then(res => res.data)