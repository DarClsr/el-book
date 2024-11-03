import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";


const axiosConfig:AxiosRequestConfig = {
    timeout:50000,
    headers:{
        "Content-Type":"application/json:charset=UTF-8"
    },
    responseType:"json"
}


const AxiosInstance=axios.create(axiosConfig);


AxiosInstance.interceptors.response.use(
    (res:AxiosResponse)=>{

        if(res.status!==200 && !res.data){
            throw "error"
        }

        return res.data;

    },
    (error:AxiosError)=>{
        throw error;
    }
)


export default AxiosInstance;