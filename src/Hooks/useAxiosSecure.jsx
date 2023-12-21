import axios from "axios";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

const axiosSecure = axios.create({
    baseURL: 'https://assignment11-server-side-chi.vercel.app/api/v1',
    withCredentials: true
})

const useAxiosSecure = () => {
    const {loggedOut} = UseAuth()
    const navigate = useNavigate()
    useEffect(()=>{

        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptor', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logout the user')
                loggedOut()
                    .then(() => { 
                        navigate('/login')
                    })
                    .catch(error => console.log(error))
            }
})


        // axiosSecure.interceptors.response.use(res => {
        //     return res;
        // }, error =>  {
        //     console.log('error tracked in the interceptor', error.response);
        //     if(error.response.status === 401 || error.response.status === 403 ){
        //         console.log('logout the user');
        //         logout()
        //         .then(()=>{
        //             navigate('/login')
        //         })
        //         .catch(error = console.log(error))
        //     }
        // })
    },[])

   return axiosSecure;
};

export default useAxiosSecure;