import axios from 'axios'
import type { AxiosResponse } from 'axios'

interface IAxiosProps {
    code: number,
    msg: string,
    data: any,
    rows:any,
}

declare module 'axios' {
    interface AxiosInstance {
        (config: AxiosRequestConfig): Promise<IAxiosProps>
    }
}

const fetchData = axios.create({
    baseURL: 'import.meta.env.VITE_APP_URL',
    timeout: 5000
})

fetchData.interceptors.request.use(res => {
    // res.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
    return res
})

fetchData.interceptors.response.use((res: AxiosResponse<any, any>) => {
    return res.data
}, err => {
    return Promise.reject(err)
})

export default fetchData