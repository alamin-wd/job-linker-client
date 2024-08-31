
import axios from "axios";

export const axiosSecure = axios.create({

    baseURL: 'https://job-linker-server.vercel.app'
})

const useAxiosSecure = () => {
    
    return axiosSecure;
}

export default useAxiosSecure; 