import axios from "axios";

export const getAxiosInstanceJsonServer = () => {
    return axios.create({
        baseURL: 'https://twitterapi.liara.run/api',
        headers: {
            'x-auth-token': localStorage.getItem("x-auth-token")
        }
    });
}

export const getAxiosInstanceAuth = () => {
    return axios.create({
        baseURL: 'https://twitterapi.liara.run/api/',
        headers: {
            // 'x-auth-token': localStorage.getItem("x-auth-token")
        }
    });
}
export const getAxiosInstanceApi = () => {
    return axios.create({
        baseURL: 'https://twitterapi.liara.run/api/',
        headers: {
             'x-auth-token': localStorage.getItem("x-auth-token")
        }
    });
}


