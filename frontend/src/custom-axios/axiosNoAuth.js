import axios from "axios";

const noAuth = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Access-Control-Allow-Origin' : '*',
    }
})


export default noAuth;