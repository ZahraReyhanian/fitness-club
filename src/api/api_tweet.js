import {getAxiosInstanceApi, getAxiosInstanceJsonServer} from "./api";


export const getAllTweets = (callback)=>{
    getAxiosInstanceApi().post("/getAllTweet")
        .then(response => {
            const data = response.data;
            callback(true, data);
        })
        .catch(error => {
            console.log(error);
            callback(false, error);
        })
}

export const getTopUsers = (callback)=>{
    getAxiosInstanceApi().get("/getAllUser")
            .then(response => {
                const data = response.data;
                callback(true, data);
            })
            .catch(error => {
                console.log(error)
                callback(false, error);
            })
}

export const getHashTags = (callback)=>{
    getAxiosInstanceApi().get("/getAllHashTags")
    .then(response => {
        const data = response.data;
        callback(true, data);
    })
    .catch(error => {
        console.log(error)
        callback(false, error);
    })
}

export const newTweetRequest = (data, callback) => {
    getAxiosInstanceApi().post("newTweet", data)
            .then(response => {
                const data = response.data;
                callback(true, data);
            })
            .catch(error => {
                callback(false, error);
            })
}
