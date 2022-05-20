import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 15000,
}
const instance: AxiosInstance = axios.create(axiosConfig);


instance.interceptors.request.use(function (config) {
    // Do something before request is sent

    return {
        ...config,
        headers: {
            Authorization: JSON.parse(JSON.parse(localStorage.getItem("persist:root") || "").auth)?.data?.token,
        }
    };
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


class Request {
    async get(url: string): Promise<AxiosResponse> {
        return instance.get(url).then((res) => res.data);
    }
    async post(url: string, body: any): Promise<AxiosResponse> {
        return instance.post(url, body).then((res) => res.data);
    }
    async update(url: string, body: any): Promise<AxiosResponse> {
        return instance.patch(url, body).then((res) => res.data);
    }
    async delete(url: string): Promise<AxiosResponse> {
        return instance.delete(url).then((res) => res.data);
    }
}

const httpReq = new Request();

export default httpReq;