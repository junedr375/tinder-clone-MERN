import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tinder-backend-jr.herokuapp.com"
})

export default instance;