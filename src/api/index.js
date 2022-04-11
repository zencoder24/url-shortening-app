import axios from "axios"

const URLBase = "https://api.shrtco.de/v2/shorten?url="


const options ={
    method: 'GET/POST',
    params: {format:'json'}
}


export const getShortenedURL = async(submittedURL) => {
    try{
        const {data} = await axios.get(URLBase + `${submittedURL}`, options)
        return data
    } catch (error){
        console.log(error)
    }
}